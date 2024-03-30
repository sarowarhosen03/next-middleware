# nextjs-middleware

A simple middleware for Next.js

## Installation

```bash
npm install @sarowarhosen03/nextjs-middleware
```

## Usage

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
