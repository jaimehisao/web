<template>
  <html>
  <head></head>
  <body>
  <h2 v-if="dog_slider == cat_slider"> Te gustan los perros y gatos por igual</h2>
  <h2 v-else-if="dog_slider > cat_slider"> Definitivamente te gustan más los perros.</h2>
  <h2 v-else>Tristemente te gustan los gatos</h2>
  <p>Tendrías un perro?</p>
  <input type="range" min="0" max="100" style="width:300px;" id="dog_slider" v-model="dog_slider">
  <br>
  <p>Tendrías un gato?</p>
  <input type="range" min="0" max="100" style="width:300px;" id="cat_slider" v-model="cat_slider">
  </body>
  </html>
</template>

<script>
export default {
  data() {
    let dog_slider = 50;
    let car_slider = 50;
    return {
      dog_slider: dog_slider,
      cat_slider: car_slider
    };
  }
};
</script>
<style>
</style>