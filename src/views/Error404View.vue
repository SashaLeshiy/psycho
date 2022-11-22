<template>
  <img
    src="@/assets/img/main_photo1.jpg"
    class="psycho-error__image"
  />
  <div class="psycho-error">
    <h2 class="psycho-error__title">404</h2>
    <div class="psycho-error__line"></div>
    <div class="psycho-error__description">
      <p class="psycho-error__description-second"> Страница не найдена</p>
      <router-link to="/" class="psycho-error__description-link">перейти на главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404View',
}
</script>

<style lang="scss" scoped>
.psycho-error {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  &__title {
    margin: 0;
    color: var(--theme-color-text);
    text-transform: uppercase;
  }

  &__line {
    width: 30%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--theme-color-line);
  }

  &__description {
    
    &-second {
      color: var(--theme-color-text);
    }

    &-link {
      color: var(--theme-color-text);
      text-decoration: none;
      border-bottom: 1px dotted #000000;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    opacity: 0.2;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>