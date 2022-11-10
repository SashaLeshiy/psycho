<template>
  <section class="psycho-footer container">
    <div class="psycho-footer__copyright">
      Copyright &copy; {{ currentDate }}
    </div>
    <div class="psycho-footer__social">
      <a href="https://t.me/frank0473" target="_blank">
        <img src="@/assets/img/tm_footer.svg" class="psycho-footer__icon"/>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=79175656972" target="_blank">
        <img src="@/assets/img/wh_footer.svg" class="psycho-footer__icon"/>
      </a>
    </div>
  </section>
</template>

<script>
export default {

  data () {
    return {
      currentDate: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.psycho-footer {
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
  background-color: #fff;

  &__icons {
    display: flex;
    
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 6px;
  }
}

</style>