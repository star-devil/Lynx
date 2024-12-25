/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 插件配置出口
 */
import type { PluginOption } from 'vite';
import setupAutoImport from './autoImport';
import setupCommonPlugins from './common';
import setupStaticPerf from './staticPerf';
import setupVueRouter from './vueRouter';

export default function () {
  const plugins: PluginOption[] = [
    setupVueRouter(),
    ...setupCommonPlugins(),
    setupAutoImport(),
    ...setupStaticPerf()
  ];

  return plugins;
}
