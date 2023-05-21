import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.rewrite(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
