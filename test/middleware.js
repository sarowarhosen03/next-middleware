import {
  nextMiddleware,
  setMiddleware,
} from "@sarowarhosen03/nextjs-middleware";
import { NextResponse } from "next/server";
setMiddleware("/user/:id", (req) => {
  console.log("hi im from user");
  return NextResponse.json({ message: "Hello from /user" });
});

export function middleware(...args) {
  return nextMiddleware(...args);
}
