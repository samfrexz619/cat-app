<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import MainLayout from './components/layouts/MainLayout.vue';
import HeaderLayout from './components/layouts/HeaderLayout.vue';
import EmptyLayout from './components/layouts/EmptyLayout.vue'

const route = useRoute();

const layoutComponent = computed(()=> {
  let currentLayout = null;
  const routeLayout = route.meta.layout;
  switch (routeLayout) {
    case 'header':
      currentLayout = HeaderLayout;
      break;
    case 'empty':
      currentLayout = EmptyLayout;
      break;
    default:
      currentLayout = '';
  }
  return currentLayout;
})
</script>

<template>
  <main class="bg-bg_main w-full font-jost dark:bg-black dark:text-white">
    <div class="flex">
      <section class="w-1/2">
        <MainLayout  />
      </section>
      <section class="w-1/2">
        <component :is="layoutComponent">
          <RouterView  />
        </component>
      </section>
    </div>
  </main>
</template>

