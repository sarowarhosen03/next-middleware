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
setMiddleware("/products/:id", (req) => {
  console.log("hi im from user");
  return NextResponse.json({ message: "Hello from /user" });
});

export function middleware(request) {
  return nextMiddleware(request);
}
import { NextResponse } from "next/server";
setMiddleware("/user/:id", (req) => {
  console.log("hi im from user");
  return NextResponse.json({ message: "Hello from /user" });
});

export function middleware(...args) {
  return nextMiddleware(...args);
}
```
