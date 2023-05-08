# Nuxt 3 app with Vuefire to test vuefire keys at runtime

## 1: Remove .example from .env.example and fill in your firebase credentials
## 2: Fill in your credentials in docker-compose.yml

## Testing the keys
### When .env present at build time the keys are build in the code and the app will work with docker. But the docker keys won't be used, instead the keys at build will be used.
### When .env not present during build. The app will show a white screen with docker and the docker keys won't be used

## Desired behaviour
### I want to be able to build the app without keys and use the vuefire keys at runtime. So the app can be used in different environments with different accounts