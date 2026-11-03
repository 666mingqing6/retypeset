const _3Dark = new Proxy({"src":"/_astro/3-dark.CZojxM-Y.webp","width":5088,"height":3346,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "Z:/retypeset/src/content/posts/_images/3-dark.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("Z:/retypeset/src/content/posts/_images/3-dark.webp");
							return target[name];
						}
					});

export { _3Dark as default };
