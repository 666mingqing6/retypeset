import { $ as $$Layout } from './Layout_2SyRamIj.mjs';
import { c as createComponent } from './runtime_0NnP4MOM.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_Bp-MtqDB.mjs';
import { $ as $$TagList } from './TagList_BeuSjxWc.mjs';
import { allLocales } from './config_BmNIlZ_0.mjs';
import { g as getLangRouteParam, a as getLangFromLocale } from './lang_CFkXJoui.mjs';
import { g as getAllTags } from './content_D_pbkhTR.mjs';

async function getStaticPaths() {
  return allLocales.map((lang) => ({
    params: { lang: getLangRouteParam(lang) }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = getLangFromLocale(Astro2.currentLocale);
  const allTags = await getAllTags(currentLang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="uno-decorative-line"></div>  ${renderComponent($$result2, "TagList", $$TagList, { "tags": allTags, "lang": currentLang })} ` })}`;
}, "Z:/retypeset/src/pages/[...lang]/tags/index.astro", void 0);

const $$file = "Z:/retypeset/src/pages/[...lang]/tags/index.astro";
const $$url = "/[...lang]/tags/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
