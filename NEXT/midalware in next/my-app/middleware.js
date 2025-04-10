import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about', request.url))
  }
 

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}