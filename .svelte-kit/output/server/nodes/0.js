

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CGEeY4kN.js","_app/immutable/chunks/disclose-version.CyDW84BB.js","_app/immutable/chunks/runtime.dIlVsl3g.js"];
export const stylesheets = [];
export const fonts = [];
