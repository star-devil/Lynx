/*
 * @Author: wangqiaoling
 * @Date: 2024-12-24 10:14:12
 * @LastEditTime: 2024-12-26 15:43:59
 * @LastEditors: wangqiaoling
 * @Description: 自动导入
 */
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export default function setupAutoImport() {
  return AutoImport({
    imports: ['vue', VueRouterAutoImports, 'pinia'],
    dts: 'types/auto-imports.d.ts',
    eslintrc: {
      // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
      enabled: false,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    dirs: ['/src/hooks']
  });
}
