import { IBestAFSRoute } from '@@/plugin-layout/layout/types';

export const routes: IBestAFSRoute[] = [
  {
    key: 'root',
    path: '/',
    exact: true,
    redirect: '/dashboard',
  },
  {
    key: 'login',
    path: '/login',
    component: '@/pages/login/index',
    hideMenu: true,
  },
  {
    key: 'logout',
    path: '/logout',
    component: '@/pages/logout/index',
    hideMenu: true,
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    name: '看板',
    component: '@/pages/dashboard/index',
  },
  {
    key: 'player',
    path: '/player',
    name: '球员',
    component: '@/pages/player/index',
  },
  {
    key: 'news',
    path: '/news',
    name: '新闻',
    component: '@/pages/news/index',
  },
];
