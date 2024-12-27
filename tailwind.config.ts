/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: tailwindcss 配置，使用了daisyui
 */
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '1024px', // 适配老旧笔记本或平板 1024x768
      md: '1280px', // 适配720p/1080p笔记本 1280x720/1920x1080
      lg: '1536px', // 适配2K显示器 2560x1440
      xl: '1920px', // 适配4K显示器 3840x2160
      '2xl': '2560px' // 适配超宽屏显示器
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dracula']
  }
};
