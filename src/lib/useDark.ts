import { ref, watch } from 'vue'

const checkMode = 'darkModePreference'
export function useDarkMode () {
  const isDark = ref<boolean>(getInitialDarkModePreference())

  const toggleDarkMode =()=> {
    isDark.value = !isDark.value;
    applyDarkModeStyles(isDark.value);
    // localStorage.setItem(checkMode, JSON.stringify(isDark.value));
    // document.documentElement.classList.toggle('dark', isDark.value);
  }

  watch(isDark, (newVal)=> {
    document.body.classList.toggle('dark', newVal);
    // localStorage.setItem(checkMode, JSON.stringify(newVal));
    // document.body.classList.toggle('dark', newVal);
  })

  return {
    isDark,
    toggleDarkMode
  }
}

function getInitialDarkModePreference() {
  const storedPreference = localStorage.getItem(checkMode);
  return storedPreference ? JSON.parse(storedPreference) : false;
}

function applyDarkModeStyles(isDark: any) {
  document.body.classList.toggle('dark', isDark);
  // localStorage.setItem(checkMode, JSON.stringify(isDark.value));
}