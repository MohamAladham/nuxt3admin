import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    app: {
        baseURL: "/",
        buildAssetsDir: "/_nuxt/",
        head: {
            "charset": "utf-8",
            "viewport": "width=device-width, initial-scale=1",
            "meta": [
                //      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            "link": [
                //{ rel: 'stylesheet', href: 'https://awesome-lib.css' }
            ],
            "script": [
                //      { src: 'https://awesome-lib.js' }
            ],
            "style": [
                //      { children: ':root { color: red }', type: 'text/css' }
            ],
        },
    },

    runtimeConfig: {

        public: {
            apiBase: ''
        }
    },
    buildModules: [
        // ...
        '@pinia/nuxt',
    ],
    autoImports: {
        dirs: ["./utils"],
    },
})
