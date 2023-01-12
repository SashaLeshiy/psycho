<template>
	<section class="psycho-header container">
		<div class="psycho-header__menu">
			<div 
				v-for="item in menu"
				:key="item.id"
				class="psycho-header__links"
			>
				<router-link 
					:to="item.route" 
					class="psycho-header__link-text"
					active-class="psycho-header__link-text--active"
					v-slot="{ isActive }"
				>
					<button 
						type="button"
						class="psycho-header__button"
						:class="[isActive && 'psycho-header__button-active']"
					>
						{{ item.name }}
					</button>
				</router-link>
			</div>
		</div>
		<div class="psycho-header__menu-mobile">
			<button 
				type="button"
				class="psycho-header__menu-mobile--social"
				@click="$router.push('/contacts')"
			>Записаться</button>
			
			<button 
				type="button"
				class="psycho-header__menu-mobile--button"
				@click="toggleModal"
			>&#9776;</button>
		</div>
	</section>
</template>

<script>
import MENU from '../constants/menu'

export default {

	data () {
		return {
			menu: MENU,
		}
	},

	methods: {
		toggleModal () {
			this.$emit('toggle-modal')
		}
	}
}
</script>

<style lang="scss" scoped>
.psycho-header{
	height: 70px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	background-color: var(--theme-bg);
	transition: background-color .5s ease;

	@media screen and (min-width: 1600px){
    height: 105px;
  }
	
	&__logo {
		&-link {
			text-decoration: none;
		}

		&-text {
			color: var(--theme-color-text);
		}
	}
	

	&__img {
		max-width: 110px;
		max-height: 65px;
	}

	&__menu {
		position: relative;
		display: none;

		@media screen and (min-width: 768px) {
			display: flex;
		}

		&-mobile {
			width: 100%;
			display: flex;
			justify-content: space-between;

			@media screen and (min-width: 768px) {
				display: none;
			}

			&--social {
				width: fit-content;
				padding: 0 16px;
				background-color: var(--theme-color-menu-button-active);
				border: 0;
				border-radius: 5px;
				color: var(--theme-color-menu-button-active-text);
				text-transform: uppercase;
			}

			&--button {
				width: 30px;
				height: 30px;
				color: var(--theme-color-menu-button-active-text);
				background-color: var(--theme-color-menu-button-active);
				border: 0;
				border-radius: 5px;
			}
		}
	}

	&__links {
		margin: 0px;
		list-style-type: none;
	}

	&__link {
		margin: 0px;
		float: left;
	}

	&__link-active {
		color: #333;
	}

	&__link-text {
		text-decoration: none;
		color: #333;
		font-family: "Poppins";
		font-weight: 500;
		display: inline-block;
	}

	&__link-text--active {
		color: #fff;
	}

	&__button {
		padding: 15px;
		margin-right: 15px;
		color: var(--theme-color-menu);
		font-size: 18px;
    line-height: 24px;
		border: 0;
		border-radius: 8px;
		background-color: var(--theme-color-menu-button);
		transition: all .5s ease-in-out;
		cursor: pointer;

		@media screen and (min-width: 1600px){
			font-size: 24px;
      line-height: 36px;
		}
	}

	&__button:last-of-type {
		margin-right: 0;
	}

	&__button-active {
		padding: 15px;
		margin-right: 15px;
		border: 0;
		color: var(--theme-color-menu-button-active-text);
		border-radius: 8px;
		background-color: var(--theme-color-menu-button-active);
		cursor: pointer;
		transition: all .5s ease-in-out;
	}

	&__record {
		padding: 13px;
    border: 0;
    background-color: olivedrab;
    color: #ffffff;
	}
}
</style>