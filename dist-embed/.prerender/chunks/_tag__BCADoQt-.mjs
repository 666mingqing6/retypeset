import { $ as $$Layout } from './Layout_2SyRamIj.mjs';
import { c as createComponent } from './runtime_0NnP4MOM.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_Bp-MtqDB.mjs';
import { $ as $$PostList } from './PostList_BjhKDtVT.mjs';
import { $ as $$TagList } from './TagList_BeuSjxWc.mjs';
import { allLocales } from './config_BmNIlZ_0.mjs';
import { g as getLangRouteParam, a as getLangFromLocale } from './lang_CFkXJoui.mjs';
import { g as getAllTags, a as getPostsByTag, b as getTagSupportedLangs } from './content_D_pbkhTR.mjs';

async function getStaticPaths() {
  const paths = await Promise.all(allLocales.map(async (lang) => {
    const langTags = await getAllTags(lang);
    return langTags.map((tag) => ({
      params: { lang: getLangRouteParam(lang), tag },
      props: { tag }
    }));
  }));
  return paths.flat();
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const currentLang = getLangFromLocale(Astro2.currentLocale);
  const posts = await getPostsByTag(tag, currentLang);
  const allTags = await getAllTags(currentLang);
  const supportedLangs = await getTagSupportedLangs(tag);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "supportedLangs": supportedLangs }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="uno-decorative-line"></div>  ${renderComponent($$result2, "TagList", $$TagList, { "tags": allTags, "currentTag": tag, "lang": currentLang })}  ${renderComponent($$result2, "PostList", $$PostList, { "posts": posts, "lang": currentLang })} ` })}`;
}, "Z:/retypeset/src/pages/[...lang]/tags/[tag].astro", void 0);

const $$file = "Z:/retypeset/src/pages/[...lang]/tags/[tag].astro";
const $$url = "/[...lang]/tags/[tag]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
