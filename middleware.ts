import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes, authRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  //in middleware, the order of checking matter to do it like this

  if (isApiAuthRoute){
    return null;    //donot perform any middleware function in this route since it will be required by nextauth as it is
  }

  if(isAuthRoute){
    if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)) //we have to pass nextURL as second parameter to make this absolute.
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute){
    let callbackUrl = nextUrl.pathname
    if (nextUrl.search){
      callbackUrl +=nextUrl.search
    }
    const encodedCallBackUrl = encodeURIComponent(callbackUrl)
    return Response.redirect(new URL(`/auth/login?${encodedCallBackUrl}`,nextUrl))
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths copy from clerk
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
