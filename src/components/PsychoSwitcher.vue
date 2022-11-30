<template>
  <div class="psycho-switcher">
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label" @click="useLabel">
      <span v-if="userTheme === 'light-theme'" class="switch-label__dark">🌙</span>
      <span v-if="userTheme === 'dark-theme'" class="switch-label__light">☀️</span>
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
    },
  },

  mounted() {
    const initUserTheme = this.getTheme();
    if (initUserTheme === null) {
      this.setTheme(this.userTheme)
    } else {
      this.setTheme(this.getTheme())
    }
    if (this.userTheme === 'dark-theme') {
      this.checkStick = true
    }
  },

}
</script>

<style lang="scss" scoped>
.switch-checkbox {
  display: none;
}
.switch-label {
  cursor: pointer;
} 
</style>