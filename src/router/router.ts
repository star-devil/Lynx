/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 基础路由，不需要设置权限
 */
import type { RouteRecordRaw } from 'vue-router';

import Page404 from '../views/NotFound.vue';
import Home from '../views/Home.vue';

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'page404',
    component: Page404,
    meta: {
      title: '404'
    }
  }
];
