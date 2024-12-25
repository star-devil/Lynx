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
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'fantasy']
  }
};
