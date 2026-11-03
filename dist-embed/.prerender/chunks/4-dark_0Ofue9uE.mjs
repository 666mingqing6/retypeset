const _4Dark = new Proxy({"src":"/_astro/4-dark.BN-5qLcm.webp","width":5088,"height":3346,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "Z:/retypeset/src/content/posts/_images/4-dark.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("Z:/retypeset/src/content/posts/_images/4-dark.webp");
							return target[name];
						}
					});

export { _4Dark as default };
