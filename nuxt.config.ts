import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    ssr:false,
    plugins: [
        { src: '~plugins/codemirror.js', ssr: false }
    ],
    css: [
        'codemirror/lib/codemirror.css',
        'codemirror/theme/base16-dark.css',
    ]
})
