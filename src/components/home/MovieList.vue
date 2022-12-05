<template>
    <div class=" text-white px-4 py-2">
        <h2 :class="{uppercase: showPoster}" class="text-2xl font-bold mb-4">{{title}}</h2>
        <swiper-slider :poster="showPoster" :movies="movies"></swiper-slider>
    </div>
</template>

<script>
import SwiperSlider from '../swiper/SwiperSlider.vue'
export default {
    props:['movies','title','poster'],
    components:{
        SwiperSlider
    },
    computed:{
        showPoster(){
            return this.poster !== undefined ? true: false
        }
    }
}

</script>