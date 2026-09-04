// Canonical host + scheme enforcement: www.iptvhot.org and any plain-HTTP
// request 301-redirect to https://iptvhot.org, avoiding duplicate content
// across the www/non-www and http/https variants of the site.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  let changed = false;

  if (url.hostname === 'www.iptvhot.org') {
    url.hostname = 'iptvhot.org';
    changed = true;
  }
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    changed = true;
  }

  if (changed) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
