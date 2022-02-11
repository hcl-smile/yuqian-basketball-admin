import { routes } from '../config/route';
import { BasicLayoutProps } from '@ant-design/pro-layout';

export const layout = (): BasicLayoutProps => {
  return {
    title: '玉前篮球联赛',
    route: {
      routes,
    },
  };
};
