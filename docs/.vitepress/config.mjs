import { defineConfig } from 'vitepress'

import mulu from './mulu.mjs'

export default defineConfig({
  title: "红龙贼合集",
  description: "Combos",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: "传统", link: "/hslszw" },
      { text: "消失", link: "/hslszw-xnui" },
      { text: "鲍勃", link: "/hslszw-bob" }
    ],

    sidebar: mulu,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aw07734' }
    ],
    search: {
      provider: 'local'
    }
  }
})
