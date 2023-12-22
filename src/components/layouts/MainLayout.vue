<template>
  <div class="min-h-screen lg:w-3/4 mx-auto">
    <header class="w-full h-24 items-center flex justify-between">
      <span className="flex gap-x-2 py-1 items-center">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlink:href="/sprite.svg#logo" />
        </svg>
        <h1 
          className="text-txt_black text-2xl font-medium dark:text-white">
          Samfrexz
        </h1>
      </span>
      <div>
        <ToggleSwitch 
          v-model:checked="savedState"
        />
      </div>
    </header>
    <div className="pt-10">
      <h1 className="text-txt_black text-44 font-medium dark:text-white">
        Hi!<span>&#128075;</span>
      </h1>
      <p className="text-grey_10 text-20">
        Welcome to Samfrexz Bootcamp 2023
      </p>
    </div>
    <section class="lg:w-full md:w-3/5 flex pt-16 flex-col lg:flex-row gap-y-5">
      <div
        v-for="card in cardItems"
        :key="card.id"
        class="w-full"
      > 
        <BaseCard 
          :items="card" 
        />
      </div>
    </section>
  </div>
  <MobileNav />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
import BaseCard from '../commons/BaseCard.vue';
import { cardItems } from '@/lib/utils.ts';
import ToggleSwitch from '../commons/ToggleSwitch.vue';
import MobileNav from '../MobileNav.vue';


const isToggled = ref<boolean>(false)

const savedState = useStorage('state', isToggled.value)

</script>

<style lang="scss" scoped>

</style>