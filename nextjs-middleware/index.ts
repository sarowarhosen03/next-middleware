import type { NextRequest } from "next/server";
import { pathToRegexp } from "path-to-regexp";

type routesType = {
  [key: string]: Function;
};
const routes: routesType = {};

export function setMiddleware(path: string, callback: Function) {
  routes[path] = callback;
}

export function nextMiddleware(req: NextRequest, ...args: any[]) {
  const path = req.nextUrl.pathname;
  for (let route in routes) {
    if (pathToRegexp(route).test(path)) {
      return routes?.[route]?.(req, ...args);
    }
  }
}
