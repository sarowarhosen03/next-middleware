import type { NextRequest } from "next/server";

type routesType = {
  [key: string]: Function;
};
const routes: routesType = {};

export function setMiddleware(path: string, callback: Function) {
  routes[path] = callback;
}

export function nextMiddleware(req: NextRequest, ...args: any[]) {
  const path = req.nextUrl.pathname;
  // Check if the path matches any defined route
  for (let route in routes) {
    const pattern = new RegExp(
      "^" + route.replace(/:[^\s/]+/g, "([\\w-]+)").replace(/\*/g, ".*") + "$"
    );
    if (pattern.test(path)) {
      // If there's a match, execute the corresponding callback function
      return routes?.[route]?.(req, ...args);
    }
  }
}
