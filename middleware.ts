import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest, response: NextResponse) {
  let cookie = request.cookies.get('auth')

  if(!cookie && request.nextUrl.pathname !== '/authorization'){
    return NextResponse.redirect(new URL('/authorization', request.url))
  }
  
}

export const config = {
  matcher: ['/creating-post','/authorization']
}
