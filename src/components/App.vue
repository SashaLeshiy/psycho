<template>
  <div class="psycho-main">
    <psycho-header @toggle-modal="toggleModal"></psycho-header>
    <div class="psycho-main__container container">
      <psycho-photo class="psycho-main__photo"></psycho-photo>
      <div class="psycho-main__content">
        <transition name="fade">
          <router-view v-slot="{ Component }">
            <component :is="Component" :key="Component"/>
          </router-view>
        </transition>
      </div>
    </div>
    <psycho-footer></psycho-footer>
    <psycho-modal
      v-if="isModalOpen"
      @toggle-modal="toggleModal"
    ></psycho-modal>
  </div>
</template>

<script>
import PsychoHeader from '@/components/PsychoHeader.vue'
import PsychoPhoto from '@/components/PsychoPhoto.vue'
import PsychoFooter from '@/components/PsychoFooter.vue'
import PsychoModal from '@/components/PsychoModal.vue'

export default ({

  components: {
    PsychoHeader,
    PsychoPhoto,
    PsychoFooter,
    PsychoModal,
  },

  data () {
    return {
      isModalOpen: false,
      userTheme: 'light-theme',
    }
  },

  methods: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    }
  },
})
</script>


<style lang="scss">
@font-face {
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Roboto"), url("@/assets/fonts/roboto-v30-latin_cyrillic-regular.woff2") format("woff2"), url("@/assets/fonts/roboto-v30-latin_cyrillic-regular.woff") format("woff");
}

@font-face {
  font-family: "Roboto";
  font-weight: 700;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Roboto"), url("@/assets/fonts/roboto-v30-latin_cyrillic-700.woff2") format("woff2"), url("@/assets/fonts/roboto-v30-latin_cyrillic-700.woff") format("woff");
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


:root {
  --theme-bg: #ffffff;
  --theme-color-line: #000000;
  --theme-color-text: #000000;
  --theme-main-container: #ffffff;
  --theme-main-content: #000000;
  --theme-color-menu-button: #ffffff;
  --theme-color-menu: #000000;
  --theme-color-menu-button-active: #9ab884;
  --theme-color-menu-button-active-text: #ffffff; 
  --theme-grayscale-image: grayscale(1%);
  --theme-color-list-icon: #9ab884;

  // стили переключателя
  --switch-border-color: #000000;
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

:root.dark-theme {
  --theme-bg: #222831;
  --theme-color-line: #393E46;
  --theme-color-text: #e2e2e2;
  --theme-main-container: #222831;
  --theme-main-content: #e2e2e2;
  --theme-color-menu-button: #222831;
  --theme-color-menu: #00adb5;
  --theme-color-menu-button-active: #00adb5;
  --theme-color-menu-button-active-text: #e2e2e2;
  --theme-grayscale-image: grayscale(100%);
  --theme-color-list-icon: #00adb5;

  --switch-border-color: #00adb5;
}

.psycho-main {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr 60px;

  &__container {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: grid;
    background-color: var(--theme-main-container);
    box-sizing: border-box;
    overflow: hidden;
    transition: background-color .5s ease-in-out;

    @media screen and (min-width: 768px){
      grid-template-columns: 1fr 1fr;
    }
  }

  &__content {
    padding: 10px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    color: var(--theme-main-content);
    overflow: auto;
    scrollbar-color: var(--theme-bg) var(--theme-main-content);
    
    &::-webkit-scrollbar-track {
      background-color: var(--theme-bg);
    }

    // &::-webkit-scrollbar {
    //   background-color: var(--theme-main-content);
    // }
  }

  &__photo {
    display: none;

    @media screen and (min-width: 768px){
      display: inherit;
    }
  }
}

.container {
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;

  @media screen and (min-width: 1280px) {
    padding: 15px 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 15px 100px;
  }
}
</style>
