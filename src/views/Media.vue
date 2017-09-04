<template>
    <div>
        <ul>
            <li v-for="item in mediaItems">
                <iframe width="550" height="330" :src="item.video_url" frameborder="0" allowfullscreen></iframe>
            </li>
        </ul>
    </div>
</template>

<script>
    import MediaItem from 'components/MediaItem.vue'

    export default {
        components: {
            mediaItem: MediaItem,
        },
        mounted() {
            this.$store.dispatch('getAllMediaItems')
        },
        computed: {
            mediaItems() {
                return this.$store.getters.allMediaItems
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    li {
        text-align: center;
        vertical-align: middle;
        margin: 0.2em;
        width: 600px;
        background-color: rgba(220,220,220,0.8);
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
    }
    iframe {
        padding: 0.1em;
    }

</style>
