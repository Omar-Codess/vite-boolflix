<script>
export default{
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            availableFlags: [`en`, `it`]
        }
    },
    computed: {
        getTitle() {
            if (this.item.title) {
                return this.item.title;
            } else {
                return this.item.name;
            }
        },
    }
}
</script>

<template>
</template>

<style>
</style>
