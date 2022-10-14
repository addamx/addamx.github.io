import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'

export default ({mode}) => {
  if (mode === 'development') {
    require('../scripts/gen-post-data')
  }
  return defineConfig({
    plugins: [
      Inspect()
    ]
  })
}