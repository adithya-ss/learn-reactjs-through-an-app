/*
This file allows us to customize the build process, such as adding plugins, configuring server settings and more.
This file is mostly helpful for some advanced customizations, not necessary for basic usage.
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
