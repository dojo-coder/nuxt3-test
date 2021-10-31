
import VueCodemirror from 'vue-codemirror'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/addon/selection/active-line.js'

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
    console.log('test');
    nuxtApp.vueApp.use(VueCodemirror)
});
