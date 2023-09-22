<template>
  <div>
    <span v-if="name === 'like'">
      <svg width='30' height='30' viewBox='0 0 30 30'>
        <use xlink:href="/sprite.svg#happy" />
      </svg>
    </span>
    <span v-else-if="name === 'favorite'">
      <svg width='30' height='30' viewBox='0 0 30 30'>
        <use xlink:href="/sprite.svg#like" />
      </svg>
    </span>
    <span v-else>
      <svg width='30' height='30' viewBox='0 0 30 30'>
        <use xlink:href="/sprite.svg#sad" />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  name: string;
}>()
</script>

<style scoped>

</style>