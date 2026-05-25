export async function onRequest(context) {
	const { request, env } = context;
	const url = new URL(request.url);
	const clientId = env.GITHUB_CLIENT_ID;
	const clientSecret = env.GITHUB_CLIENT_SECRET;

	if (url.searchParams.get("code")) {
		const code = url.searchParams.get("code");
		const response = await fetch(
			"https://github.com/login/oauth/access_token",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					client_id: clientId,
					client_secret: clientSecret,
					code: code,
				}),
			},
		);

		const data = await response.json();
		const accessToken = data.access_token;
		const hashFragment =
			"access_token=" +
			accessToken +
			"&token_type=bearer&provider=github";

		const html =
			"<!DOCTYPE html><html><head><meta charset='utf-8'><title>Auth</title></head><body><script>window.location.replace('/admin/#" +
			hashFragment +
			"');</script></body></html>";

		return new Response(html, {
			headers: {
				"Content-Type": "text/html; charset=utf-8",
			},
		});
	}
	return Response.redirect(
		"https://github.com/login/oauth/authorize?client_id=" +
			clientId +
			"&scope=public_repo,user",
		302,
	);
}
