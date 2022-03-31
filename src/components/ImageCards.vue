<script>
export default {
  data() {
    let image_counter = 0;
    return {
      img_array: [
        "https://www.hola.com/imagenes/estar-bien/20200917175486/canario-caracteristicas-cuidados-mascota-gt/0-866-448/portada-canario-t.webp?filter=high",
        "https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2015/06/12/150612173542_mascota_promo_624x351_thinkstock.jpg",
        "https://static.animalear.com/b/wp-content/uploads/2018/05/turtle-2836704_1920-1-1200x800.jpg",
        "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"

      ],
      image_counter: image_counter
    };
  }
};
</script>

<template>
  <html>
  <head>
    <link rel="stylesheet" href="/static/bootstrap.min.css">
  </head>
  <body>
  <div class="card">
    <img :src="img_array[image_counter]" alt="Imagen? No se cual sea" style="width:100%;">
    <div class="container">
      <h4>
        <b>+Kota!</b>
      </h4>
    </div>
  </div>
  <br>
  <button @click="image_counter = (image_counter + 1) % img_array.length;">Más mascotas!</button>
  </body>
  </html>
</template>

<style>
.card {
  width: 40%;
  margin: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: inline-block;
}
</style>