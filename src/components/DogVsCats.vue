<template>
  <html>
  <head></head>
  <body>
  <div>
    <a v-if="disappear == 0">Los perros son mejores que los gatos!</a>
  </div>
  <button @click="disappear = (disappear + 1) % 2;">Los gatos son mejores!</button>
  </body>
  </html>
</template>

<script>
export default {
  data() {
    let disappear = 0;
    return {
      disappear: disappear
    };
  }
};
</script>

<style>
</style>