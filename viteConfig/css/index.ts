/*
 * @Author: wangqiaoling
 * @Date: 2024-12-24 10:27:28
 * @LastEditTime: 2024-12-27 10:11:49
 * @LastEditors: wangqiaoling
 * @Description: css 配置
 */
import { CSSOptions } from 'vite';
import autoprefixer from 'autoprefixer';
// @ts-expect-error postcss-pxtorem还没有官方的ts包
import pxtorem from 'postcss-pxtorem';
import tailwindcss from 'tailwindcss';

export default function (): CSSOptions {
  // 别名配置相对于当前文件路径
  const preprocessorOptions = {
    scss: {
      api: 'modern-compiler',
      additionalData: '@use "@/scss/variables.scss";'
    }
  };
  const postcss = {
    plugins: [
      tailwindcss(),
      autoprefixer({
        overrideBrowserslist: [
          '> 1%',
          'Chrome > 31',
          'ff > 31',
          'not ie 11',
          'not op_mini all',
          'last 2 versions'
        ],
        grid: true
      }),
      pxtorem({
        rootValue: 14, // 1rem = 14px
        propList: ['*', '!border'], // 需要转换的属性，除 border 外所有px 转 rem
        exclude: '/node_modules/*', // 排除node_modules
        mediaQuery: false, // 是否要在媒体查询中转换px
        minPixelValue: 2 // 设置要转换的最小像素值
      })
    ]
  };
  return { preprocessorOptions, postcss };
}
