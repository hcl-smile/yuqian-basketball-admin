import { defineConfig } from 'umi';
import { routes } from './config/route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  layout: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
