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
  <main class="bg-bg_main w-full font-jost dark:bg-txt_black dark:text-white">
    <div class="lg:flex block">
      <section class="lg:w-1/2 lg:block hidden">
        <MainLayout  />
      </section>
      <section class="lg:w-1/2 px-7 w-full">
        <component :is="layoutComponent">
          <RouterView  />
        </component>
      </section>
    </div>
  </main>
</template>

