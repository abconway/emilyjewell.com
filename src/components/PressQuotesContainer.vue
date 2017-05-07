<template>
    <ul>
        <press-quotes-item v-for="value in values" :value="value">
        </press-quotes-item>
    </ul>
</template>

<script>
    import PressQuotesItem from 'components/PressQuotesItem.vue'

    export default {
        props: ['values'],
        components: {
            pressQuotesItem: PressQuotesItem,
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
