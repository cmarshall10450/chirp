import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
 
export default withClerkMiddleware(() => {
    console.log("Clerk middleware")
    return NextResponse.next();
});
 
export const config = {
  matcher: [
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
}