<template>
  <li>
    <div class='title'>
      {{ value.title }}
    </div>
    <div class='description'>
      <span v-html="htmlDescription"></span>
    </div>
    <div class='created'>
      created on {{ value.created }}
    </div>
    <div class='modified'>
      modified on {{ value.modified }}
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
      'htmlDescription': marked(this.value.description)
    }
  },
}
</script>

<style scoped>
  .title {
    font-size: 1.5em;
  }
  .body {
    font-size: 1em;
  }
  .created {
    font-size: 0.5em;
  }
  .modified {
    font-size: 0.5em;
  }
</style>