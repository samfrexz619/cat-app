<template>
  <header 
    class="flex flex-col lg:flex-row py-10 w-full items-center justify-between gap-x-2"
  >
    <div class="xl:w-[420px] w-full pt-10 order-2 lg:pt-0">
      <SearchInput
        v-model:model-value="searchItem"
        placeholder="Search for breeds by name"
      />
    </div>
    <div class="flex gap-x-3 w-full lg:w-auto justify-between order-1 lg:order-2">
      <button className="lg:hidden h-606 w-606 block bg-white rounded-20 text-paw_pry dark:bg-bgg">
        <span className="w-full flex justify-center items-center h-full mt-1">
          <svg width='30' height='30' viewBox='0 0 30 30'>
            <use xlink:href="/sprite.svg#menu" />
          </svg>
        </span>
      </button>
      <div class="flex gap-x-4">
        <router-link
          class="h-606 w-606 rounded-20 flex justify-center items-center dark:bg-bgg"
          :to="{ name: link.name}"
          v-for="link in emojiLinks"
          :key="link.id">
          <EmojiIcons :name="link.emoji" />
        </router-link>
      </div>
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

const searchItem = ref<string>('')
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