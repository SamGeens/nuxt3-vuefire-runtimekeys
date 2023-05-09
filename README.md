# Nuxt 3 app with Vuefire to test vuefire keys at runtime

## How to use 
1. Remove .example from .env.example and fill in your firebase credentials
2. Install packages with: `pnpm install`
3. Run with: `pnpm dev`
4. Go to localhost:3000
5. You'll see the `/login` page and you won't be able to access the index page due to not being logged in (functionality isn't present)

## Testing the keys at build time
When .env present at build time the keys are build in the code and the app will work with docker. But the docker keys won't be used, instead the keys at build will be used.
1. Fill in your credentials in docker-compose.yml
2. Run `docker-compose up`
3. Go to [localhost:3000](localhost:3000)
4. You'll see the `/login` page and you won't be able to access the index page due to not being logged in (functionality isn't present)

## Testing the keys at runtime
When .env not present during build. The app will show a white screen with docker and the docker keys won't be used
1. Remove the .env file (or rename it to .env.example again so you'll not have to fill it in later again)
2. Run `docker-compose up --build` (Add --build to make sure the image is rebuild)
3. Go to [localhost:3000](localhost:3000)
4. You'll see an empty page. If you try you'll be able to access the index page eventhough this one is empty to.

## Desired behaviour
I want to be able to build the app without keys and use the vuefire keys at runtime. So the app can be used in different environments with different firebase accounts.