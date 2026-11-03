import { a as createSvgComponent, c as createComponent } from './runtime_y5MRq01h.mjs';
import { m as maybeRenderHead, b as addAttribute, c as renderTransition, r as renderComponent, a as renderTemplate } from './prerender_DXDN-2aX.mjs';
import { $ as $$PostDate } from './PostDate_Ch2Xwlu9.mjs';
import { i as isHomePage, b as getPostPath } from './Layout_COh26ywe.mjs';
import { g as getPostDescription } from './description_BtY873aH.mjs';

const PinIcon = createSvgComponent({"meta":{"src":"/_astro/pin-icon.CDJAKc7w.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"\r\n  <path d=\"M23.7,8.1l-2.2-2.2-3.3-3.3L15.9.3C9,6.4,6.5,7,.4,7.5l6.4,6.4,1,1-6.5,6.9.9.9,6.9-6.5,1,1,6.4,6.4c.5-6.1,1.1-8.6,7.2-15.5ZM7.9,12.7l-4.4-4.4c4.1-.5,5.9-1,12-6l1.4,1.4,3.3,3.3,1.4,1.4c-5,6.1-5.5,7.9-6,12l-4.4-4.4-3.3-3.3Z\" />\r\n","styles":[]});

const $$PostList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostList;
  const { posts, lang, pinned = false } = Astro2.props;
  const isHome = isHomePage(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => {
    const slug = post.data.abbrlink || post.id;
    return renderTemplate`<li${addAttribute([
      "mb-5.5",
      isHome ? "lg:mb-10" : ""
    ], "class:list")}>  <h3 class="inline transition-colors hover:c-primary"> <a${addAttribute([
      "cjk:tracking-wide",
      isHome ? "lg:font-medium lg:text-4.5" : ""
    ], "class:list")}${addAttribute(getPostPath(slug, lang), "href")} data-disable-theme-toggle-transition${addAttribute(renderTransition($$result, "5tzck4eb", "", `post-${slug}${lang ? `-${lang}` : ""}`), "data-astro-transition-scope")}> ${post.data.title} </a>  ${pinned && renderTemplate`${renderComponent($$result, "PinIcon", PinIcon, { "aria-hidden": "true", "class": "ml-0.25em inline-block aspect-square w-0.98em translate-y--0.1em lg:w-1.05em lg:translate-y--0.15em", "fill": "currentColor" })}`} </h3>  <div class="py-0.8 text-3.5 font-time lg:hidden" data-disable-theme-toggle-transition${addAttribute(renderTransition($$result, "t5l64u74", "", `time-${slug}${lang ? `-${lang}` : ""}`), "data-astro-transition-scope")}> ${renderComponent($$result, "PostDate", $$PostDate, { "date": post.data.published, "minutes": post.remarkPluginFrontmatter.minutes })} </div>  <div class="hidden text-3.65 font-time lg:ml-2.5 lg:inline"> ${renderComponent($$result, "PostDate", $$PostDate, { "date": post.data.published, "minutes": post.remarkPluginFrontmatter.minutes })} </div>  ${isHome && renderTemplate`<div class="heti hidden" lg="mt-2.25 block"> <p>${getPostDescription(post, "list")}</p> </div>`} </li>`;
  })} </ul>`;
}, "Z:/retypeset/src/components/PostList.astro", "self");

export { $$PostList as $ };
