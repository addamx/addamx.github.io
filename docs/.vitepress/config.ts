import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: 'VitePress1',
  base: '/',
  lastUpdated: true,
  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    toc: { level: [1, 2] },
  },
  themeConfig: {
    nav: [
      { text: 'inbox', link: '/inbox' },
      { text: '学习', link: '/学习' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ]
  }
})