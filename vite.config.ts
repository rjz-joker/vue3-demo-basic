/*
 * @Author: rjz 
 * @Date: 2021-02-06 15:43:15 
 * @Last Modified by:   rjz 
 * @Last Modified time: 2021-02-06 15:43:15 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const fs = require("fs")
import { resolve } from "path";
import * as path from 'path'


function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 服务端口
    port: 9999,
    host: "localhost",
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        ws: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  },
  alias: {
    // ‘react‘: ‘@pika/react‘,
    // ‘react-dom‘: ‘@pika/react-dom‘
    '/@foo/': path.resolve(__dirname, 'src'),
    foo: 'src'
    // "/@/": pathResolve("src"),

  },
  // 配置Dep优化行为
  optimizeDeps: {
    // exclude: [‘dep-a‘, ‘dep-b‘],
  },
})



