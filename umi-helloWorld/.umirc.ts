import { defineConfig } from 'umi';
import routes from './src/routes/index.js';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
