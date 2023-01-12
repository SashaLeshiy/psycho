<template>
  <section class="psycho-footer container">
    <div class="psycho-footer__social">
      <a href="https://t.me/frank0473" target="_blank">
        <img src="@/assets/img/tm_logo.svg" class="psycho-footer__icon"/>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=79175656972" target="_blank">
        <img src="@/assets/img/wh_icon.svg" class="psycho-footer__icon"/>
      </a>
    </div>
    <div class="psycho-footer__copyright">
      <psycho-switcher class="psycho-footer__switcher"></psycho-switcher>
      <div class="psycho-footer__copyright-date">
        &copy; {{ currentDate }}
        <a 
        href="https://github.com/SashaLeshiy"
        target="_blank"
        class="psycho-footer__copyright-link"
      >
        SL
      </a> 
      </div>
    </div>
  </section>
</template>

<script>
import PsychoSwitcher from './PsychoSwitcher.vue';

export default {

  components: {
    PsychoSwitcher,
  },

  data () {
    return {
      currentDate: new Date().getFullYear(),
    }
  },

  methods: {
    getTheme() {
      return localStorage.getItem("user-theme")
    },
  }
}
</script>

<style lang="scss" scoped>
.psycho-footer {
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--theme-color-text);
  font-size: 16px;
  line-height: 20px;
  background-color: var(--theme-bg);
  transition: background-color .5s ease-in-out;

  @media screen and (min-width: 1600px){
    height: 90px;
  }

  &__icons {
    display: flex;
    
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 6px;
  }

  &__copyright {
    display: flex;
    align-items: center;
  }

  &__copyright-date {
    margin-right: 14px;

    @media screen and (min-width: 1600px){
			font-size: 22px;
		}
  }

  &__copyright-link {
    margin-left: 10px;
    color: var(--theme-color-list-icon);
    text-decoration: none;
    border-bottom: 1px dotted #000000;
  }

  &__social {
    display: flex;
    align-items: center;
  }

  &__switcher {
    margin-right: 10px;
  }
}

</style>