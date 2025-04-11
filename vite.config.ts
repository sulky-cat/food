import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//@ts-ignore
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   // base: '/food-menu/',
   resolve: {
      alias: {
         //@ts-ignore
         '@src': path.resolve(__dirname, 'src'),
         //@ts-ignore
         '@public': path.resolve(__dirname, 'public'),
      } as AliasOptions,
   },
})
