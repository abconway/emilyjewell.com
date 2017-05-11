<template>
    <li>
        <h2 class='name'>{{ value.name }}</h2>
        <press-quotes-container :values="quotes">
        </press-quotes-container>
    </li>
</template>

<script>
    import marked from 'marked'
    import moment from 'moment'

    import PressQuotesContainer from 'components/PressQuotesContainer.vue'

    export default {
        components: {
            pressQuotesContainer: PressQuotesContainer,
        },
        props: [
            'value',
        ],
        data() {
            return {
                'quotes': this.value.quotes,
            }
        },
    }
</script>

<style scoped>
    li {
        margin: 0.25em;
        padding: 0.5em;
        border-top: 1px solid black;
    }
    .name {
        text-align: center;
        margin: 0;
        padding: 0;
    }
</style>
