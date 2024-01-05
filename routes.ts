export const publicRoutes = [
    "/", "/auth/new-verification",
];


//An array of routes that are used for authentication
// these routes will redirect logged in users to /settings
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
]

/**
 *the prefix for api authentication
*routes that start with this prefix are used for api authentication purposes */
export const apiAuthPrefix = "/api/auth";


//the default redirect path after logging in
export const DEFAULT_LOGIN_REDIRECT = "/settings"