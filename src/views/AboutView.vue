<template>
  <section class="psycho-about">
    <h3 class="psycho-about__title">
    Как понять, что требуется помощь нейропсихолога
    </h3>
    <div class="psycho-about__line"></div>
    <ul 
      v-for="elem in about"
      :key="elem.id"
      class="psycho-about__list">
      <div class="psycho-about__list-icon">&#9650;</div>
      <li class="psycho-about__list-elem">{{ elem.text }}</li>
    </ul>
  </section>
</template>

<script>
import ABOUT from '../constants/about'

export default {

  data () {
		return {
			about: ABOUT,
		}
	}
}
</script>


<style lang="scss" scoped>
.psycho-about {
  &__title {
    font-weight: 400;
    text-transform: uppercase;

    @media screen and (min-width: 1600px){
			font-size: 22px;
		}
  }

  &__line {
    width: 30%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--theme-color-line);
  }

  &__list {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (min-width: 1600px){
			font-size: 18px;
		}

    &-icon {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      color: var(--theme-color-list-icon);
      transform: rotate(90deg);
    }
  }
}
</style>
