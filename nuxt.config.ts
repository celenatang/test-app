// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        vite: {
        server: {
            fs: {
                allow: ["/Users/ctang/dropbox/c/c projects/10 Sites/test-directory/test-app/*"]
            }
        }
    }

})
