import { defineConfig } from 'umi';

export default defineConfig({
  // plugins: [
  //   [
  //     'umi-plugin-react',
  //     {
  //       dva: {
  //         immer: true
  //       }
  //     }
  //   ]
  // ],
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
  umi cli 默认路由配置
  // routes: [
  //   {
  //     path: '/',
  //     component: '@/layouts/index',
  //     routes: [
  //       // { path: '/', redirect: '/hero' },
  //       { path: '/hero', component: '@/pages/hero' },
  //       { path: '/item', component: '@/pages/item' },
  //       { path: '/summoner', component: '@/pages/summoner' },
  //     ]
  //   }
  // ],
});
