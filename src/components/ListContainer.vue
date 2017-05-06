<template>
    <ul>
        <list-item v-for="value in values" :value= "value">
        </list-item>
    </ul>
</template>

<script>
import ListItem from 'components/ListItem.vue'
export default {
    props: ['values'],
    components: {
        listItem: ListItem,
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
