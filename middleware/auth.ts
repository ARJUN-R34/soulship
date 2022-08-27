// /**
//  * The global auth middleware.
//  * By default all routes require auth.
//  * Here you can define the public routes which will not require auth.
//  * Also you can define the guest routes which can only be accessed if not authenticated (e.g. login page).
//  */

// /**
//  * The public routes.
//  */
// const PUBLIC_ROUTES: string[] = [
//   '/',

// ]

// /**
//  * The middleware function.
//  */
// export default defineNuxtRouteMiddleware((to, from) => {
//   const authStore = useAuthStore()

//   const isPublicRoute = PUBLIC_ROUTES.includes(to.path)
//   const isGuestRoute = GUEST_ROUTES.includes(to.path)
//   const isAuthRoute = !isPublicRoute && !isGuestRoute

//   // authenticated user cannot access guest routes
//   if (isGuestRoute && authStore.isAuthenticated)
//     return navigateTo(AUTH_REDIRECT)

//   // unauthenticated user can only access public or guest routes
//   if (isAuthRoute && !authStore.isAuthenticated)
//     return navigateTo(GUEST_REDIRECT)
// })
