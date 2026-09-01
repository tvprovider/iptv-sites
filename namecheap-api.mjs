#!/usr/bin/env node

import 'dotenv/config';
import https from 'https';
import xml2js from 'xml2js';

class NamecheapAPI {
    constructor() {
        this.apiUser = process.env.NAMECHEAP_API_USER;
        this.apiKey = process.env.NAMECHEAP_API_KEY;
        this.clientIp = process.env.NAMECHEAP_CLIENT_IP;
        
        if (!this.apiUser || !this.apiKey || !this.clientIp) {
            throw new Error('Missing credentials in .env file');
        }
    }
    
    async request(command, params = {}) {
        const queryParams = new URLSearchParams({
            ApiUser: this.apiUser,
            ApiKey: this.apiKey,
            UserName: this.apiUser,
            ClientIp: this.clientIp,
            Command: command,
            ...params
        });
        
        const url = `https://api.namecheap.com/xml.response?${queryParams.toString()}`;
        
        console.log(`📤 Request: ${command}`);
        
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                req.destroy();
                reject(new Error('Request timeout after 30 seconds'));
            }, 30000);
            
            const req = https.get(url, (response) => {
                clearTimeout(timeout);
                let data = '';
                
                response.on('data', (chunk) => {
                    data += chunk;
                });
                
                response.on('end', () => {
                    if (response.statusCode !== 200) {
                        reject(new Error(`HTTP ${response.statusCode}: ${data}`));
                        return;
                    }
                    
                    if (!data || data.trim() === '') {
                        reject(new Error('Empty response from Namecheap'));
                        return;
                    }
                    
                    // Parse XML with proper options
                    xml2js.parseString(data, {
                        explicitArray: false,
                        mergeAttrs: true,
                        xmlns: false
                    }, (err, result) => {
                        if (err) {
                            console.error('XML Parse Error:', err.message);
                            console.error('Raw XML (first 500 chars):', data.substring(0, 500));
                            reject(new Error(`XML Parse Error: ${err.message}`));
                            return;
                        }
                        resolve(result);
                    });
                });
            }).on('error', (error) => {
                clearTimeout(timeout);
                reject(error);
            });
        });
    }
    
    async getDomains() {
        const result = await this.request('namecheap.domains.getList', {
            PageSize: 100,
            Page: 1
        });
        
        // Debug: log the full response structure
        // console.log('📋 Full response:', JSON.stringify(result, null, 2).substring(0, 1000));
        
        // Check for errors
        if (result.ApiResponse && result.ApiResponse.Errors) {
            const errors = result.ApiResponse.Errors.Error;
            if (errors) {
                throw new Error(Array.isArray(errors) ? errors.join(', ') : errors);
            }
        }
        
        // Extract domains - handle both array and single object
        const domainResult = result.ApiResponse?.CommandResponse?.DomainGetListResult;
        if (!domainResult) {
            console.log('📭 No DomainGetListResult found in response');
            return [];
        }
        
        // Domain can be array or single object
        let domains = domainResult.Domain || [];
        if (!Array.isArray(domains)) {
            domains = [domains];
        }
        
        return domains;
    }
}

async function main() {
    console.log('🚀 Namecheap API Test\n');
    console.log('📋 Credentials:');
    console.log(`   Username: ${process.env.NAMECHEAP_API_USER || '❌ Missing'}`);
    console.log(`   API Key: ${process.env.NAMECHEAP_API_KEY ? '✅ Set' : '❌ Missing'}`);
    console.log(`   Client IP: ${process.env.NAMECHEAP_CLIENT_IP || '❌ Missing'}`);
    console.log('');
    
    try {
        const api = new NamecheapAPI();
        
        console.log('🔄 Fetching your domains...\n');
        const domains = await api.getDomains();
        
        if (!domains || domains.length === 0) {
            console.log('📭 No domains found in your account.');
            return;
        }
        
        console.log(`🎉 SUCCESS! You have ${domains.length} domains:`);
        console.log('─'.repeat(55));
        domains.forEach((domain, index) => {
            const name = domain.Name || domain.$.Name || 'Unknown';
            const expires = domain.Expires || domain.$.Expires || 'Unknown';
            console.log(`   ${String(index + 1).padStart(2)}. ${name.padEnd(35)} Expires: ${expires}`);
        });
        console.log('─'.repeat(55));
        console.log('\n✅ Connection to Namecheap API is working perfectly!');
        console.log('🎯 You can now automate domain management.');
        console.log('\n📊 Total domains:', domains.length);
        
    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        console.error('Full error:', error);
        
        if (error.message.includes('1011102')) {
            console.error('\n🔴 IP NOT WHITELISTED!');
            console.error('Add this IP:', process.env.NAMECHEAP_CLIENT_IP);
        } else if (error.message.includes('101')) {
            console.error('\n🔴 INVALID API KEY!');
            console.error('Regenerate your API key in Namecheap.');
        }
    }
}

main();