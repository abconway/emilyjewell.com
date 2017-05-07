<template>
    <ul>
        <press-shows-item v-for="value in values" :value="value">
        </press-shows-item>
    </ul>
</template>

<script>
    import PressShowsItem from 'components/PressShowsItem.vue'

    export default {
        props: ['values'],
        components: {
            pressShowsItem: PressShowsItem,
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
