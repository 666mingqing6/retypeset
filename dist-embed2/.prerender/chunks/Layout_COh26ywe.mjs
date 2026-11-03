import { a as createSvgComponent, c as createComponent } from './runtime_y5MRq01h.mjs';
import { d as createRenderInstruction, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, e as Fragment, s as spreadAttributes, c as renderTransition, f as renderHead, g as defineScriptVars, h as renderSlot } from './prerender_DXDN-2aX.mjs';
import { allLocales, defaultLocale, themeConfig, moreLocales, base } from './config_BmNIlZ_0.mjs';
import { c as getLangFromPath, d as getNextGlobalLang } from './lang_CFkXJoui.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const LanguageSwitcherIcon = createSvgComponent({"meta":{"src":"/_astro/language-switcher.DDTx9Hl3.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\r\n  <path d=\"M19.18 21.1 12.4 1.89h-1.21L4.52 21.1l-2.53.2v.81h6.37v-.81l-2.83-.2 2.02-5.97h7.58l2.02 5.97-3.34.2v.81H22v-.81l-2.83-.2zM7.85 14.33l3.44-10.21 3.54 10.21z\" />\r\n","styles":[]});

const ThemeToggleIcon = createSvgComponent({"meta":{"src":"/_astro/theme-toggle.C_2NrNfC.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\r\n  <path d=\"M12.06.61C5.66.61.46 5.71.46 12.11s5.1 11.5 11.6 11.5 11.5-5.1 11.5-11.5S18.46.61 12.06.61m0 21c-6.07 0-10.94-4.2-10.94-9.5s4.87-9.4 10.94-9.4S23 6.91 23 12.21s-4.88 9.4-10.94 9.4\" />\r\n","styles":[]});

function getTagPath(tagName, lang) {
  const tagPath = lang === defaultLocale ? `/tags/${tagName}/` : `/${lang}/tags/${tagName}/`;
  return tagPath;
}
function getPostPath(slug, lang) {
  const postPath = lang === defaultLocale ? `/posts/${slug}/` : `/${lang}/posts/${slug}/`;
  return postPath;
}
function getLocalizedPath(path, currentLang) {
  const normalizedPath = path.replace(/^\/|\/$/g, "");
  const lang = currentLang ?? getLangFromPath(path);
  const langPrefix = lang === defaultLocale ? "" : `/${lang}`;
  const localizedPath = normalizedPath === "" ? `${langPrefix}/` : `${langPrefix}/${normalizedPath}/`;
  return localizedPath;
}
function getNextLangPath(currentPath, currentLang, nextLang) {
  const pathWithoutBase = currentPath;
  const pagePath = currentLang === defaultLocale ? pathWithoutBase : pathWithoutBase.replace(`/${currentLang}`, "");
  return getLocalizedPath(pagePath, nextLang);
}
function getNextGlobalLangPath(currentPath) {
  const currentLang = getLangFromPath(currentPath);
  const nextLang = getNextGlobalLang(currentLang);
  return getNextLangPath(currentPath, currentLang, nextLang);
}
function getNextSupportedLangPath(currentPath, supportedLangs) {
  if (supportedLangs.length === 0) {
    return getNextGlobalLangPath(currentPath);
  }
  const langPriority = new Map(
    allLocales.map((lang, index) => [lang, index])
  );
  const sortedLangs = [...supportedLangs].sort(
    (a, b) => (langPriority.get(a) ?? 0) - (langPriority.get(b) ?? 0)
  );
  const currentLang = getLangFromPath(currentPath);
  const currentIndex = sortedLangs.indexOf(currentLang);
  const nextLang = sortedLangs[(currentIndex + 1) % sortedLangs.length];
  return getNextLangPath(currentPath, currentLang, nextLang);
}

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const {
    light: { background: lightMode },
    dark: { background: darkMode }
  } = themeConfig.color;
  const { supportedLangs } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const showLanguageSwitcher = moreLocales.length > 0;
  const nextUrl = supportedLangs.length > 0 ? getNextSupportedLangPath(currentPath, supportedLangs) : getNextGlobalLangPath(currentPath);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "absolute right-7.25vw top-14.6 flex gap-6 min-[823px]:max-lg:right-[calc(50vw-22rem)]",
    "lg:fixed lg:bottom-[min(10.27rem+1.92vw,12rem)] lg:right-[max(5rem,calc(50vw-35rem))] lg:top-auto lg:w-14rem"
  ], "class:list")}> <!-- Language Switcher --> ${showLanguageSwitcher && renderTemplate`<a id="language-switcher"${addAttribute(nextUrl, "href")} class="aspect-square w-4 c-secondary active:scale-90 hover:c-primary" aria-label="Switch website language"> ${renderComponent($$result, "LanguageSwitcherIcon", LanguageSwitcherIcon, { "aria-hidden": "true", "fill": "currentColor" })} </a>`} <!-- Theme Toggle --> <button id="theme-toggle-button" class="aspect-square w-4 c-secondary active:scale-90 hover:c-primary"${addAttribute(lightMode, "data-light-mode")}${addAttribute(darkMode, "data-dark-mode")} aria-label="Switch light/dark theme"> ${renderComponent($$result, "ThemeToggleIcon", ThemeToggleIcon, { "aria-hidden": "true", "fill": "currentColor" })} </button> </div> <!-- Theme Toggle Script >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> ${renderScript($$result, "Z:/retypeset/src/components/Button.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Button.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { author } = themeConfig.site;
  const { links, startYear } = themeConfig.footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const year = Number(startYear) === currentYear ? startYear : `${startYear}-${currentYear}`;
  const currentLang = getLangFromPath(Astro2.url.pathname);
  const socialLinks = links.map(({ name, url }) => {
    const isRSS = url === "/atom.xml" || url === "/rss.xml";
    const isEmail = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i.test(url);
    if (isRSS) {
      const localizedPath = getLocalizedPath(url, currentLang);
      const href = localizedPath.slice(0, -1);
      return {
        name,
        href,
        target: "_blank",
        rel: "noopener noreferrer"
      };
    }
    if (isEmail) {
      const href = `mailto:${url}`;
      return {
        name,
        href,
        "data-umami-event": "outbound-link-click",
        "data-umami-event-url": href
      };
    }
    return {
      name,
      "href": url,
      "target": "_blank",
      "rel": "noopener noreferrer",
      "data-umami-event": "outbound-link-click",
      "data-umami-event-url": url
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer class="text-3 leading-1.25em font-navbar" lg="uno-desktop-column bottom-20 text-3.5"> <p> ${socialLinks.map((link, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a class="highlight-hover py-0.8 transition-colors after:bottom-0.35em hover:c-primary"${spreadAttributes(link)}>${link.name}</a> ${index < socialLinks.length - 1 && "/"}` })}`)} </p> <p>
© ${year} ${author} </p> <p>
Powered by <a class="highlight-hover py-0.8 transition-colors after:bottom-0.35em hover:c-primary" href="https://astro.build/" target="_blank" rel="noopener noreferrer" data-umami-event="outbound-link-click" data-umami-event-url="https://astro.build/">Astro</a> and <a class="highlight-hover py-0.8 transition-colors after:bottom-0.35em hover:c-primary" href="https://github.com/radishzzz/astro-theme-retypeset" target="_blank" rel="noopener noreferrer" data-umami-event="outbound-link-click" data-umami-event-url="https://github.com/radishzzz/astro-theme-retypeset">Retypeset</a> </p> </footer>`;
}, "Z:/retypeset/src/components/Footer.astro", void 0);

const ui = {
  "de": {
    title: "Neusatz",
    subtitle: "Die Schönheit der Typografie wiederbeleben",
    description: 'Retypeset ist ein statisches Blog-Theme basierend auf dem Astro-Framework, auf Deutsch bekannt als "Neusatz". Dieses Theme, inspiriert von traditioneller Typografie, etabliert einen neuen visuellen Standard und gestaltet alle Seiten neu, um ein Leseerlebnis ähnlich dem gedruckter Bücher zu schaffen und die Schönheit des Satzes wiederzubeleben. Jedes Element ist bis ins kleinste Detail durchdacht, Eleganz zeigt sich auch im kleinsten Raum.',
    posts: "Beiträge",
    tags: "Schlagwörter",
    about: "Über",
    toc: "Inhaltsverzeichnis"
  },
  "en": {
    title: "Retypeset",
    subtitle: "Revive the beauty of typography",
    description: "Retypeset is a static blog theme based on the Astro framework. Inspired by Typography, Retypeset establishes a new visual standard and reimagines the layout of all pages, creating a reading experience reminiscent of paper books, reviving the beauty of typography. Details in every sight, elegance in every space.",
    posts: "Posts",
    tags: "Tags",
    about: "About",
    toc: "Table of Contents"
  },
  "es": {
    title: "Retipografía",
    subtitle: "Reviviendo la belleza tipográfica",
    description: "Retypeset es un tema de blog estático basado en el framework Astro. Inspirado por Typography, Retypeset establece un nuevo estándar visual y reimagina el diseño de todas las páginas, creando una experiencia de lectura similar a la de los libros impresos, reviviendo la belleza de la tipografía. Detalles en cada mirada, elegancia en cada espacio.",
    posts: "Artículos",
    tags: "Etiquetas",
    about: "Sobre",
    toc: "Índice"
  },
  "fr": {
    title: "Retypographie",
    subtitle: "Raviver la beauté de la typographie",
    description: `Retypeset est un thème de blog statique basé sur le framework Astro, connu en français sous le nom de "Retypographie". Ce thème, inspiré par la typographie traditionnelle, établit une nouvelle norme visuelle et réorganise toutes les pages pour créer une expérience de lecture semblable à celle des livres imprimés, ravivant ainsi la beauté de la mise en page. Chaque élément est soigné dans les moindres détails, l'élégance se manifeste dans les plus petits espaces.`,
    posts: "Articles",
    tags: "Étiquettes",
    about: "À propos",
    toc: "Table des matières"
  },
  "ja": {
    title: "再組版",
    subtitle: "印刷の美を甦らせる",
    description: "Retypesetは、日本語では「再組版」と呼ばれる、Astroフレームワークをベースにした静的ブログテーマです。活版印字からデザインのインスピレーションを得て、新しい視覚的な規範を確立し、すべてのページのレイアウトを再構成することで、紙の書籍のような読書体験を提供し、版面の美しさを蘇らせます。見るものすべてが細部にこだわり、限られたスペースの中に優雅さを表現しています。",
    posts: "記事",
    tags: "タグ",
    about: "概要",
    toc: "目次"
  },
  "ko": {
    title: "재조판",
    subtitle: "판형의 아름다움을 재현하다",
    description: 'Retypeset은 Astro 프레임워크를 기반으로 한 정적 블로그 테마로, 한국어로는 "재조판"이라고 합니다. 이 테마는 활판 인쇄에서 디자인 영감을 얻어, 새로운 시각적 기준을 확립하고 모든 페이지를 재구성하여 종이책과 같은 독서 경험을 제공하며 판형의 아름다움을 되살립니다. 모든 것이 세부적인 디테일이며, 작은 공간에서도 우아함이 느껴집니다.',
    posts: "게시물",
    tags: "태그",
    about: "소개",
    toc: "목차"
  },
  "pl": {
    title: "Przeskład",
    subtitle: "Ożywiając piękno typografii",
    description: 'Retypeset to statyczny motyw bloga oparty na frameworku Astro, w języku polskim znany jako "Przeskład". Ten motyw, inspirowany typografią drukarską, ustanawia nowy standard wizualny i reorganizuje wszystkie strony, tworząc doświadczenie czytelnicze przypominające papierowe książki, przywracając piękno układu tekstu. Każdy element jest dopracowany w szczegółach, elegancja zawarta w najmniejszej przestrzeni.',
    posts: "Artykuły",
    tags: "Tagi",
    about: "O stronie",
    toc: "Spis treści"
  },
  "pt": {
    title: "Retipografia",
    subtitle: "Reviva a beleza da tipografia",
    description: "Retypeset é um tema de blog estático baseado no framework Astro. Inspirado pela tipografia, o Retypeset estabelece um novo padrão visual e reimagina o layout de todas as páginas, criando uma experiência de leitura reminiscente de livros físicos, revivendo a beleza da tipografia. Cada detalhe é visível, elegância em cada espaço.",
    posts: "Artigos",
    tags: "Tags",
    about: "Sobre",
    toc: "Sumário"
  },
  "ru": {
    title: "Переверстка",
    subtitle: "Возрождая красоту типографики",
    description: "Retypeset — это статическая тема блога, основанная на фреймворке Astro. Вдохновленная Typography, Retypeset устанавливает новый визуальный стандарт и переосмысливает компоновку всех страниц, создавая опыт чтения, напоминающий печатные книги, возрождая красоту типографики. Детали в каждом взгляде, элегантность в каждом пространстве.",
    posts: "Посты",
    tags: "Теги",
    about: "О себе",
    toc: "Оглавление"
  },
  "zh": {
    title: "重新编排",
    subtitle: "再现版式之美",
    description: "Retypeset是一款基于Astro框架的静态博客主题，中文名为重新编排。本主题以活版印字为设计灵感，通过建立全新的视觉规范，对所有页面进行重新编排，打造纸质书页般的阅读体验，再现版式之美。所见皆为细节，方寸尽显优雅。",
    posts: "文章",
    tags: "标签",
    about: "关于",
    toc: "目录"
  },
  "zh-tw": {
    title: "重新編排",
    subtitle: "再現版式之美",
    description: "Retypeset是一款基於Astro框架的靜態部落格主題，中文名為重新編排。本主題以活版印字為設計靈感，通過建立全新的視覺規範，對所有頁面進行重新編排，打造紙質書頁般的閱讀體驗，再現版式之美。所見皆為細節，方寸盡顯優雅。",
    posts: "文章",
    tags: "標籤",
    about: "關於",
    toc: "目錄"
  }
};

function matchPageType(path, prefix = "") {
  const pathWithoutBase = path;
  const normalizedPath = pathWithoutBase.replace(/^\/|\/$/g, "");
  if (prefix === "") {
    return normalizedPath === "" || moreLocales.includes(normalizedPath);
  }
  const startsWithSegment = (target, segment) => target === segment || target.startsWith(`${segment}/`);
  return startsWithSegment(normalizedPath, prefix) || moreLocales.some((lang) => startsWithSegment(normalizedPath, `${lang}/${prefix}`));
}
function isHomePage(path) {
  return matchPageType(path);
}
function isPostPage(path) {
  return matchPageType(path, "posts");
}
function isTagPage(path) {
  return matchPageType(path, "tags");
}
function isAboutPage(path) {
  return matchPageType(path, "about");
}
function getPageInfo(path) {
  const currentLang = getLangFromPath(path);
  const isHome = isHomePage(path);
  const isPost = isPostPage(path);
  const isTag = isTagPage(path);
  const isAbout = isAboutPage(path);
  return {
    currentLang,
    isHome,
    isPost,
    isTag,
    isAbout,
    getLocalizedPath: (targetPath) => getLocalizedPath(targetPath, currentLang)
  };
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { currentLang, getLocalizedPath, isPost } = getPageInfo(Astro2.url.pathname);
  const { title, subtitle} = themeConfig.site;
  const headerTitle = title;
  const headerSubtitle = subtitle;
  const TitleTag = isPost ? "h2" : "h1";
  const SubtitleTag = isPost ? "div" : "h2";
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    "lg:uno-desktop-column lg:top-20 cjk:tracking-wide",
    isPost ? "mb-10.8" : "mb-10.5"
  ], "class:list")}> ${renderComponent($$result, "TitleTag", TitleTag, { "class:list": [
    "font-bold font-title",
    isPost ? `mb-2.8 mt-3 text-5.375 c-secondary lg:mb-1.8 lg:mt-0 lg:text-9 lg:c-primary` : `mb-1.8 w-75% text-8 c-primary lg:w-full lg:text-9`
  ] }, { "default": ($$result2) => renderTemplate`  <div class="box-content inline-block pr-1" data-disable-theme-toggle-transition${addAttribute(renderTransition($$result2, "wif6pdce", "", `site-title-${currentLang}`), "data-astro-transition-scope")}> <a id="site-title-link"${addAttribute(getLocalizedPath("/"), "href")}> ${headerTitle} </a> </div> ` })} ${renderTemplate`${renderComponent($$result, "SubtitleTag", SubtitleTag, { "class:list": [
    "text-3.5 c-secondary font-navbar lg:text-4",
    isPost ? `op-0 lg:op-100` : "w-75% lg:w-full"
  ], "aria-hidden": isPost }, { "default": ($$result2) => renderTemplate`${headerSubtitle}` })}`} </header>`;
}, "Z:/retypeset/src/components/Header.astro", "self");

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { currentLang, isHome, isPost, isTag, isAbout, getLocalizedPath } = getPageInfo(Astro2.url.pathname);
  const currentUI = ui[currentLang] ?? {};
  const isPostActive = isHome || isPost;
  const isTagActive = isTag;
  const isAboutActive = isAbout;
  function getNavItemClass(isActive) {
    return isActive ? "highlight-static c-primary font-bold after:bottom-0.7em" : "highlight-hover transition-[colors,font-weight] after:bottom-0.7em hover:c-primary hover:font-bold";
  }
  const navItems = [
    {
      href: "/",
      label: currentUI.posts,
      className: getNavItemClass(isPostActive)
    },
    {
      href: "/tags/",
      label: currentUI.tags,
      className: getNavItemClass(isTagActive)
    },
    {
      href: "/about/",
      label: currentUI.about,
      className: getNavItemClass(isAboutActive)
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Site Navigation"${addAttribute([
    "mb-10.5 text-3.6 font-semibold leading-2.45em font-navbar",
    "lg:uno-desktop-column lg:text-4 lg:bottom-[min(9.04rem+3.85vw,12.5rem)] cjk:tracking-wide",
    isPost ? "hidden lg:block" : ""
  ], "class:list")}> <ul> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(getLocalizedPath(item.href), "href")}${addAttribute(item.className, "class")}> ${item.label} </a> </li>`)} </ul> </nav>`;
}, "Z:/retypeset/src/components/Navbar.astro", void 0);

const $$CodeCopyButton = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "Z:/retypeset/src/components/Widgets/CodeCopyButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/CodeCopyButton.astro", void 0);

const $$EmbedFrame = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "Z:/retypeset/src/components/Widgets/EmbedFrame.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/EmbedFrame.astro", void 0);

const $$GithubCard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "Z:/retypeset/src/components/Widgets/GithubCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/GithubCard.astro", void 0);

const $$ImageZoom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "Z:/retypeset/src/components/Widgets/ImageZoom.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/ImageZoom.astro", void 0);

const $$MediaEmbed = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "Z:/retypeset/src/components/Widgets/MediaEmbed.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/MediaEmbed.astro", void 0);

const $$SoundEffect = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "Z:/retypeset/src/components/Widgets/SoundEffect.astro?astro&type=script&index=0&lang.ts")}`;
}, "Z:/retypeset/src/components/Widgets/SoundEffect.astro", void 0);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/rt-work/node_modules/.pnpm/astro@6.1.5_@types+node@25._6d0c47d141c1ea47b78a1edce0d9f0d9/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/rt-work/node_modules/.pnpm/astro@6.1.5_@types+node@25._6d0c47d141c1ea47b78a1edce0d9f0d9/node_modules/astro/components/ClientRouter.astro", void 0);

const katexCSS = "/_astro/katex.min.HM2DiD67.css";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Head;
  const { postTitle, postDescription, postSlug } = Astro2.props;
  const { currentLang } = getPageInfo(Astro2.url.pathname);
  const lang = currentLang === defaultLocale ? "" : `${currentLang}/`;
  const { title, subtitle, description, author, favicon } = themeConfig.site;
  const { mode: defaultMode, light: { background: lightMode }, dark: { background: darkMode } } = themeConfig.color;
  const { reduceMotion } = themeConfig.global;
  const { verification = {}, twitterID = "", googleAnalyticsID = "", umamiAnalyticsID = "", apiflashKey = "" } = themeConfig.seo ?? {};
  const { google = "", bing = "", yandex = "", baidu = "" } = verification;
  const { customGoogleAnalyticsJS = "", customUmamiAnalyticsJS = "" } = themeConfig.preload ?? {};
  const metaTheme = lightMode;
  const siteTitle = title;
  const siteSubtitle = subtitle;
  const siteDescription = description;
  const pageTitle = postTitle ? `${postTitle} | ${siteTitle}` : `${siteTitle} - ${siteSubtitle}`;
  const pageDescription = postDescription || siteDescription;
  const pageImage = postSlug ? new URL(`${base}/og/${postSlug}.png`, Astro2.url.origin) : apiflashKey ? `https://api.apiflash.com/v1/urltoimage?access_key=${apiflashKey}&url=${Astro2.url}&format=png&width=1500&height=788&ttl=259200&wait_until=network_idle&no_tracking=true` : `https://api.apiflash.com/v1/urltoimage?access_key=02a837b6188f4ba0a7fd9fbeff03a83e&url=https://retypeset.radishzz.cc/${lang}&format=png&width=1500&height=788&ttl=604800&wait_until=network_idle&no_tracking=true`;
  return renderTemplate(_c || (_c = __template(['<head><!-- Basic Info --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">', "", "", "<title>", '</title><meta name="description"', '><meta name="author"', '><meta name="generator"', '><meta name="theme-color"', '><!-- Preload --><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin>', '<!-- Site Links --><link rel="canonical"', '><link rel="sitemap"', '><link rel="alternate"', ' type="application/rss+xml" title="RSS Feed"><link rel="alternate"', ' type="application/atom+xml" title="Atom Feed">', '<!-- Open Graph --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card" content="summary_large_image">', "<!-- Site Verification -->", "", "", "", "<!-- Global View Transition -->", "<!-- Theme Toggle --><script>(function(){", `
(function () {
  // Check if current theme is dark
  // Priority: localStorage theme > default theme > system preference
  function isCurrentDark() {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      return currentTheme === 'dark'
    }

    if (defaultMode !== 'auto') {
      return defaultMode === 'dark'
    }

    // If defaultMode is auto, follow system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // Initialize theme
  function initTheme(doc = document) {
    const isDark = isCurrentDark()
    doc.documentElement.classList.toggle('dark', isDark)

    // Update meta theme-color tag
    const metaThemeColor = doc.head.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? darkMode : lightMode)
    }
  }

  // Check and init motion preference
  // Condition: theme config || system preference || browser capability
  function initMotionPref(doc = document) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const supportsViewTransitions = 'startViewTransition' in doc
    const shouldReduceMotion = reduceMotion || prefersReducedMotion || !supportsViewTransitions

    doc.documentElement.classList.toggle('reduce-motion', shouldReduceMotion)
  }

  // Update theme before page transition to prevent flashing
  document.addEventListener('astro:before-swap', ({ newDocument }) => {
    initTheme(newDocument)
    initMotionPref(newDocument)
  })

  // Initialize theme on first load
  initTheme()
  initMotionPref()
})()
})();<\/script><!-- Google Analytics --><!-- Define gtag on window object for proper Partytown forwarding --><!-- See https://github.com/QwikDev/partytown/issues/382 -->`, "<!-- Umami Analytics -->", "", "</head>"])), favicon.toLowerCase().endsWith(".svg") && renderTemplate`<link rel="icon" type="image/svg+xml"${addAttribute(`${base}${favicon}`, "href")}>`, favicon.toLowerCase().endsWith(".png") && renderTemplate`<link rel="icon" type="image/png"${addAttribute(`${base}${favicon}`, "href")}>`, favicon.toLowerCase().endsWith(".ico") && renderTemplate`<link rel="icon" type="image/x-icon"${addAttribute(`${base}${favicon}`, "href")}>`, pageTitle, addAttribute(pageDescription, "content"), addAttribute(author, "content"), addAttribute(Astro2.generator, "content"), addAttribute(metaTheme, "content"), addAttribute(`${base}/fonts/EarlySummer-VF-Split/EarlySummer-VF-Subset.woff2`, "href"), addAttribute(`${base}/fonts/Snell-Black-SF.woff2`, "href"), addAttribute(`${base}/fonts/Snell-Bold-SF.woff2`, "href"), addAttribute(`${base}/fonts/STIX-VF.woff2`, "href"), addAttribute(`${base}/fonts/STIX-Italic-VF.woff2`, "href"), renderTemplate`<link rel="stylesheet"${addAttribute(katexCSS, "href")} media="print"${addAttribute(`this.media='all'`, "onload")}>`, addAttribute(Astro2.url, "href"), addAttribute(`${base}/sitemap-index.xml`, "href"), addAttribute(`${base}/rss.xml`, "href"), addAttribute(`${base}/atom.xml`, "href"), allLocales.map((lang2) => renderTemplate`<link rel="alternate"${addAttribute(`${Astro2.url.origin}${base}${lang2 === defaultLocale ? "" : `/${lang2}/`}`, "href")}${addAttribute(lang2 === "zh-tw" ? "zh-TW" : lang2, "hreflang")}>`), addAttribute(postTitle ? "article" : "website", "content"), addAttribute(Astro2.url, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(pageImage, "content"), twitterID && renderTemplate`<meta name="twitter:site"${addAttribute(twitterID, "content")}>`, google && renderTemplate`<meta name="google-site-verification"${addAttribute(google, "content")}>`, bing && renderTemplate`<meta name="msvalidate.01"${addAttribute(bing, "content")}>`, yandex && renderTemplate`<meta name="yandex-verification"${addAttribute(yandex, "content")}>`, baidu && renderTemplate`<meta name="baidu-site-verification"${addAttribute(baidu, "content")}>`, renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "none" }), defineScriptVars({
    defaultMode,
    lightMode,
    darkMode,
    reduceMotion
  }), googleAnalyticsID && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="text/partytown"', '><\/script><script type="text/partytown">(function(){', "\n      window.dataLayer = window.dataLayer || []\n      window.gtag = function () {\n        // eslint-disable-next-line prefer-rest-params\n        dataLayer.push(arguments)\n      }\n      window.gtag('js', new Date())\n\n      if (customGoogleAnalyticsJS) {\n        window.gtag('config', googleAnalyticsID, {\n          transport_url: new URL(customGoogleAnalyticsJS).origin,\n        })\n      }\n      else {\n        window.gtag('config', googleAnalyticsID)\n      }\n    })();<\/script>"])), addAttribute(customGoogleAnalyticsJS || `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`, "src"), defineScriptVars({
    googleAnalyticsID,
    customGoogleAnalyticsJS
  })) })}`, umamiAnalyticsID && renderTemplate(_b || (_b = __template(['<script type="text/partytown"', "", "><\/script>"])), addAttribute(customUmamiAnalyticsJS || "https://cloud.umami.is/script.js", "src"), addAttribute(umamiAnalyticsID, "data-website-id")), renderHead());
}, "Z:/retypeset/src/layouts/Head.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { postTitle, postDescription, postSlug, supportedLangs = [] } = Astro2.props;
  const { isPost } = getPageInfo(Astro2.url.pathname);
  const fontStyle = "font-sans";
  const MarginBottom = "mb-12";
  return renderTemplate`<html${addAttribute(Astro2.currentLocale, "lang")}${addAttribute([
    fontStyle,
    isPost ? "scroll-smooth" : ""
  ], "class:list")}> ${renderComponent($$result, "Head", $$Head, { "postTitle": postTitle, "postDescription": postDescription, "postSlug": postSlug })}${maybeRenderHead()}<body> <div class="mx-auto max-w-205.848 min-h-vh w-full min-h-dvh" p="x-[min(7.25vw,3.731rem)] y-10" lg="mx-[max(5.75rem,calc(50vw-34.25rem))] my-20 max-w-[min(calc(75vw-16rem),44rem)] min-h-full p-0"> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Navbar", $$Navbar, {})} <main${addAttribute(MarginBottom, "class")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderComponent($$result, "Button", $$Button, { "supportedLangs": supportedLangs })} ${renderComponent($$result, "SoundEffect", $$SoundEffect, {})} ${renderComponent($$result, "CodeCopyButton", $$CodeCopyButton, {})} ${renderComponent($$result, "EmbedFrame", $$EmbedFrame, {})} ${renderComponent($$result, "GithubCard", $$GithubCard, {})} ${renderComponent($$result, "MediaEmbed", $$MediaEmbed, {})} ${renderComponent($$result, "ImageZoom", $$ImageZoom, {})} </body></html>`;
}, "Z:/retypeset/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getTagPath as a, getPostPath as b, isPostPage as c, getPageInfo as g, isHomePage as i, renderScript as r, ui as u };
