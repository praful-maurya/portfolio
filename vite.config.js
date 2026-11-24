import { defineConfig } from 'vite'

// GitHub Pages serves project sites from https://<owner>.github.io/<repo>/.
// Set VITE_BASE_PATH when deploying to a custom domain or a user/org site.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/portfolio/',
})
