import { defineConfig } from 'vitepress'

import mulu from './mulu.mjs'

var segment = new Segment();
segment.useDefault();

const options = {
  encode: function (str) {
    return segment.doSegment(str, { simple: true });
  },
  tokenize: "forward",
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  allow: [],
  ignore: [],
};
export default defineConfig({
  title: "红龙贼合集",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: "传统", link: "/hslszw"},
      { text: "消失", link: "/hslszw-xnui" }
    ],

    sidebar: mulu,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  }
})
