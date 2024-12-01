

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BJTGGxzw.js","_app/immutable/chunks/disclose-version.BQLLeoZw.js","_app/immutable/chunks/runtime.C9x5TqNz.js"];
export const stylesheets = [];
export const fonts = [];
