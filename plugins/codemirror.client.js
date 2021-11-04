import Codemirror from "codemirror-editor-vue3";
// plugin-style
import "codemirror-editor-vue3/dist/style.css";
// language
import "codemirror/mode/javascript/javascript.js";

// theme
import "codemirror/theme/dracula.css"

import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Codemirror)
});
