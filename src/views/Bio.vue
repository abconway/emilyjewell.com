<template>
    <div>
        <p>Sup</p>
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
        width: 600px;
        background-color: rgba(220,220,220,0.8);
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
    }
</style>
