import { T as store_get, V as unsubscribe_stores, R as pop, P as push } from "../../chunks/index.js";
import { l as loggedInUser } from "../../chunks/store.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<main class="svelte-zxkzsj"><h1>Welcome to the Star Wars Planet Encyclopedia!</h1> `;
  if (store_get($$store_subs ??= {}, "$loggedInUser", loggedInUser)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>Greetings, Master ${escape_html(store_get($$store_subs ??= {}, "$loggedInUser", loggedInUser))}!</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p>Explore the planets from the Star Wars Universe.</p> <a href="/planets" class="button svelte-zxkzsj">Discover Planets</a> `;
  if (!store_get($$store_subs ??= {}, "$loggedInUser", loggedInUser)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="login-button">Login</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
