<template>
    <div>
        <bio-header></bio-header>
        <bio-paragraphs-container v-bind:values='bioParagraphs'></bio-paragraphs-container>
    </div>
</template>

<script>
    import BioHeader from 'components/BioHeader.vue'
    import BioParagraphsContainer from 'components/BioParagraphsContainer.vue'

    export default {
        components: {
            bioHeader: BioHeader,
            bioParagraphsContainer: BioParagraphsContainer,
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
