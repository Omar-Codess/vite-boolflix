<script>
  import AppHeader from './components/AppHeader.vue';
  import AppSearch from './components/AppSearch.vue';

  export default {
    components: {
      AppHeader,
      AppSearch
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
