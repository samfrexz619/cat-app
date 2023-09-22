<template>
  <header class="flex py-10 w-full px-5 items-center justify-between gap-x-2">
    <div class="lg:w-[420px] w-full">
      <SearchInput  />
    </div>
    <div class="flex gap-x-3">
      <router-link 
        class="h-606 w-606 rounded-20 flex justify-center items-center dark:bg-bgg"
        :to="{ name: link.name}" 
        v-for="link in emojiLinks" 
        :key="link.id">
        <EmojiIcons :name="link.emoji" />
      </router-link>
    </div>
  </header>
  <main>
    <RouterView  />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchInput from '../commons/SearchInput.vue';
import EmojiIcons from '../commons/EmojiIcons.vue';

interface EmojiLinks {
  name: string;
  emoji: string;
  id: number;
}

const emojiLinks = ref<EmojiLinks[]>([
  {
    name: 'like',
    emoji: 'like',
    id: 2
  },
  {
    name: 'favorite',
    emoji: 'favorite',
    id: 1
  },
  {
    name: 'dislike', 
    emoji: 'sad',
    id: 3
  },

])

</script>

<style scoped lang="scss">
a {
  background: #fff;
  color: #FF868E;
  &.router-link-active {
    background: #FF868E;
    color: #fff;
  }
}
</style>