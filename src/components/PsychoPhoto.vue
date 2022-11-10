<template>
  <section class="psycho-photo">
    <div class="psycho-photo__img"></div>
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
  }

}

</style>