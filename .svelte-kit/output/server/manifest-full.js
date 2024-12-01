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
		client: {"start":"_app/immutable/entry/start.cA4dcJha.js","app":"_app/immutable/entry/app.Cm1e4Ih3.js","imports":["_app/immutable/entry/start.cA4dcJha.js","_app/immutable/chunks/entry.CfTq7tHl.js","_app/immutable/chunks/runtime.dIlVsl3g.js","_app/immutable/chunks/index.CcOAGtu_.js","_app/immutable/entry/app.Cm1e4Ih3.js","_app/immutable/chunks/runtime.dIlVsl3g.js","_app/immutable/chunks/store.CYoyvIjJ.js","_app/immutable/chunks/disclose-version.CyDW84BB.js","_app/immutable/chunks/if.3M4gTe17.js","_app/immutable/chunks/index-client.BFDh7Ke2.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
