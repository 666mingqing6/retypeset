import { c as createComponent } from './runtime_0NnP4MOM.mjs';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender_Bp-MtqDB.mjs';
import { c as isPostPage } from './Layout_2SyRamIj.mjs';

const $$PostDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostDate;
  const { date, updatedDate, minutes } = Astro2.props;
  const isPost = isPostPage(Astro2.url.pathname);
  const timeSpacingClass = isPost ? "ml-1.75" : "ml-1.5";
  function formatDate(date2, format2) {
    {
      return date2.toISOString().split("T")[0];
    }
  }
  return renderTemplate`<!-- published date -->${maybeRenderHead()}<time${addAttribute(date.toISOString().split("T")[0], "datetime")}> ${formatDate(date)} </time> <!-- updated date --> ${updatedDate && renderTemplate`<time${addAttribute(updatedDate.toISOString().split("T")[0], "datetime")}${addAttribute(timeSpacingClass, "class")}>
updated ${formatDate(updatedDate)} </time>`} <!-- reading time --> <span${addAttribute(timeSpacingClass, "class")}> ${minutes} min
</span>`;
}, "Z:/retypeset/src/components/PostDate.astro", void 0);

export { $$PostDate as $ };
