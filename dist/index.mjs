// nextjs-middleware/index.ts
import { pathToRegexp } from "path-to-regexp";
var routes = {};
function setMiddleware(path, callback) {
  routes[path] = callback;
}
function nextMiddleware(req, ...args) {
  const path = req.nextUrl.pathname;
  for (let route in routes) {
    if (pathToRegexp(route).test(path)) {
      return routes?.[route]?.(req, ...args);
    }
  }
}
export {
  nextMiddleware,
  setMiddleware
};
