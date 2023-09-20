<script setup lang="ts">
// import { useDark, useToggle } from '@vueuse/core';
import MainLayout from './components/MainLayout.vue';

// const isDark = useDark()

// const toggleDark = useToggle(isDark)


</script>

<template>
  <main class="bg-bg_main w-full font-jost dark:bg-black dark:text-white">
    <div class="flex">
      <section class="w-1/2">
        <!-- <button @click="toggleDark()" class="dark:bg-grey_10"> click</button> -->
        <MainLayout  />
      </section>
      <section class="w-1/2">
        <RouterView  />
      </section>
    </div>
  </main>
</template>

