<template>
  <div class="psycho-switcher">
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label" @click="useLabel">
      <span class="switch-label__dark">🌙</span>
      <span class="switch-label__light">☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': checkStick }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {

  data () {
    return {
      userTheme: 'light-theme',
      checkStick: false,
    }
  },

  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },

    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme")
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme")
      } else {
        this.setTheme("light-theme")
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme")
    },

    useLabel() {
      this.checkStick = !this.checkStick
    }
  },

  mounted() {
    const initUserTheme = this.getTheme()
    if (initUserTheme === null) {
      this.setTheme(this.userTheme)
    } else {
      this.setTheme(this.getTheme())
    }
    if (this.userTheme === 'dark-theme') this.checkStick = true
  },

}
</script>

<style lang="scss" scoped>
.switch-checkbox {
  display: none;
}

.switch-toggle-checked {
  transform: translateX(27px)!important;
}
.switch-label {
  width: 38px; 
  border-radius: var(--element-size);
  border: 1px solid var(--switch-border-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: 16px;
  height: 10px;

  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background-color 0.5s ease;
  justify-content: space-between;
  z-index: 1;

  // &__dark {
  //   margin-left: -5px;
  // }

  // &__light {
  //   margin-right: -5px;
  // }
} 

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: 2px;
  left: 2px;
  height: 20px;
  width: 20px;
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}
</style>