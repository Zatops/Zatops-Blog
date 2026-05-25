// Cloudflare Pages Functions - GitHub OAuth for Decap CMS
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (url.searchParams.get('code')) {
    const code = url.searchParams.get('code');
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      })
    });

    const data = await response.json();
    const accessToken = data.access_token;

    return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>正在登录...</title>
    </head>
    <body>
      <script>
        window.opener && window.opener.postMessage({
          type: 'authorization',
          provider: 'github',
          token: '${accessToken}',
        }, window.location.origin);
        setTimeout(() => window.close(), 500);
      </script>
      <p>授权成功！正在返回后台...</p>
    </body>
    </html>
  `, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }
  return Response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=public_repo,user`,
    302
  );
}
