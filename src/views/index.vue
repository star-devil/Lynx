<!--
 * @Author: wangqiaoling
 * @LastEditors: wangqiaoling
 * @Description: 首页
-->
<template>
  <div
    class="h-screen flex flex-col bg-cover bg-no-repeat bg-center"
    style="background-image: url('/src/assets/images/bg.png')"
  >
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
        <h1 class="text-8xl">
          <span>Lynx</span>
        </h1>
      </div>

      <!-- Search Box -->
      <div class="w-full max-w-4xl">
        <SearchInput />

        <!-- Search Results -->
        <div class="gap-4 mt-8 min-h-72 max-h-96">
          <SearchResult />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer footer-center text-sm p-4 text-gray-600">
      <aside>
        <p>
          Copyright © <span>{{ new Date().getFullYear() }}</span> - All right
          reserved by EGG | star-devil
        </p>
      </aside>
    </footer>
  </div>
</template>
