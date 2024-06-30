# nextjs-middleware

A simple middleware for Next.js

## Installation

```bash
npm install @sarowarhosen03/nextjs-middleware
```

## Usage

thanks [path to regex](https://www.npmjs.com/package/path-to-regex) now @sarowarhosen03/nextjs-middleware will support every string path pettern those supported by path to regex . such as for dynamic path `/:local/blog` which will match like `/en/blog`  `/bn/blog  `or   `"/:lang/blog/:rest*"` which will match  `/en/blog/anything` `/en/blog/anything/everything`  


at middleware.js

```javascript
import {
  nextMiddleware,
  setMiddleware,
} from "@sarowarhosen03/nextjs-middleware";
import { NextResponse } from "next/server";

setMiddleware("/user/:id", (req) => {
  console.log("hi im from user");
  return NextResponse.json({ message: "Hello from /user" });
});
setMiddleware("/admin/", (req) => {
  console.log("hi im from admin");
  return NextResponse.json({ message: "you need to login first" });
});
export function middleware(...args) {
  return nextMiddleware(...args);
}
```
