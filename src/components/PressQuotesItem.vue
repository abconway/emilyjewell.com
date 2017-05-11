<template>
    <li>
        <div class='body'>
            <a :href="value.url">"{{ value.body }}"</a>
            <p>- {{ value. author }}, {{ value.publication }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: [
        'value',
    ],
}
</script>

<style scoped>
    li {
        margin: 0.25em;
    }
    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
