// Canonical host + scheme enforcement: www.iptvappletv.com and any plain-HTTP
// request 301-redirect to https://iptvappletv.com, avoiding duplicate content
// across the www/non-www and http/https variants of the site.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  let changed = false;

  if (url.hostname === 'www.iptvappletv.com') {
    url.hostname = 'iptvappletv.com';
    changed = true;
  }
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    changed = true;
  }

  if (changed) {
    // 301 drops the body on non-GET requests (POST/etc.), which silently
    // breaks form submissions that reach this redirect. 308 preserves the
    // method and body, same as 301 for the SEO-relevant GET/HEAD case.
    const status = context.request.method === 'GET' || context.request.method === 'HEAD' ? 301 : 308;
    return Response.redirect(url.toString(), status);
  }

  return context.next();
}
