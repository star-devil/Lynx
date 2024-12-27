<!--
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 搜索结果
-->
<template>
  <div class="flex flex-row flex-wrap gap-2 relative">
    <div
      v-for="item in currentResult"
      :key="item.name"
      style="width: calc(33.333% - 0.5rem)"
    >
      <div
        class="card glass bg-base-50 hover:cursor-pointer hover:text-white transition-colors duration-500 w-full"
        @click="gotoSite(item.url)"
      >
        <div class="card-body flex flex-row items-center">
          <div class="w-8">
            <img
              class="w-8"
              :src="`https://www.google.com/s2/favicons?domain=${item.url}&sz=128`"
            />
          </div>
          <div>
            <h2 class="card-title">{{ item.name }}</h2>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useResultStore } from '@stores/modules/result';

const resultStore = useResultStore();

const currentResult = computed(() => {
  return resultStore.getResult;
});

const gotoSite = (url: string) => {
  window.open(url, '_blank');
};
</script>
