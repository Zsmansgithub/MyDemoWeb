import { defineConfig } from 'umi';
const path = require('path');
export default defineConfig({
  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   [
  //     'umi-plugin-react',
  //     {
  //       antd: true,
  //       dva: true,
  //       dynamicImport: false,
  //       title: 'hero',
  //       dll: false,
  //       routes: {
  //         exclude: [
  //           /model\.(j|t)sx?$/,
  //           /service\.(j|t)sx?$/,
  //           /models\//,
  //           /components\//,
  //           /services\//,
  //         ],
  //       },
  //       hardSource: false,
  //     },
  //   ],
  // ],

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
  alias: {
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
    // '@': path.resolve(__dirname, 'src'), // umi 默认有src别名@
  },
  // umi cli 默认路由配置
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        // { path: '/', redirect: '/hero' },
        { path: '/hero', component: '@/pages/hero/hero' },
        { path: '/hero1', component: '@/pages/hero1/hero' },
        { path: '/item', component: '@/pages/item/item' },
        { path: '/summoner', component: '@/pages/summoner/summoner' },
      ]
    }
  ],
});

// const path = require('path');
// // ref: https://umijs.org/config/
// export default {
//   // plugins: [
//   //   // ref: https://umijs.org/plugin/umi-plugin-react.html
//   //   [
//   //     'umi-plugin-react',
//   //     {
//   //       antd: true,
//   //       dva: true,
//   //       dynamicImport: false,
//   //       title: 'hero',
//   //       dll: false,
//   //       routes: {
//   //         exclude: [
//   //           /model\.(j|t)sx?$/,
//   //           /service\.(j|t)sx?$/,
//   //           /models\//,
//   //           /components\//,
//   //           /services\//,
//   //         ],
//   //       },
//   //       hardSource: false,
//   //     },
//   //   ],
//   // ],
//   alias: {
//     utils: path.resolve(__dirname, 'src/utils'),
//     services: path.resolve(__dirname, 'src/services'),
//     models: path.resolve(__dirname, 'src/models'),
//   },
//   // "proxy": {
//   //   "/api": {
//   //     "target": "https://pvp.qq.com/web201605/js/",
//   //     "changeOrigin": true,
//   //     "pathRewrite": { "^/api" : "" }
//   //   }
//   // }
// };
