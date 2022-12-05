export default {
    namespaced: true,
    state() {
        return {
            API_KEY: "4192f6f92d5323c8d09af1cfafdc75ad",
            BaseUrl: 'https://api.themoviedb.org/3',
            requests : {
                fetchTrending: ['/trending/all/week?api_key=','&language=en-US'],
                fetchNetflixOriginals: ['/discover/tv?api_key=','&with_networks=213'],
                fetchTopRated: ['/movie/top_rated?api_key=','&language=en-US'],
                fetchActionMovies: ['/discover/movie?api_key=','&with_genres=28'],
                fetchComedyMovies: ['/discover/movie?api_key=','&with_genres=35'],
                fetchHorrorMovies: ['/discover/movie?api_key=','&with_genres=27'],
                fetchRomanceMovies: ['/discover/movie?api_key=','&with_genres=10749'],
                fetchDocumentaries: ['/discover/movie?api_key=','&with_genres=99'],
            },
            moviesList: {},
        };
      },
      mutations:{
        setMoviesList(state,payload){
            state.moviesList[payload.genre] = payload.filteredResult
        },
       
      },
      actions:{
        async getData(context,genre){
            const response = await fetch(
                context.state.BaseUrl + 
                context.state.requests[genre][0] + 
                context.state.API_KEY + 
                context.state.requests[genre][1]
                );
                const { results } = await response.json()
                const filteredResult = results.filter(movie=>movie.backdrop_path)
                
                // console.log(filteredResult)
                return context.commit('setMoviesList',{filteredResult, genre})
        }
    },
    getters:{
        getMovies(state){
            return state.moviesList
        },
      
    }
  }