/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 路由配置
 */
import { useNProgress } from '@vueuse/integrations/useNProgress';
import type { RouteRecordRaw } from 'vue-router';
import { router } from '@/router';

const { isLoading } = useNProgress();

export const setPageTitleTxt = (meta: any) => {
  const { title } = meta;
  if (title) {
    window.document.title = title;
  }
};

// 设置路由守卫
export function setupRouterHooks() {
  router.beforeEach(async (to, _from, next) => {
    isLoading.value = true;
    next({ path: to.path });
  });
  // 当路由跳转结束后
  router.afterEach((to) => {
    // 设置title
    setPageTitleTxt(to.meta);
    isLoading.value = false;
  });
}

// vue3 + vite中的动态引入组件的方法
const loadView = import.meta.glob('../views/**/*.vue');

// 异步添加路由函数
export async function addRoutes(menu: RouteRecordRaw[]): Promise<void> {
  for (const m of menu) {
    const { name, path, meta, children, component } = m;
    // 只将页面信息添加到路由中
    if (!children || children.length === 0) {
      router.addRoute('layout', {
        name,
        path,
        meta,
        component:
          loadView[`../views${component}.vue`] ||
          loadView['../views/AntTabs.vue']
      });
    } else {
      await addRoutes(children);
    }
  }
}
