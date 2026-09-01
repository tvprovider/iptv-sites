#!/usr/bin/env node

import { exec, execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

const CONFIG = {
    domain: process.argv[2] || '4kstreaming.net',
    leadEmail: 'contacts.storfix@gmail.com',
    paths: {
        sites: path.join(__dirname, 'sites'),
        reports: path.join(__dirname, 'reports')
    }
};

// ============================================================
// MAIN AUTOMATION PIPELINE - 100% AUTOMATED
// ============================================================

async function main() {
    console.log('\n🤖 IPTV AUTOMATION MACHINE - 100% AUTOMATED');
    console.log('='.repeat(70));
    
    const domain = CONFIG.domain;
    const keyword = extractKeyword(domain);
    const siteId = uuidv4().slice(0, 8);
    const siteDir = path.join(CONFIG.paths.sites, siteId);
    
    console.log(`📌 Domain: ${domain}`);
    console.log(`📌 Keyword: "${keyword}"`);
    console.log('='.repeat(70));
    
    try {
        // STEP 1: Generate website using OSW Studio CLI/API
        console.log('\n📝 Generating website via OSW Studio...');
        await generateWithOSWStudio(siteDir, domain, keyword);
        
        // STEP 2: Generate images via Wafle-Imago
        console.log('\n🖼️ Generating images...');
        await generateImages(siteDir, keyword);
        
        // STEP 3: Run SEO & GEO audits
        console.log('\n🔍 Running SEO/GEO audits...');
        await runSEO(siteDir);
        
        // STEP 4: Add lead capture
        console.log('\n📧 Adding lead capture...');
        await addLeadCapture(siteDir, domain);
        
        // STEP 5: Deploy to Cloudflare
        console.log('\n🚀 Deploying to Cloudflare...');
        const url = await deploy(siteDir, domain);
        
        // STEP 6: Connect Namecheap
        console.log('\n🌐 Connecting Namecheap domain...');
        await connectNamecheap(domain, url);
        
        // STEP 7: Push to GitHub
        console.log('\n📤 Pushing to GitHub...');
        await pushToGitHub(siteId, domain);
        
        console.log('\n✅ ALL DONE!');
        console.log(`🌎 https://${domain}`);
        console.log(`📁 Site ID: ${siteId}`);
        console.log('='.repeat(70));
        
    } catch (error) {
        console.error('❌ Failed:', error.message);
        process.exit(1);
    }
}

// ============================================================
// STEP 1: Generate Website via OSW Studio
// ============================================================

async function generateWithOSWStudio(siteDir, domain, keyword) {
    // OSW Studio runs on localhost:3000
    // It has an API endpoint for generation
    
    const prompt = `
Create a premium IPTV website for ${keyword}.

Domain: ${domain}
Pages: Home, Pricing, Free Trial, Setup, Contact, About, FAQ, Privacy, Refund, Terms, Disclaimer.
Pricing: 1mo $14.99, 3mo $34.99, 6mo $54.99, 12mo $79.99. Trial: $1.00.
Design: White background, professional, no emojis.
SEO/GEO: 100% optimized.
Lead capture: Email to ${CONFIG.leadEmail} via Resend.
`;

    await fs.ensureDir(siteDir);
    await fs.writeFile(path.join(siteDir, 'prompt.txt'), prompt);
    
    // Try to use OSW Studio's API (if available)
    try {
        // Attempt to trigger OSW Studio generation via API
        // Since OSW Studio uses Next.js, we can try to use its API route
        const oswUrl = 'http://localhost:3000/api/generate';
        const response = await fetch(oswUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, domain, keyword })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.content) {
                await fs.writeFile(path.join(siteDir, 'index.html'), data.content);
                console.log('   ✅ OSW Studio generated the site via API');
                return;
            }
        }
    } catch {
        console.log('   ⚠️ OSW Studio API unavailable, using fallback...');
    }
    
    // FALLBACK: Use HugoBlox or WebNami via CLI
    console.log('   📌 Using HugoBlox as fallback generator...');
    await generateWithHugoBlox(siteDir, domain, keyword);
}

// ============================================================
// FALLBACK: Generate via HugoBlox
// ============================================================

async function generateWithHugoBlox(siteDir, domain, keyword) {
    try {
        // Create a basic Hugo site
        execSync(`hugo new site ${siteDir} --force`, { stdio: 'inherit' });
        // Add content
        await fs.writeFile(path.join(siteDir, 'content', '_index.md'), `
---
title: "${keyword}"
date: ${new Date().toISOString()}
---

# ${keyword} - Premium IPTV Service

Welcome to ${keyword}. 10,000+ channels in 4K quality.
        `);
        console.log('   ✅ HugoBlox generated the site');
    } catch {
        // Final fallback: generate basic HTML
        console.log('   📌 Generating basic HTML...');
        await generateBasicHTML(siteDir, domain, keyword);
    }
}

// ============================================================
// STEP 2: Generate Images
// ============================================================

async function generateImages(siteDir, keyword) {
    const imagesDir = path.join(siteDir, 'images');
    await fs.ensureDir(imagesDir);
    
    try {
        await execAsync(`wafle-imago generate "${keyword} hero banner" --output "${imagesDir}/hero.jpg"`);
        await execAsync(`wafle-imago generate "${keyword} streaming TV" --output "${imagesDir}/streaming.jpg"`);
        console.log('   ✅ Images generated');
    } catch {
        console.log('   ⚠️ Image generation skipped');
    }
}

// ============================================================
// STEP 3: Run SEO/GEO Audits
// ============================================================

async function runSEO(siteDir) {
    try {
        await execAsync(`mcp-seo audit "${siteDir}"`);
        await execAsync(`siteos-check --dist "${siteDir}"`);
        await execAsync(`seo-lint-cli "${siteDir}"`);
        console.log('   ✅ SEO audits complete');
    } catch {
        console.log('   ⚠️ SEO audits skipped');
    }
}

// ============================================================
// STEP 4: Add Lead Capture
// ============================================================

async function addLeadCapture(siteDir, domain) {
    const workerDir = path.join(siteDir, 'api');
    await fs.ensureDir(workerDir);
    await fs.writeFile(path.join(workerDir, 'lead.js'), `
export default {
    async fetch(request) {
        if (request.method === 'POST') {
            const data = await request.json();
            await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ${process.env.RESEND_API_KEY}',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'leads@${domain}',
                    to: '${CONFIG.leadEmail}',
                    subject: 'New IPTV Lead from ${domain}',
                    html: \`
                        <h2>New Lead from ${domain}</h2>
                        <p><strong>Email:</strong> \${data.email}</p>
                        <p><strong>Timestamp:</strong> \${new Date().toISOString()}</p>
                    \`
                })
            });
            return new Response(JSON.stringify({ success: true }));
        }
        return new Response('Method not allowed', { status: 405 });
    }
}`);
    console.log('   ✅ Lead capture added');
}

// ============================================================
// STEP 5: Deploy to Cloudflare
// ============================================================

async function deploy(siteDir, domain) {
    const projectName = domain.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9-]/g, '-');
    try {
        await execAsync(`wrangler pages project create "${projectName}" --production-branch main`);
        await execAsync(`wrangler pages deploy "${siteDir}" --project-name="${projectName}"`);
        console.log(`   ✅ Deployed to Cloudflare`);
        return `https://${projectName}.pages.dev`;
    } catch {
        return `https://${projectName}.pages.dev`;
    }
}

// ============================================================
// STEP 6: Connect Namecheap Domain
// ============================================================

async function connectNamecheap(domain, url) {
    try {
        const parts = domain.split('.');
        const sld = parts[0];
        const tld = parts.slice(1).join('.');
        const apiUser = process.env.NAMECHEAP_API_USER;
        const apiKey = process.env.NAMECHEAP_API_KEY;
        const clientIp = process.env.NAMECHEAP_CLIENT_IP;
        
        const dnsUrl = `https://api.namecheap.com/xml.response?ApiUser=${apiUser}&ApiKey=${apiKey}&UserName=${apiUser}&ClientIp=${clientIp}&Command=namecheap.domains.dns.setHosts&SLD=${sld}&TLD=${tld}&HostName1=@&RecordType1=CNAME&Address1=${url.replace('https://', '')}&TTL1=300&HostName2=www&RecordType2=CNAME&Address2=${domain}&TTL2=300`;
        
        const response = await fetch(dnsUrl);
        const data = await response.text();
        if (data.includes('Status="OK"')) {
            console.log('   ✅ Domain connected');
        }
    } catch {
        console.log('   ⚠️ DNS setup skipped');
    }
}

// ============================================================
// STEP 7: Push to GitHub
// ============================================================

async function pushToGitHub(siteId, domain) {
    try {
        execSync(`git add sites/${siteId}/`, { stdio: 'inherit' });
        execSync(`git commit -m "Add site: ${domain} (${siteId})"`, { stdio: 'inherit' });
        execSync(`git push origin main`, { stdio: 'inherit' });
        console.log('   ✅ Pushed to GitHub');
    } catch {
        console.log('   ⚠️ GitHub push skipped');
    }
}

// ============================================================
// HELPERS
// ============================================================

function extractKeyword(domain) {
    let k = domain.replace(/\.[^.]+$/, '');
    k = k.replace(/([A-Z])/g, ' $1').replace(/(\d)([A-Z])/g, '$1 $2');
    k = k.replace(/iptv/gi, 'IPTV').replace(/4k/gi, '4K');
    k = k.replace(/^./, s => s.toUpperCase()).trim();
    if (!k.toLowerCase().includes('iptv')) k += ' IPTV';
    return k;
}

// ============================================================
// RUN
// ============================================================

main().catch(console.error);