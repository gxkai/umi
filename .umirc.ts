import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  routes: [
    { path: '/', component: '@/pages/index', menu: {
      name: '首页'
      } },
  ],
});
