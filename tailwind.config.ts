/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: tailwindcss 配置
 */
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // 调整基础字体大小
        base: {
          sm: '14px',
          md: '16px',
          lg: '18px'
        }
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'fantasy']
  }
};
