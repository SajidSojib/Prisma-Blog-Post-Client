import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    let isAuthenticated = false;
    let isAdmin = false;

    const {data: session} = await userService.getSession();

    if(session){
        isAuthenticated = true;
        isAdmin = session.user.role === Roles.ADMIN;
    }

    if(!isAuthenticated){
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if(isAdmin && pathname.startsWith("/user-dashboard")){
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    }

    if(!isAdmin && pathname === "/admin-dashboard"){
        return NextResponse.redirect(new URL("/user-dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/user-dashboard",
    "/user-dashboard/:path*",
  ],
};