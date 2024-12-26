/*
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 存储搜索结果
 */
import { WebsiteType } from '@dataTypes/websiteType';

export const useResultStore = defineStore('result', () => {
  const result = ref<WebsiteType[]>([]);
  const getResult = computed<WebsiteType[]>(() => result.value);
  function changeResult(data: WebsiteType[]) {
    result.value = data;
  }
  return { result, getResult, changeResult };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useResultStore, import.meta.hot));
}
