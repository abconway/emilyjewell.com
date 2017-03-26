<template>
    <div>
        <list-header></list-header>
        <list-container v-bind:values='listItems'></list-container>
    </div>
</template>

<script>
import Header from 'components/Header.vue'
import ListContainer from 'components/listContainer.vue'
export default {
    components: {
        listHeader: Header,
        listContainer: ListContainer,
    },
    mounted() {
        this.$store.dispatch('getAllListItems')
    },
    computed: {
        listItems() {
            return this.$store.getters.allListItems
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>
