import { defineConfig } from 'vitepress'
import siderbar from '../siderbar.json';

export default defineConfig({
  lang: 'zh-Hans',
  title: 'VitePress',
  base: '/',
  lastUpdated: true,
  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    toc: { level: [1, 2] },
  },
  themeConfig: {
    // nav: [
    //   { text: 'inbox', link: '/inbox' },
    //   { text: '学习11', link: '/学习' },
    //   { text: 'Changelog', link: 'https://github.com/...' }
    // ]
    sidebar: siderbar
  }
})