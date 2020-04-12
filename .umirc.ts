import { defineConfig } from 'umi';
export default defineConfig({
  layout: {
    name: 'major',
    locale: true,
    singular: false,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  title: 'site.title',
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      menu: {
        name: 'home',
      },
    },
  ],
});
