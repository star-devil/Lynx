/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 自动添加路由
 */
import VueRouter from 'unplugin-vue-router/vite';

export default function setupVueRouter() {
  return VueRouter({
    routesFolder: 'src/views',
    dts: 'types/typed-router.d.ts'
  });
}
