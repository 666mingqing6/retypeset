function memoize(fn) {
  const cache = /* @__PURE__ */ new Map();
  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const promise = fn(...args);
    cache.set(key, promise);
    promise.catch(() => {
      cache.delete(key);
    });
    return promise;
  };
}

export { memoize as m };
