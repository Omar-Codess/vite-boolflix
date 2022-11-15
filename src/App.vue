<script>
  import axios from 'axios';

  import AppHeader from './components/AppHeader.vue';
  import AppSearch from './components/AppSearch.vue';

  import { store } from './store'

  export default {
    components: {
      AppHeader,
      AppSearch
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMovies(){
        let myUrl = store.apiURL;

        axios
            .get(apiUrl)
            .then((res) => {
                store.moviesList = res.data;
            })
            .catch((err) => {
                console.log("Error", err);
            })
      },
    },
    created() {
      this.getMovies();
    }
  }
</script>

<template>
   <AppHeader />
   <AppSearch />
    
</template>

<style>
body{
  background-color: burlywood;
}
</style>
