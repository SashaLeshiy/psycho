<template>
  <section class="psycho-photo">
    <div class="psycho-photo__img"></div>
      <button 
      type="button" 
      class="psycho-photo__button"
      @click="$router.push('/contacts')"
      >Записаться</button>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.psycho-photo {
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/main_photo1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 10px;
    filter: var(--theme-grayscale-image);
    transition: filter .5s ease-in-out;
  }

  &__button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    color: #ffffff;
    background-color: RGBA(255,101,80,0.68);
    border: 0;
    border-radius: 6px;
    box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 30%);
    background-color: RGBA(255,101,80,0.68);
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      background-color: RGBA(255,101,80,0.98);
      cursor: pointer;
    }
  }

}

</style>