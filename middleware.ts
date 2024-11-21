import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);



export default auth(req => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // Allow API authentication routes without redirect
    if (isApiAuthRoute) {
        return null;
    }

    // Redirect logged-in users away from auth pages
    if (isAuthRoute) {
        if (isLoggedIn) {
            // Avoid redirect loops: Check if already on the destination route
            if (nextUrl.pathname !== DEFAULT_LOGIN_REDIRECT) {
                return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
            }
            return null; // No redirect needed if already on the target page
        }
        return null; // Allow access to auth routes for unauthenticated users
    }

    // Redirect unauthenticated users away from protected routes
    if (!isLoggedIn && !isPublicRoute) {
        // Avoid infinite redirects by checking current route
        if (nextUrl.pathname !== "/auth/signup") {
            return Response.redirect(new URL("/auth/signup", req.url));
        }
        return null; // Already on the signup page
    }

    // Allow access to all other routes
    return null;
});

export const config = {
    matcher: [
        // Middleware matcher to exclude certain static files and API routes
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
