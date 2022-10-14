import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import './tailwind.postcss'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // register global components
    // app.component('VueClickAwayExample', VueClickAwayExample)
  }
}