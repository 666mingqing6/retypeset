const _2Light = new Proxy({"src":"/_astro/2-light.DacX0dMk.webp","width":5088,"height":3346,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "Z:/retypeset/src/content/posts/_images/2-light.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("Z:/retypeset/src/content/posts/_images/2-light.webp");
							return target[name];
						}
					});

export { _2Light as default };
