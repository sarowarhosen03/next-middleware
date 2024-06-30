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
