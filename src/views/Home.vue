<template>
    <home-nav></home-nav> 
    <div class="max-w-screen h-[50vh] relative bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900">
        <img class="w-full h-full absolute inset-0 object-fit" src="../assets/movie1.jpg" alt="">  
        <div class="w-3/4 h-full px-[5%] pt-10 text-white absolute bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent">
            <h3 class="text-5xl font-bold">Spiderman</h3>
            <div class="w-50% lg:w-[40%] py-5 flex">
                <home-button>Play</home-button>
                <home-button class="ml-5">
                   <svg class="w-4 h-4 fill-white  inline-block mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                        <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
                    </svg>
                   <span>My list</span>     
               </home-button>              
            </div>
            <div class="max-h-40 md:mr-40 md:pr-32 overflow-y-auto scrollbar-hide">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis asperiores labore quod dolore possimus ipsa veniam, modi maxime, adipisci quo minus voluptatem fugit at exercitationem, ea voluptatum commodi quae?</p>
            </div>
        </div> 
    </div>

    <movie-list poster :title="'Netflix Originals'" :movies="getMovies.fetchNetflixOriginals"></movie-list>
    <movie-list :title="'Trending Now'" :movies="getMovies.fetchTrending"></movie-list>
    <movie-list :title="'Top Rated'" :movies="getMovies.fetchTopRated"></movie-list>
    <movie-list :title="'Action Movies'" :movies="getMovies.fetchActionMovies"></movie-list>
    <movie-list :title="'Comedy Movies'" :movies="getMovies.fetchComedyMovies"></movie-list>
    <movie-list :title="'Horror Movies'" :movies="getMovies.fetchHorrorMovies"></movie-list>
    <movie-list :title="'Romance Movies'" :movies="getMovies.fetchRomanceMovies"></movie-list>
    <movie-list :title="'Documentaries'" :movies="getMovies.fetchDocumentaries"></movie-list>

</template>

<script>
import HomeNav from '../components/home/HomeNav.vue';
import HomeButton from '../components/home/HomeButton.vue' ;
import MovieList from '../components/home/MovieList.vue';
import { toRaw } from '@vue/reactivity';

export default {
    components:{
        HomeNav,
        HomeButton,
        MovieList
    },
    computed:{
        getMovies(){
            const list = this.$store.getters['movies/getMovies']
            const result = toRaw(list)
            return result
        },
    }, 
}
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>