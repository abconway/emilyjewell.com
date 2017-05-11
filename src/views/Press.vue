<template>
    <div>
        <press-shows-header></press-shows-header>
        <press-shows-container :values='pressShows'></press-shows-container>
    </div>
</template>

<script>
    import PressShowsHeader from 'components/PressShowsHeader.vue'
    import PressShowsContainer from 'components/PressShowsContainer.vue'

    export default {
        components: {
            pressShowsHeader: PressShowsHeader,
            PressShowsContainer: PressShowsContainer,
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
