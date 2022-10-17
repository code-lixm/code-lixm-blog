import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
  meta: {
    title: "joycewil blog",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
  },
  modules: [["vue3-notion/nuxt", { css: true }]],
})
