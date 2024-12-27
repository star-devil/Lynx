/*
 * @Author: wangqiaoling
 * @Date: 2024-12-24 10:27:28
 * @LastEditTime: 2024-12-27 15:35:00
 * @LastEditors: wangqiaoling
 * @Description: css 配置
 */
import { CSSOptions } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default function (): CSSOptions {
  // 别名配置相对于当前文件路径
  const preprocessorOptions = {
    scss: {
      api: 'modern-compiler'
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
      })
    ]
  };
  return { preprocessorOptions, postcss };
}
