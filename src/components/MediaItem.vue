<template>
    <li>
        Sup
    </li>
</template>

<script>
export default {
    props: [
        'value',
    ],
    data() {
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
    .footer {
        width: 100%;
        height: 0.5em;
        margin: 0.25em;
    }
    .created {
        font-size: 0.5em;
        float: left;
        margin-left: 1em;
    }
    .modified {
        font-size: 0.5em;
        float: right;
        margin-right: 1em;
    }
</style>
