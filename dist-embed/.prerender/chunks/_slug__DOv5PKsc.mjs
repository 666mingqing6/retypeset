import { r as renderScript, g as getPageInfo, u as ui, $ as $$Layout } from './Layout_2SyRamIj.mjs';
import { c as createComponent, a as createSvgComponent } from './runtime_0NnP4MOM.mjs';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, c as renderTransition } from './prerender_Bp-MtqDB.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_BbEkaeR_.mjs';
import { themeConfig, defaultLocale, allLocales } from './config_BmNIlZ_0.mjs';
import { b as giscusLocaleMap, t as twikooLocaleMap, w as walineLocaleMap, g as getLangRouteParam, a as getLangFromLocale } from './lang_CFkXJoui.mjs';
import { $ as $$PostDate } from './PostDate_DQYwbay1.mjs';
import { $ as $$TagList } from './TagList_BeuSjxWc.mjs';
import { c as checkPostSlugDuplication } from './content_D_pbkhTR.mjs';
import { g as getPostDescription } from './description_BtY873aH.mjs';

const $$Giscus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Giscus;
  const {
    repo = "",
    repoId = "",
    category = "",
    categoryId = "",
    mapping = "pathname",
    strict = "0",
    reactionsEnabled = "1",
    emitMetadata = "0",
    inputPosition = "bottom"
  } = themeConfig.comment.giscus ?? {};
  const currentPath = Astro2.url.pathname;
  const pathWithoutBase = currentPath;
  const matchedLang = Object.keys(giscusLocaleMap).find((code) => pathWithoutBase.startsWith(`/${code}/`));
  const lang = matchedLang ?? defaultLocale;
  const giscusConfig = {
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    strict,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    lang: giscusLocaleMap[lang]
  };
  return renderTemplate`${maybeRenderHead()}<div id="giscus" class="giscus mt-16"${addAttribute(JSON.stringify(giscusConfig), "data-config")}></div> <!-- Giscus Script >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> ${renderScript($$result, "Z:/retypeset/src/components/Comment/Giscus.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Comment/Giscus.astro", void 0);

const twikooCSS = "/_astro/twikoo.CRMuMhRA.css";

const twikooJS = "/_astro/twikoo.nocss.BB7vitaB.js";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Twikoo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Twikoo;
  const { envId = "" } = themeConfig.comment.twikoo ?? {};
  const currentPath = Astro2.url.pathname;
  const localePattern = new RegExp(`\\/(${allLocales.join("|")})\\/`);
  const twikooPath = currentPath.replace(localePattern, "/");
  const pathWithoutBase = currentPath;
  const matchedLang = Object.keys(twikooLocaleMap).find((code) => pathWithoutBase.startsWith(`/${code}/`));
  const lang = matchedLang ?? defaultLocale;
  const twikooConfig = {
    envId,
    path: twikooPath,
    lang: twikooLocaleMap[lang],
    twikooCSS
  };
  return renderTemplate(_a || (_a = __template(["<!-- Class not working on twikoo div -->", '<div id="twikoo-wrapper" class="no-heti mt-16"', '> <div id="twikoo"></div> </div> <!-- Twikoo Script >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> <script', "><\/script> ", ""])), maybeRenderHead(), addAttribute(JSON.stringify(twikooConfig), "data-config"), addAttribute(twikooJS, "src"), renderScript($$result, "Z:/retypeset/src/components/Comment/Twikoo.astro?astro&type=script&index=0&lang.ts"));
}, "Z:/retypeset/src/components/Comment/Twikoo.astro", void 0);

const walineJS = "/_astro/waline.CYSBCvn_.js";

const walineCSS = "/_astro/waline.DGqMuvjt.css";

const $$Waline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Waline;
  const {
    serverURL = "",
    emoji = [],
    search = false,
    imageUploader = false
  } = themeConfig.comment.waline ?? {};
  const currentPath = Astro2.url.pathname;
  const localePattern = new RegExp(`\\/(${allLocales.join("|")})\\/`);
  const walinePath = currentPath.replace(localePattern, "/");
  const pathWithoutBase = currentPath;
  const matchedLang = Object.keys(walineLocaleMap).find((code) => pathWithoutBase.startsWith(`/${code}/`));
  const lang = matchedLang ?? defaultLocale;
  const walineConfig = {
    serverURL,
    path: walinePath,
    lang: walineLocaleMap[lang],
    emoji,
    search,
    imageUploader,
    walineJS,
    walineCSS
  };
  return renderTemplate`${maybeRenderHead()}<div id="waline" class="no-heti mt-16"${addAttribute(JSON.stringify(walineConfig), "data-config")} data-astro-cid-fuqhdq35></div> <!-- Waline Script >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> ${renderScript($$result, "Z:/retypeset/src/components/Comment/Waline.astro?astro&type=script&index=0&lang.ts")} <!-- Official CSS Variables >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->`;
}, "Z:/retypeset/src/components/Comment/Waline.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { enabled: enableComment } = themeConfig.comment;
  const showGiscus = enableComment;
  const showTwikoo = enableComment;
  const showWaline = enableComment;
  return renderTemplate`<!-- {showDisqus && <Disqus />} -->${showGiscus}${showTwikoo}${showWaline}`;
}, "Z:/retypeset/src/components/Comment/Index.astro", void 0);

const GoBackIcon = createSvgComponent({"meta":{"src":"/_astro/go-back.BkaJ6n0o.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\r\n  <path d=\"M17.8.7L4,12l13.8,11.4.7-.9L7.2,12,18.5,1.5l-.7-.8Z\" />\r\n","styles":[]});

const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="back-button" class="hidden" lg="absolute left--10 top-3.8 block aspect-square w-4.5 c-secondary/60 transition-colors ease-out hover:c-primary active:scale-90!" type="button" aria-label="Go back"> ${renderComponent($$result, "GoBackIcon", GoBackIcon, { "aria-hidden": "true", "fill": "currentColor" })} </button> <!-- Go Back Script >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> ${renderScript($$result, "Z:/retypeset/src/components/Widgets/BackButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/BackButton.astro", void 0);

const TocIcon = createSvgComponent({"meta":{"src":"/_astro/toc-icon.Dqi8-R_c.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\r\n  <path d=\"M22.2 2.3H1.8V4h19.9zM22.2 20H1.8v1.7h19.9zM15.5 11.2H1.8v1.6H15z\" />\r\n","styles":[]});

const $$TOC = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TOC;
  const { currentLang } = getPageInfo(Astro2.url.pathname);
  const currentUI = ui[currentLang] ?? {};
  const { headings = [] } = Astro2.props;
  const filteredHeadings = headings.filter((heading) => heading.depth >= 2 && heading.depth <= 4);
  return renderTemplate`${filteredHeadings.length > 0 && // TOC Container
  renderTemplate`${maybeRenderHead()}<div id="toc-container" class="mb-6 uno-round-border bg-secondary/5 2xl:fixed 2xl:left-0 2xl:top-44.5 2xl:max-w-[min(calc(50vw-38rem),13rem)] 2xl:border-none 2xl:bg-secondary/0"><input type="checkbox" id="toc-toggle" hidden><div class="relative h-12 w-full"><label for="toc-toggle" class="absolute inset-0 flex cursor-pointer items-center 2xl:static 2xl:flex 2xl:c-secondary/60 2xl:transition-colors 2xl:ease-out 2xl:hover:c-primary"><span id="toc-mobile-text">${currentUI.toc}</span>${renderComponent($$result, "TocIcon", TocIcon, { "id": "toc-desktop-icon", "aria-hidden": "true", "class": "ml-4 hidden aspect-square w-4.2 2xl:mt-4 2xl:block 2xl:origin-center 2xl:active:scale-90!", "fill": "currentColor" })}</label></div><div id="toc-accordion-wrapper"><nav id="toc-accordion-content" aria-label="Table of Contents"><ul id="toc-links-list">${filteredHeadings.map((heading) => renderTemplate`<li${addAttribute({
    "ml-0": heading.depth === 2,
    "ml-4": heading.depth === 3,
    "ml-8": heading.depth === 4
  }, "class:list")}><a${addAttribute(`#${heading.slug}`, "href")}${addAttribute([
    { "no-heti toc-links-h2": heading.depth === 2 },
    { "no-heti toc-links-h3": heading.depth === 3 },
    { "no-heti toc-links-h4": heading.depth === 4 }
  ], "class:list")}>${heading.text}</a></li>`)}</ul></nav></div></div>`}${renderScript($$result, "Z:/retypeset/src/components/Widgets/TOC.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/TOC.astro", void 0);

async function getStaticPaths() {
  const posts = await getCollection("posts");
  const duplicates = await checkPostSlugDuplication(posts);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate post slugs:
${duplicates.join("\n")}`);
  }
  const slugToLangsMap = /* @__PURE__ */ new Map();
  for (const post of posts) {
    const slug = post.data.abbrlink || post.id;
    const lang = post.data.lang;
    let langSet = slugToLangsMap.get(slug);
    if (!langSet) {
      langSet = /* @__PURE__ */ new Set();
      slugToLangsMap.set(slug, langSet);
    }
    if (lang) {
      langSet.add(lang);
    } else {
      allLocales.forEach((locale) => langSet.add(locale));
    }
  }
  const slugToLangs = {};
  for (const [slug, langs] of slugToLangsMap) {
    slugToLangs[slug] = [...langs].sort((a, b) => allLocales.indexOf(a) - allLocales.indexOf(b));
  }
  return allLocales.flatMap(
    (lang) => posts.filter((post) => !post.data.draft).filter((post) => post.data.lang === lang || post.data.lang === "").map((post) => {
      const slug = post.data.abbrlink || post.id;
      return {
        params: { lang: getLangRouteParam(lang), slug },
        props: { post, supportedLangs: slugToLangs[slug] }
      };
    })
  );
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { post, supportedLangs } = Astro2.props;
  const currentLang = getLangFromLocale(Astro2.currentLocale);
  const slug = post.data.abbrlink || post.id;
  const description = getPostDescription(post, "meta");
  const { Content, headings, remarkPluginFrontmatter } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "postTitle": post.data.title, "postDescription": description, "postSlug": post.id, "supportedLangs": supportedLangs }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="heti"> <div class="relative"> <!-- Go Back Button On Desktop --> ${renderComponent($$result2, "BackButton", $$BackButton, {})} <!-- Title --> <h1 class="post-title"> <span data-disable-theme-toggle-transition${addAttribute(renderTransition($$result2, "qtjagq3i", "", `post-${slug}${currentLang ? `-${currentLang}` : ""}`), "data-astro-transition-scope")}> ${post.data.title} </span> </h1> </div> <!-- Date --> <div id="post-date" class="mb-17.2 block c-primary font-time" data-disable-theme-toggle-transition${addAttribute(renderTransition($$result2, "lit7wibv", "", `time-${slug}${currentLang ? `-${currentLang}` : ""}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "PostDate", $$PostDate, { "date": post.data.published, "updatedDate": post.data.updated, "minutes": remarkPluginFrontmatter.minutes })} </div> <!-- TOC --> ${post.data.toc && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings })}`} <!-- Content --> <div id="post-content"> ${renderComponent($$result2, "Content", Content, {})} <!-- Copyright --> <div id="post-copyright"></div> <!-- Tag List --> ${post.data.tags?.length > 0 && renderTemplate`<div class="mt-12.6 uno-decorative-line"></div>
        ${renderComponent($$result2, "TagList", $$TagList, { "tags": post.data.tags, "lang": currentLang })}`} <!-- Comment --> ${renderComponent($$result2, "Comment", $$Index, {})} </div> </article> ` })}`;
}, "Z:/retypeset/src/pages/[...lang]/posts/[slug].astro", "self");
const $$file = "Z:/retypeset/src/pages/[...lang]/posts/[slug].astro";
const $$url = "/[...lang]/posts/[slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
