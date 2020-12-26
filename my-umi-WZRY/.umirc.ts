import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  antd: {},
  // umi cli 默认路由配置
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/users', component: '@/pages/users/index' },
  // ],
});
