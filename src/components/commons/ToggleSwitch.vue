<template>
  <label class='toggle'>
      <input 
        id="state"
        type="checkbox" 
        :checked="checked"
        @input="getValue"
        @click="toggleDark()"
      />
      <span className='toggle__slider'></span>
    </label>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

 defineProps<{
  checked: boolean;
}>()

const isDark = useDark()

const toggleDark = useToggle(isDark)

const emit = defineEmits(['update:checked'])

const getValue =(e: Event)=> {
  let val = (e.target as HTMLInputElement).checked
  emit('update:checked', val)
}

// const savedState = useStorage('state', props.checked)
</script>

<style scoped lang="scss">
.toggle {
  position: relative;
  display: inline-flex;
  width: 44px;
  height: 25px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: lightgray;
    border-radius: 84px;
    transition: 0.4s;
      &::before {
        position: absolute;
        border-radius: 50%;
        content: '';
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background: #FF868E;
        transition: 0.4s;
    }
  }
}
input:checked + .toggle__slider {
  background: #FBE0DC;
}
input:checked + .toggle__slider::before {
  transform: translateX(18px);
}
</style>