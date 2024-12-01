import { T as store_get, W as ensure_array_like, V as unsubscribe_stores } from "../../../chunks/index.js";
import { l as loggedInUser, a as loading, p as planets } from "../../../chunks/store.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload) {
  var $$store_subs;
  let isLoggedIn;
  isLoggedIn = store_get($$store_subs ??= {}, "$loggedInUser", loggedInUser) !== null;
  $$payload.out += `<main class="svelte-9lgsjg"><h1>`;
  if (isLoggedIn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `Which planet should we visit, Master ${escape_html(store_get($$store_subs ??= {}, "$loggedInUser", loggedInUser))}!`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `Star Wars Planets`;
  }
  $$payload.out += `<!--]--></h1> <a href="/" class="back-button svelte-9lgsjg">Back to Home</a> `;
  if (store_get($$store_subs ??= {}, "$loading", loading)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>Loading planet data...</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$planets", planets));
    $$payload.out += `<ul class="svelte-9lgsjg"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let planet = each_array[$$index];
      $$payload.out += `<li class="svelte-9lgsjg">${escape_html(planet.name)}</li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
