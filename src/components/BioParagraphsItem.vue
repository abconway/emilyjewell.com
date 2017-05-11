<template>
    <li>
        <div class='description'>
            <span v-html="htmlDescription"></span>
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
    .description {
        font-size: 1em;
    }
</style>
