<!--
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 搜索框
-->
<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      type="text"
      class="input input-bordered w-full pl-12 pr-12 rounded-full input-primary h-16 text-gray-200 text-lg"
      @keyup.enter="jumpToFirstWebsite"
    />
    <div class="absolute left-4 top-1/2 -translate-y-1/2">
      <searchIcon class="h-6 w-6" />
    </div>
    <div
      v-if="searchQuery"
      class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2"
    >
      <button @click="clearSearch">
        <clearIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import searchIcon from '@a/icons/search.svg?view';
import clearIcon from '@a/icons/clear.svg?view';
import websiteData from '@/lib/websiteData.json';
import { debounce } from 'lodash-es';
import { WebsiteType } from '@dataTypes/websiteType';
import { useResultStore } from '@stores/modules/result';

const searchQuery = ref('');
const resultStore = useResultStore();

const debouncedSearch = debounce((query: string) => {
  handleSearch(query);
}, 300);

watch(
  () => searchQuery.value,
  (newVal: string) => {
    debouncedSearch(newVal);
  }
);

// 清理防抖函数
onBeforeUnmount(() => {
  debouncedSearch.cancel();
});

const handleSearch = (query: string) => {
  const emptyResult = [
    {
      name: '欢迎提交反馈',
      url: 'https://github.com/star-devil/Lynx/issues',
      description: '暂未查询到指定应用下载地址',
      type: 'github',
      typeName: 'GIT'
    }
  ];

  let result: WebsiteType[] = [];

  const queryText = query.trim().toLowerCase();

  if (queryText) {
    const res = Object.values(websiteData)
      .flat()
      .filter((item) => item.name.toLowerCase().includes(queryText));
    result = res.length > 0 ? res : emptyResult;
  } else {
    result = emptyResult;
  }

  resultStore.changeResult(result);
};

const clearSearch = () => {
  searchQuery.value = '';
};

const jumpToFirstWebsite = () => {
  const firstWebsite = resultStore.getResult[0];
  if (firstWebsite) {
    window.open(firstWebsite.url, '_blank');
  }
};
</script>
