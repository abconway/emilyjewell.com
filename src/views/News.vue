<template>
    <div>
        <news-header></news-header>
        <news-container v-bind:values='newsItems'></news-container>
    </div>
</template>

<script>
    import NewsHeader from 'components/NewsHeader.vue'
    import NewsContainer from 'components/NewsContainer.vue'

    export default {
        components: {
            newsHeader: NewsHeader,
            newsContainer: NewsContainer,
        },
        mounted() {
            this.$store.dispatch('getAllNewsItems')
        },
        computed: {
            newsItems() {
                return this.$store.getters.allNewsItems
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
