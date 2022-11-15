<script>
import { store } from '../store';
export default {
    name: AppSearch;
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="search-bar">
            <input type="text">
            <button>Cerca</button>
        </div>
    </div>
</template>

<style>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
}

.flex{
    display: flex;
}

.search-bar{
    margin: 0 auto;
}

input{
    height: 30px;
    width: 300px;
}

button{
    height: 36px;
}
</style>
