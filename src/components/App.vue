<template>
  <div class="psycho-main">
    <psycho-header @toggle-modal="toggleModal"></psycho-header>
    <div class="psycho-main__container container">
      <psycho-photo class="psycho-main__photo"></psycho-photo>
        <div class="psycho-main__content">
          <transition name="slide">
            <router-view></router-view>
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
    }
  },

  methods: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    }
  }
})
</script>


<style lang="scss" scoped>
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
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (min-width: 768px){
      grid-template-columns: 1fr 1fr;
    }
  }

  &__content {
    padding: 10px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: auto;
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
