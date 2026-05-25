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
		
		// Decap CMS 期望的 implicit grant 格式: /admin/#/access_token=xxx&token_type=bearer
		// 注意：需要包含 #/ 前缀，这样 Decap CMS 路由才能正确识别
		const hashFragment =
			"/access_token=" +
			encodeURIComponent(accessToken) +
			"&token_type=bearer";

		const html =
			`<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<title>GitHub Authorization</title>
			</head>
			<body>
				<p>授权成功，正在跳转...</p>
				<script>
					window.location.href = "/admin#" + ${JSON.stringify(hashFragment)};
				</script>
			</body>
			</html>`;

		return new Response(html, {
			headers: {
				"Content-Type": "text/html; charset=utf-8",
			},
		});
	}
	
	// 没有 code 参数时，重定向到 GitHub OAuth 授权页面
	return Response.redirect(
		"https://github.com/login/oauth/authorize?client_id=" +
			encodeURIComponent(clientId) +
			"&scope=public_repo,user",
		302,
	);
}
