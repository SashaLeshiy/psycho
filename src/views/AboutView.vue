<template>
<div>
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
</div>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.psycho-about {
  &__title {
    text-transform: uppercase;
  }

  &__line {
    width: 30%;
    height: 2px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #000000;
  }

  &__list {
    padding: 0;
    display: flex;
    align-items: center;
    list-style: none;

    &-icon {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      color: #9ab884;
      transform: rotate(90deg);
    }
  }
}
</style>
