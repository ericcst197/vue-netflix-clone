import { createStore } from 'vuex';

import moviesModule from './modules/movies.js'
import authModule from './modules/auth.js'

const store = createStore({
    modules:{
        movies: moviesModule,
        auth: authModule,
    }
});
  
  export default store;
  