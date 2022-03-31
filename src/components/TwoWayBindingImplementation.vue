<template>
  <html>
  <head></head>
  <body>
  <div>
    <p>Cuál es tu mascota de caricatura favorita?</p>
    <br>
    <p>
      <input v-model="message" placeholder="name">
    </p>
    <br>
    <p>Tu mascota de caricatura favorita es: {{ message }}</p>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  data() {
    return {
      message: "Perry el hornitorinco!"
    };
  }
};
</script>

<style>
</style>