<template>
    <div>
        Media
    </div>
</template>

<script>
    import MediaItem from 'components/MediaItem.vue'

    export default {
        components: {
            mediaItem: MediaItem,
        },
        mounted() {
            this.$store.dispatch('getAllPressShows')
        },
        computed: {
            pressShows() {
                return this.$store.getters.allPressShows
            }
        }
    }
</script>

<style scoped>
    div {
        width: 600px;
        background-color: rgba(220,220,220,0.8);
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
    }
</style>
