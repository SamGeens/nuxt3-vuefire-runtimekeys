import { VueFire } from 'vuefire';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  console.log('API base URL:', config.public.apiBase);

//   const vuefire = VueFire(nuxtApp, {
//     auth: true,
//     config: {
//       apiKey: process.env.NUXT_PUBLIC_VUEFIRE_API_KEY,
//       authDomain: process.env.NUXT_PUBLIC_VUEFIRE_AUTH_DOMAIN,
//       projectId: process.env.NUXT_PUBLIC_VUEFIRE_PROJECT_ID,
//     },
//   });

//   nuxtApp.vueApp.use(vuefire);
});
