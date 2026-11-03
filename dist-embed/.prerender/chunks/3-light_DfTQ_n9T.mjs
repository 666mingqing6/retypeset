const _3Light = new Proxy({"src":"/_astro/3-light.DDtVSk0R.webp","width":5088,"height":3346,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "Z:/retypeset/src/content/posts/_images/3-light.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("Z:/retypeset/src/content/posts/_images/3-light.webp");
							return target[name];
						}
					});

export { _3Light as default };
