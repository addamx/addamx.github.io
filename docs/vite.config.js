import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
// import '../scripts/gen-post-data';

export default defineConfig({
  plugins: [
    Inspect()
  ]
})