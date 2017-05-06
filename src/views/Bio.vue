<template>
    <div>
        <p>{{ bioParagraphs }}</p>
    </div>
</template>

<script>

    export default {
        components: {
        },
        mounted() {
            this.$store.dispatch('getAllBioParagraphs')
        },
        computed: {
            bioParagraphs() {
                return this.$store.getters.allBioParagraphs
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
