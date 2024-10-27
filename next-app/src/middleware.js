import { NextResponse } from "next/server";


export function middleware(request) {

    //   if(request.newUrl!="/login"){

    return NextResponse.redirect(new URL("/login", request.url))

    //   }
}

export const config = {
    matcher: ["/about/aboutcollege:path*", "/studentlist/:path*"]
}
