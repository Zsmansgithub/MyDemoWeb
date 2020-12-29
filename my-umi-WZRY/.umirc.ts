import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  antd: {},
  // "proxy": {
  //   "/": {
  //     "target": "https://pvp.qq.com",
  //     "changeOrigin": true,
  //     "pathRewrite": { "" : "" }
  //   }
  // },
  "proxy": {
    "/api": {
      "target": "https://pvp.qq.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  // umi cli 默认路由配置
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/users', component: '@/pages/users/index' },
  // ],
});
