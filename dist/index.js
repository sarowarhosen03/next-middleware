"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// nextjs-middleware/index.ts
var nextjs_middleware_exports = {};
__export(nextjs_middleware_exports, {
  nextMiddleware: () => nextMiddleware,
  setMiddleware: () => setMiddleware
});
module.exports = __toCommonJS(nextjs_middleware_exports);
var import_path_to_regexp = require("path-to-regexp");
var routes = {};
function setMiddleware(path, callback) {
  routes[path] = callback;
}
function nextMiddleware(req, ...args) {
  const path = req.nextUrl.pathname;
  for (let route in routes) {
    if ((0, import_path_to_regexp.pathToRegexp)(route).test(path)) {
      return routes?.[route]?.(req, ...args);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  nextMiddleware,
  setMiddleware
});
