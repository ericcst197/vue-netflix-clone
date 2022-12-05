<template>
<div :class="backgroundStyling" class="min-h-screen w-screen relative">
    <img v-if="!isHomePage" src="./assets/profile-bg-pic.jpg" :class="showBackgroundImg">
    <TheHeader v-if="!isHomePage"/> 
    <router-view></router-view>
</div>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue'
import Home from './views/Home.vue'


export default {
  components:{
    TheHeader,
    Home
  },
  data(){
    return {
      isHomePage: true,
      homePageBackground: "bg-[#181818]" ,
      loginPageBackdrop : "bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900",
      loginPageBgImage: "w-full h-full absolute -z-50 object-cover brightness-[.55]"
    }
  },
  methods:{
    fetchData(){
        const genres = [
          'fetchTrending',
          'fetchNetflixOriginals',
          'fetchTopRated',
          'fetchActionMovies',
          'fetchComedyMovies',
          'fetchHorrorMovies',
          'fetchRomanceMovies',
          'fetchDocumentaries'
        ];
        for(let genre of genres){
          this.$store.dispatch('movies/getData' , genre)
        }
    }
  },
  computed:{
      backgroundStyling(){
        return this.isHomePage ? this.homePageBackground: this.loginPageBackdrop 
      },
      showBackgroundImg(){
        if(!this.isHomePage){
          return this.loginPageBgImage
        }
      }
  },
  watch:{
      $route(newRoute){
          if(newRoute.path !== '/home'){
            // console.log(newRoute)
            this.isHomePage = false
          } else  this.isHomePage = true
      }
  },
  mounted(){
     this.fetchData()
    //  console.log(this.$store.state.moviesList)
  }

}
</script>