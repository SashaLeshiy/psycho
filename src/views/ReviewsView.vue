<template>
  <div class="psycho-reviews">
    <swiper
        :effect="'flip'"
        :grabCursor="true"
        :centeredSlides="true"
        :pagination="pagination"
        :modules="modules"
        class="psycho-reviews__swiper"
    >
    <swiper-slide>
        <img src="@/assets/img/photo_1.jpg" class="psycho-reviews__img" />
    </swiper-slide>
    <swiper-slide>
        <img src="@/assets/img/photo_2.jpg" class="psycho-reviews__img" />
    </swiper-slide>
    <swiper-slide>
        <img src="@/assets/img/photo_3.jpg" class="psycho-reviews__img" />
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper';
import "swiper/css/effect-flip";

export default {
    name: 'ReviewsView',
    components: {
      Swiper,
      SwiperSlide,
    },

    data () {
        return {
            modules: [EffectFlip, Pagination, Navigation],
            pagination: {
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        }
    }
}
</script>

<style lang="scss" scoped>
.psycho-reviews {
    width: 70%;
    align-self: center;

    :deep {
        .swiper-slide {
            text-align: center;
        }
        .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 12px;
            color: var(--theme-color-menu-button-active-text);
            opacity: 1;
            background: var(--theme-color-line);
        }

        .swiper-pagination-bullet-active {
            color: #fff;
            background: var(--theme-color-menu-button-active);
        }
    }

    &__img {
        max-height: 100%;
        border-radius: 10px;
    }

    &__swiper {
        height: calc(100vh - 200px);
        
    }
}

</style>