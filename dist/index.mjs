// nextjs-middleware/index.ts
var routes = {};
function setMiddleware(path, callback) {
  routes[path] = callback;
}
function nextMiddleware(req, ...args) {
  const path = req.nextUrl.pathname;
  for (let route in routes) {
    const pattern = new RegExp(
      "^" + route.replace(/:[^\s/]+/g, "([\\w-]+)").replace(/\*/g, ".*") + "$"
    );
    if (pattern.test(path)) {
      return routes?.[route]?.(req, ...args);
    }
  }
}
export {
  nextMiddleware,
  setMiddleware
};
