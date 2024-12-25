/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 路由配置
 */
import { useNProgress } from '@vueuse/integrations/useNProgress';
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
  router.beforeEach(async () => {
    isLoading.value = true;
  });
  // 当路由跳转结束后
  router.afterEach((to) => {
    // 设置title
    setPageTitleTxt(to.meta);
    isLoading.value = false;
  });
}
