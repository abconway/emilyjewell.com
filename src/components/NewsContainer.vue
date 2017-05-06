<template>
    <ul>
        <news-list-item v-for="value in values" :value= "value">
        </news-list-item>
    </ul>
</template>

<script>
import NewsListItem from 'components/NewsListItem.vue'
export default {
    props: ['values'],
    components: {
        newsListItem: NewsListItem,
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        width: 600px;
        padding: 0;
        margin: 0;
    }
</style>
