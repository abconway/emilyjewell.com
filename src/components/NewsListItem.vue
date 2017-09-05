<template>
    <li>
        <div class='title'>
            {{ value.title }}
        </div>
        <div class='description'>
            <img :src="value.image.crop" width=120 height=100>
            <span v-html="htmlDescription"></span>
        </div>
    </li>
</template>

<script>
import marked from 'marked'

export default {
    props: [
        'value',
    ],
    data() {
        return {
            'htmlDescription': marked(this.value.description),
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
    .title {
        font-size: 1.5em;
        text-align: center;
    }
    .body {
        font-size: 1em;
    }
    .description {
        min-height: 120px;
    }
    img {
        float: left;
        border: 1px solid black;
        margin: 0.25em;
    }
</style>
