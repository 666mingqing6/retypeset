import { $ as $$Layout } from './Layout_COh26ywe.mjs';
import { c as createComponent } from './runtime_y5MRq01h.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_DXDN-2aX.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DHJr_nyr.mjs';
import { allLocales } from './config_BmNIlZ_0.mjs';
import { g as getLangRouteParam, a as getLangFromLocale } from './lang_CFkXJoui.mjs';

async function getStaticPaths() {
  return allLocales.map((lang) => ({
    params: { lang: getLangRouteParam(lang) }
  }));
}
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const currentLang = getLangFromLocale(Astro2.currentLocale);
  const allAboutEntries = await getCollection("about");
  const aboutEntry = allAboutEntries.find((entry) => entry.data.lang === currentLang) ?? allAboutEntries.find((entry) => entry.data.lang === "");
  const { Content } = aboutEntry ? await renderEntry(aboutEntry) : { Content: null };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="uno-decorative-line"></div>  <div class="heti"> ${Content && renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </div> ` })}`;
}, "Z:/retypeset/src/pages/[...lang]/about.astro", void 0);

const $$file = "Z:/retypeset/src/pages/[...lang]/about.astro";
const $$url = "/[...lang]/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
