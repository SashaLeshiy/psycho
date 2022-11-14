<template>
  <section>
    <img
    src="@/assets/img/main_photo1.jpg"
    class="psycho-home__image"
  />
  <div class="psycho-home">
    <h2 class="psycho-home__title">Олег Владимирович</h2>
    <div class="psycho-home__line"></div>
    <div class="psycho-home__description">
      <span class="psycho-home__description-first">Детский </span><span class="psycho-home__description-second"> Нейропсихолог</span>
    </div>
  </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.psycho-home {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  &__title {
    margin: 0;
    color: #000000;
    text-transform: uppercase;
  }

  &__line {
    width: 30%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #000000;
  }

  &__description {

    &-first {
      color: #9ab884;
    }
    
    &-second {
      color: #000000;
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

