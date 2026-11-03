import { c as createComponent } from './runtime_y5MRq01h.mjs';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender_DXDN-2aX.mjs';
import { a as getTagPath } from './Layout_COh26ywe.mjs';

const $$TagList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TagList;
  const { tags, currentTag = "", lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="no-heti mb-10.5 flex flex-wrap gap-x-3 gap-y-3.2"> ${tags.map((tag) => renderTemplate`<a${addAttribute(getTagPath(tag, lang), "href")}${addAttribute([
    "relative inline-block border border-secondary/25 rounded-full px-3.2 py-0.7 ring-secondary/80",
    "transition-[colors,box-shadow] ease-out hover:border-secondary/80 hover:c-primary hover:font-medium hover:ring-0.2",
    currentTag === tag ? "border-secondary/80 c-primary font-medium ring-0.2" : "ring-0"
  ], "class:list")}> <span class="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-font-weight"> ${tag} </span> <span class="inline-block font-medium opacity-0" aria-hidden="true"> ${tag} </span> </a>`)} </div>`;
}, "Z:/retypeset/src/components/TagList.astro", void 0);

export { $$TagList as $ };
