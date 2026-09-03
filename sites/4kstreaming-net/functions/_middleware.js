// Canonical host + scheme enforcement: www.4kstreaming.net and any plain-HTTP
// request 301-redirect to https://4kstreaming.net, avoiding duplicate content
// across the www/non-www and http/https variants of the site.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  let changed = false;

  if (url.hostname === 'www.4kstreaming.net') {
    url.hostname = '4kstreaming.net';
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
