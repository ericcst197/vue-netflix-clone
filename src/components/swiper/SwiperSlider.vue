<template>
  <swiper
    :slidesPerView="5"
    :spaceBetween="20"
    :pagination="false"
    :modules="modules" 
    class="mySwiper pl-4 mr-0"
  >
    <swiper-slide class="rounded-lg my-2 overflow-hidden text-center cursor-pointer" v-for="movie in movies" :key="movie.id">
      <img v-if="poster" :src="imgUrl+movie.poster_path" alt="movie.poster_path">
      <img v-else :src="imgUrl+movie.backdrop_path" alt="movie.backdrop_path">
      <p class="text-md pt-2">{{movie.title || movie.name}}</p>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props:['movies','poster'],
  data(){
    return{
      imgUrl: 'https://image.tmdb.org/t/p/original',
      modules: [Pagination],
    } 
  },
  mounted(){
  }
};
</script>
