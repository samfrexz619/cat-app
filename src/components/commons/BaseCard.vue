<template>
  <div class="w-13 block links">
    <router-link :to="{name: items.path}" :class="`${classes} h-19 flex items-center justify-center rounded-20 border-solid border-4 border-vb w-full mb-5`">
      <img :src="getImgUrl" alt="">
    </router-link>
    <router-link :to="{ name: items.path }" 
      class="uppercase flex items-center justify-center w-full rounded-[10px] py-3 text-xs">
      {{ items.variant }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CardItems } from '@/lib/types';

const props = defineProps<{
  items: CardItems;
}>()

const getImgUrl = computed(()=> {
  return new URL(`../../assets/images/${props.items.img}`, import.meta.url).href
})

const classes = computed(()=> {
  return props.items.variant === 'voting'
    ? 'bg-purple_bg'
    : props.items.variant === 'breeds'
    ? 'bg-green_bg'
    : 'bg-yellow_bg'
})
</script>

<style scoped lang="scss">
.links {
  a:last-child  {
    background: #fff;
    color: #FF868E;
    &.router-link-active {
      background: #FF868E;
      color: #fff;
    }
    &:hover {
      background: #FBE0DC;
    }
  }
}
</style>