<template>
    <div class="container">
        <div class="resume-container">
            <embed width="830px" height="1080px" :src="resume.pdf"/>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        mounted() {
            this.$store.dispatch('getResume')
        },
        computed: {
            resume() {
                return this.$store.getters.resume[0]
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 880px;
        background-color: rgba(220,220,220,0.8);
        border-radius: 15px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
    }
    .resume-container {
        text-align: center;
        margin: 0 auto;
    }
</style>
