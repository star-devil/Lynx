/*
 * @Author: wangqiaoling
 * @Date: 2024-12-24 10:17:41
 * @LastEditTime: 2024-12-25 15:42:24
 * @LastEditors: wangqiaoling
 * @Description: 公共插件,包括按需导入等
 */
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import eslint from 'vite-plugin-eslint2';

export default function setupCommonPlugins() {
  return [
    vue(),
    eslint({ lintOnStart: true, cache: false, fix: true }),
    Components({
      // 配置type文件生成位置
      dts: 'types/components.d.ts',
      dirs: ['src/**/components'],
      extensions: ['vue', 'tsx', 'jsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      deep: true // 搜索子目录
    })
  ];
}
