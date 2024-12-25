<!--
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 首页
-->
<script setup lang="ts">
import searchIcon from '@a/icons/search.svg?view';

const searchQuery = ref('');

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // 这里实现搜索逻辑
    console.log('Searching for:', searchQuery.value);
  }
};

const clearSearch = () => {
  searchQuery.value = '';
};
</script>

<template>
  <div class="min-h-screen bg-base-200 flex flex-col">
    <!-- Header -->
    <header class="w-full p-4 flex justify-end items-center gap-4">
      <button class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
    <!-- Main Content -->
    <main
      class="flex-grow flex flex-col items-center justify-center px-4 -mt-20"
    >
      <!-- Logo -->
      <div class="mb-8">
        <h1 class="text-8xl font-bold">
          <span class="text-blue-600">L</span>
          <span class="text-red-500">y</span>
          <span class="text-yellow-500">n</span>
          <span class="text-green-500">x</span>
        </h1>
      </div>

      <!-- Search Box -->
      <div class="w-full max-w-4xl">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            class="input input-bordered w-full pl-12 pr-12 rounded-full input-primary h-16 text-gray-200"
            @keyup.enter="handleSearch"
          />
          <div class="absolute left-4 top-1/2 -translate-y-1/2">
            <searchIcon class="h-6 w-6 text-gray-400" />
          </div>
          <div
            v-if="searchQuery"
            class="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2"
          >
            <button @click="clearSearch"></button>
          </div>
        </div>

        <!-- Search Buttons -->
        <div class="gap-4 mt-8 min-h-72"></div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-sm text-gray-600">
      <div class="px-8 py-3 flex justify-between">
        <div class="flex gap-6"></div>
        <div class="flex gap-6"></div>
      </div>
    </footer>
  </div>
</template>
