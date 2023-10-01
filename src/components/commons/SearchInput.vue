<template>
  <div class="dark:bg-bgg bg-white w-full flex h-606 rounded-20 px-4 items-center focus-within:border-pry focus-within:border focus:border-solid">
    <input 
        type="search"
        className='input dark:bg-bgg'
        @input="getValue"
        :value="modelValue"
        :placeholder="placeholder"
    />
      <span class='w-10 dark:bg-pry_5 h-10 text-pry bg-pry_hov rounded-[10px] flex justify-center items-center'>
        <svg width='20' height='20' viewBox='0 0 20 20'>
          <use xlink:href="/sprite.svg#search" />
        </svg>
      </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder: string;
}>()

const emit = defineEmits(['update:modelValue'])

const getValue =(e: Event)=> {
  let val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #8C8C8C;
  height: 100%;
  font-size: 18px;
}
</style>