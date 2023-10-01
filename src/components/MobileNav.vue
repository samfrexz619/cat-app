
<template>
  <nav class="fixed inset-y-0 w-full bg-grey_10 lg:hidden flex justify-end right-0">
    <div class="w-[300px] relative bg-white h-screen">
      <div className="w-full px-4 flex justify-end py-4">
        <button class="bg-white h-11 w-11 rounded-xl flex items-center justify-center text-paw_pry">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <use xlink:href="/sprite.svg#close" />
          </svg>
        </button>
      </div>
      <div
        v-for="card in cardItems"
        :key="card.id"
        class="w-full"
      > 
        <BaseCard :items="card" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import BaseCard from './commons/BaseCard.vue';
import { cardItems } from '@/lib/utils.ts';


</script>

<style lang="scss" scoped>

</style>