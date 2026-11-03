import { $ as $$Layout } from './Layout_COh26ywe.mjs';
import { c as createComponent } from './runtime_y5MRq01h.mjs';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_DXDN-2aX.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="uno-decorative-line"></div>  <h3 class="mt--1.3 flex flex-col text-8 c-primary font-bold leading-1.2em font-navbar lg:text-9"> <span>PAGE</span> <span>NOT</span> <span>FOUND</span> </h3> <p class="mt-3.6 flex flex-col text-3.6 leading-1.4em font-navbar lg:mt-4 lg:text-4"> <span>It looks like the page you're looking for</span> <span>does not exist or has been moved.</span> </p>  <div class=""></div> ` })}`;
}, "Z:/retypeset/src/pages/404.astro", void 0);

const $$file = "Z:/retypeset/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
