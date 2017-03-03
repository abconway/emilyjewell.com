<template>
  <li>
    <div class='title'>
      {{ value.title }}
    </div>
    <div class='description'>
      {{ value.description }}
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
export default {
  props: [
    'value',
  ]
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