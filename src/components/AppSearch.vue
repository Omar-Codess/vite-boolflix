<script>
import { store } from "../store";
export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="search">
        <input type="search" v-model="store.searchKey">
        <button @click="$emit('performSearch')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
    .search{
        margin-top: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
