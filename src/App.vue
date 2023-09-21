<script setup lang="ts">
import MainLayout from './components/MainLayout.vue';

</script>

<template>
  <main class="bg-bg_main w-full font-jost dark:bg-black dark:text-white">
    <div class="flex">
      <section class="w-1/2">
        <MainLayout  />
      </section>
      <section class="w-1/2">
        <RouterView  />
      </section>
    </div>
  </main>
</template>

