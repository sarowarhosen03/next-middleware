# nextjs-middleware

A simple middleware for Next.js

## Installation

```bash
npm install @sarowarhosen03/nextjs-middleware
```

## Usage

thanks [path to regex](https://www.npmjs.com/package/path-to-regex) now @sarowarhosen03/nextjs-middleware will support every string path pettern those supported by path to regex . such as for dynamic path `/:local/blog` which will match like `/en/blog` `/bn/blog  `or `"/:lang/blog/*"` which will match `/en/blog/anything` `/en/blog/anything/everything/every`

at middleware.js

```javascript
import {
  nextMiddleware,
  setMiddleware,
} from "@sarowarhosen03/nextjs-middleware";
import { NextResponse } from "next/server";
//will match /en/blog;
setMiddleware("/:local/blog", (req) => {
  return NextResponse.json({ message: `Hello from  ${req.nextUrl.pathname}` });
});
//will match /en/blog/post-title/comment1/;
setMiddleware("/:local/blog/*", (req) => {
  return NextResponse.json({ message: `Hello from  ${req.nextUrl.pathname}` });
});
export function middleware(...args) {
  return nextMiddleware(...args);
}
```
