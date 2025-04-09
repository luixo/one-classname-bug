import { defineConfig } from 'vite'
import { one } from 'one/vite'

export default defineConfig({
  plugins: [
    one({
      web: {
        // Change this to 'spa' to make it work
        defaultRenderMode: 'ssg',
      },
    }),
  ],
})
