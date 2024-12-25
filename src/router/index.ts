/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 路由出口
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import type { App } from 'vue';
import { routes } from 'vue-router/auto-routes';
import { setupRouterHooks } from './routerHooks';

const history =
  import.meta.env.VITE_HASH_ROUTE === 'true'
    ? createWebHashHistory
    : createWebHistory;
export const router = createRouter({
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      window.scrollTo(0, 0);
    }
  },
  history: history()
});

export function setupRouter(app: App<Element>): void {
  // 路由钩子函数
  setupRouterHooks();
  app.use(router);
}

export default router;
