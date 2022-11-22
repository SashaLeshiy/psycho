<template>
  <div>
    <h3 class="psycho-contacts__title">Контакты</h3>
    <div class="psycho-contacts__line"></div>
    <p class="psycho-contacts__adress">
      Россошанский проезд  д.3  ТЦ Прага, 3 этаж
    </p>
    <p>Для записи кликните по иконке вашего мессенджера</p>
    <div class="psycho-contacts__icons">
      <a href="https://t.me/frank0473" target="_blank">
        <img src="@/assets/img/tm_logo.svg" class="psycho-contacts__icon"/>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=79175656972" target="_blank">
        <img src="@/assets/img/wh_icon.svg" class="psycho-contacts__icon"/>
      </a>
    </div>
    <button type="button" class="psycho-contacts__map-button" @click="toggleOpenMap">
       {{ openMap ? 'Скрыть карту' : 'Показать карту' }}
    </button>
    <div 
      v-if="openMap"
      class="psycho-contacts__map">
      <div class="psycho-contacts__map-back"></div>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A93356e1ba0f3c54d19b0748fc81b8bfb745a6905fea9d6fcc6017d5146b1f405&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openMap: false,
    }
  },

  methods: {
    toggleOpenMap () {
      this.openMap = !this.openMap
    }
  }
}
</script>

<style lang="scss" scoped>
.psycho-contacts {
  &__title {
    font-weight: 400;
    text-transform: uppercase;
  }

  &__line {
    width: 30%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--theme-color-line);
  }

  &__adress {
    padding-bottom: 12px;
  }

  &__icons {
    display: flex;
    padding-bottom: 30px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  &__map {
    height: 100%;
    margin-top: 15px;
    background-color: var(--theme-bg);
    border-radius: 8px;
    overflow: hidden;

    &-button {
      padding: 0;
      border: 0;
      color: var(--theme-color-text);
      background: none;
      border-bottom: 1px dotted;
      cursor: pointer;
    }
  }

}
</style>