import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true
        }
      }
    ]
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    {
      immer: true
    }
  },
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
