<template>
  <div class="psycho-modal container">
    <div class="psycho-modal__header">
      <psycho-switcher class="psycho-modal__switcher"></psycho-switcher>
      <button 
        type="button" 
        class="psycho-modal__close"
        @click="toggleModal"
      >&#9587;</button>
    </div>
    <div class="psycho-modal__menu">
      <div 
				v-for="item in menu"
				:key="item.id"
				class="psycho-modal__links"
			>
				<router-link 
					:to="item.route" 
					class="psycho-modal__link-text"
					active-class="psycho-modal__link-text--active"
					v-slot="{ isActive }"
				>
					<button 
						type="button"
						class="psycho-modal__button"
						:class="[isActive && 'psycho-modal__button-active']"
            @click="toggleModal"
					>
						{{ item.name }}
					</button>
				</router-link>
			</div>
    </div>
  </div>
  
</template>

<script>
import MENU from '../constants/menu'
import PsychoSwitcher from './PsychoSwitcher.vue';

export default {

  components: {
    PsychoSwitcher,
  },

  data () {
		return {
			menu: MENU,
      userTheme: "light-theme",
		}
	},

  methods: {
    toggleModal () {
      this.$emit('toggle-modal')
    },
  }

}
</script>

<style lang="scss" scoped>
.psycho-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: var(--theme-color-text);
  background-color: var(--theme-bg);
  transition: all .5s ease-in-out;

  &__header {
    width: 100%;
    padding-top: 10px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
  }

  &__close {
    width: 30px;
    height: 30px;
    border: 0;
    color: #ffffff;
    background-color: var(--theme-color-menu-button-active);
    border-radius: 5px;
  }

  &__menu {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  &__button {
    margin-bottom: 20px;
    background: none;
    color: var(--theme-color-text);
    font-size: 24px;
    line-height: 28px;
    border: none;

    &-active {
      border-bottom: 3px dashed var(--theme-color-menu-button-active);
    }
  }
}

</style>