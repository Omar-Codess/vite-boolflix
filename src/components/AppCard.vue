<script>
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            availableFlags: ['en', 'it']
        }
    },
    computed: {
        getTitle() {
            // Se c'è la chiave title, ritorna title, se no name
            if (this.item.title) {
                return this.item.title;
            } else {
                return this.item.name;
            }
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getThumbnail() {
            return this.item.poster_path ? `http://image.tmdb.org/t/p/w342/${this.item.poster_path}` : this.getImgUrl(`no-image.jpg`);    
        }
    },
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div>
        <img :src="getThumbnail" alt="">
        <h3>Titolo: {{ getTitle }}</h3>
        <p>Titolo originale: {{ getOriginalTitle }}</p>
        <div>
            <img v-if="availableFlags.includes(item.original_language)" :src="getImgUrl(item.original_language)">
            <p v-else>Lingua: {{ item.original_language }}</p>
        </div>
        <div>
            <p>Voto: {{ item.vote_average }}</p>
            <i class="fa-solid fa-star"></i>
            <span v-for="number in 5">0</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>