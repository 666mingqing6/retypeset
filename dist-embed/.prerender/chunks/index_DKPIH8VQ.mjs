import { $ as $$Layout } from './Layout_2SyRamIj.mjs';
import { c as createComponent } from './runtime_0NnP4MOM.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_Bp-MtqDB.mjs';
import { $ as $$PostList } from './PostList_BjhKDtVT.mjs';
import { allLocales } from './config_BmNIlZ_0.mjs';
import { g as getLangRouteParam, a as getLangFromLocale } from './lang_CFkXJoui.mjs';
import { d as getPinnedPosts, e as getPostsByYear } from './content_D_pbkhTR.mjs';

async function getStaticPaths() {
  return allLocales.map((lang) => ({
    params: { lang: getLangRouteParam(lang) }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = getLangFromLocale(Astro2.currentLocale);
  const pinnedPosts = await getPinnedPosts(currentLang);
  const postsByYear = await getPostsByYear(currentLang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${pinnedPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="mb-7.5"> <div class="uno-decorative-line"></div> ${renderComponent($$result2, "PostList", $$PostList, { "posts": pinnedPosts, "lang": currentLang, "pinned": true })} </section>`} ${Array.from(postsByYear.entries(), ([_year, posts]) => renderTemplate`<section class="mb-7.5"> <div class="uno-decorative-line"></div> ${renderComponent($$result2, "PostList", $$PostList, { "posts": posts, "lang": currentLang })} </section>`)}` })}`;
}, "Z:/retypeset/src/pages/[...lang]/index.astro", void 0);

const $$file = "Z:/retypeset/src/pages/[...lang]/index.astro";
const $$url = "/[...lang]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
