<template>
  <div class="dark:bg-bgg bg-white w-full flex h-606 rounded-20 px-4 items-center focus-within:border-pry focus-within:border focus:border-solid">
    <input 
        type="search"
        className='w-full bg-inherit border-none outline-0 text-paw_grey block'
    />
      <span class='w-10 dark:bg-bgg h-10 text-pry bg-pry_hov rounded-[10px] flex justify-center items-center'>
        <svg width='20' height='20' viewBox='0 0 20 20'>
          <use xlink:href="/sprite.svg#search" />
        </svg>
      </span>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>