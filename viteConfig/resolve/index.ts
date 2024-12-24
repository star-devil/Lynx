/*
 * @Author: wangqiaoling
 * @Date: 2024-12-24 10:06:41
 * @LastEditTime: 2024-12-24 17:47:17
 * @LastEditors: wangqiaoling
 * @Description: 配置模块解析规则(别名)
 */
import path from 'path';
import { AliasOptions, ResolveOptions } from 'vite';

type Resolve = ResolveOptions & {
  alias?: AliasOptions;
};

export default function (): Resolve {
  // 获取项目根目录路径
  const projectRoot = process.cwd();

  // 别名配置相对于当前文件路径
  const alias: AliasOptions = {
    '@': path.resolve(projectRoot, 'src'),
    '@v': path.resolve(projectRoot, 'src/views'),
    '@a': path.resolve(projectRoot, 'src/assets')
  };
  return { alias };
}
