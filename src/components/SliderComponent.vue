<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#292F36',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="@/assets/img/slider/Slider_img_1.jpg" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img src="@/assets/img/slider/Slider_img_2.jpg" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img src="@/assets/img/slider/Slider_img_3.png" />
        </div> </swiper-slide
      >
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>


