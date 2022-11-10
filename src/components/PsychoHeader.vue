<template>
	<section class="psycho-header container">
		<!-- <div class="psycho-header__logo">
			<router-link to="/" class="psycho-header__logo-link">
			</router-link>
		</div> -->
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
			<!-- <button type="button" class="psycho-header__record">Записаться</button> -->
		</div>
		<div class="psycho-header__menu-mobile">
			<!-- <div class="psycho-header__menu-mobile--social">
				<a
					href="https://t.me/zomlesh"
					target="_blank"
					class="psycho-header__menu-mobile--telegram"
				>
					<img src="@/assets/img/telegram_icon.png" />
				</a>
				<a
					href="https://wa.me/79175656972"
					target="_blank"
					class="psycho-header__menu-mobile--telegram"
				>
					<img src="@/assets/img/whatsapp_icon.png" />
				</a>
			</div> -->

			<button 
				type="button"
				class="psycho-header__menu-mobile--social"
				@click="toggleModal"
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
	// line-height: 70px;
	background-color: #fff;
	
	&__logo {
		&-link {
			text-decoration: none;
		}

		&-text {
			color: #000000;
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
				background-color: #9ab884;
				border: 0;
				border-radius: 5px;
				color: #ffffff;
				text-transform: uppercase;
			}
		}

		&-mobile--button {
			width: 30px;
			height: 30px;
			color: #ffffff;
			background-color: #9ab884;
			border: 0;
			border-radius: 5px;
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
		font-size: 18px;
    line-height: 24px;
		border: 0;
		background-color: #fff;
		cursor: pointer;
	}

	&__button:last-of-type {
		margin-right: 0;
	}

	&__button-active {
		padding: 15px;
		margin-right: 15px;
		border: 0;
		color: #fff;
		border-radius: 8px;
		background-color: #9ab884;
		cursor: pointer;
	}

	&__record {
		padding: 13px;
    border: 0;
    background-color: olivedrab;
    color: #ffffff;
	}
}
</style>