export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C3C7METO.js","app":"_app/immutable/entry/app.CmUCRezy.js","imports":["_app/immutable/entry/start.C3C7METO.js","_app/immutable/chunks/entry.hCN1fQ0Q.js","_app/immutable/chunks/runtime.C9x5TqNz.js","_app/immutable/chunks/index.D7rUKoVr.js","_app/immutable/entry/app.CmUCRezy.js","_app/immutable/chunks/runtime.C9x5TqNz.js","_app/immutable/chunks/store.BFs-3jAa.js","_app/immutable/chunks/disclose-version.BQLLeoZw.js","_app/immutable/chunks/if.C3PKMzgj.js","_app/immutable/chunks/index-client.B3nka6Y2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/planets",
				pattern: /^\/planets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
