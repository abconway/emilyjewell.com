<template>
    <li>
        <div class='title'>
            {{ value.title }}
        </div>
        <div class='description'>
            <span v-html="htmlDescription"></span>
        </div>
        <div class='footer'>
            <div class='created'>
                Created: <span v-html="dateCreated"></span>
            </div>
            <div class='modified'>
                Last edited: <span v-html="dateModified"></span>
            </div>
        </div>
    </li>
</template>

<script>
import marked from 'marked'
import moment from 'moment'

export default {
    props: [
        'value',
    ],
    data() {
        return {
            'htmlDescription': marked(this.value.description),
            'dateCreated': moment(this.value.created).format('YYYY-MM-DD HH:MM'),
            'dateModified': moment(this.value.modified).format('YYYY-MM-DD HH:MM')
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
