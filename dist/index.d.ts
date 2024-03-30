import { NextRequest } from 'next/server';

declare function setMiddleware(path: string, callback: Function): void;
declare function nextMiddleware(req: NextRequest, ...args: any[]): any;

export { nextMiddleware, setMiddleware };
