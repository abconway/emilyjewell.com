<template>
    <ul>
        <bio-paragraphs-item v-for="value in values" :value= "value">
        </bio-paragraphs-item>
    </ul>
</template>

<script>
import BioParagraphsItem from 'components/BioParagraphsItem.vue'

export default {
    props: ['values'],
    components: {
        bioParagraphsItem: BioParagraphsItem,
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0.5em;
    }
</style>
