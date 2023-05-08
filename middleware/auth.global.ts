const publicRoutes = ['/login'];

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();

  if (publicRoutes.includes(to.path)) {
    if (user) {
      return navigateTo('/');
    }
    return;
  }

  if (!user) {
    return navigateTo('/login', { replace: true });
  }
});
