<!--
 * @Author: wangqiaoling
 * @Date: 2023-11-13 11:14:56
 * @LastEditTime: 2024-11-01 15:10:52
 * @LastEditors: wangqiaoling
 * @Description: 主页面
-->
<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
const selectedPerson = ref(people[0]);
</script>

<template>
  <div class="lynx-main">
    <div class="search-wrap">
      <Listbox v-model="selectedPerson">
        <ListboxButton>{{ selectedPerson.name }}</ListboxButton>
        <ListboxOptions>
          <ListboxOption
            v-for="person in people"
            :key="person.id"
            :value="person"
            :disabled="person.unavailable"
          >
            {{ person.name }}
          </ListboxOption>
        </ListboxOptions>
      </Listbox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lynx-main {
  width: 100vw;
  height: 100vh;

  .search-wrap {
    margin: 0 auto;
  }
}
</style>
