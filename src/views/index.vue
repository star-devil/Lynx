<!--
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 首页
-->
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
        <SearchInput />

        <!-- Search Results -->
        <div class="gap-4 mt-8 min-h-72">
          <SearchResult />
        </div>
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
