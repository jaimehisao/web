<template>
  <html>
  <div class="text-center" style="background-color:green;">
    <br>
    <h1 style="color:white; text-align:center; margin:15px;">+Kotas</h1>
    <br>
  </div>
  <header>
    <nav>
      <div class="menu-item">
        <a href="https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg">Perros</a>
      </div>
      <div class="menu-item">
        <a href="https://www.nationalgeographic.com.es/medio/2020/10/31/erinaceus-europaeus_3c6c90ab.jpg">Otras Cosas</a>
      </div>
    </nav>
  </header>
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
  <br>
  <div>
    <a v-if="disappear == 0">Los perros son mejores que los gatos!</a>
  </div>
  <button @click="disappear = (disappear + 1) % 2;">Los gatos son mejores!</button>
  <br>
  <div>
    <p>Cuál es tu mascota de caricatura favorita?</p>
    <br>
    <p>
      <input v-model="message" placeholder="name">
    </p>
    <br>
    <p>Tu mascota de caricatura favorita es: {{ message }}</p>
  </div>
  <br>
  <div>
    <h2 v-if="dog_slider == cat_slider"> Te gustan los perros y gatos por igual</h2>
    <h2 v-else-if="dog_slider > cat_slider"> Definitivamente te gustan más los perros.</h2>
    <h2 v-else>Tristemente te gustan los gatos</h2>
    <p>Tendrías un perro?</p>
    <input class="slider" type="range" min="0" max="99" style="width:500px;" id="dog_slider" v-model="dog_slider">
    <br>
    <p>Tendrías un gato?</p>
    <input type="range" class="slider" min="0" max="100" style="width:500px;" id="cat_slider" v-model="cat_slider">
  </div>
  <br>
  <div>
    <h2>Mis mascotas exoticas favoritas:</h2>
    <ul id="example-1">
      <li v-for="item in list" :key="item.breed">
        {{ item.breed }}
      </li>
    </ul>
  </div>
  <p style="color:white; text-align:center; margin:15px;">Copyright Jaime Hisao Yesaki A01720044</p>
  </body>
  </html>
</template>

<script>
export default {
  name: "App",
  components: {

  },
  data() {
    let dog_slider = 50;
    let car_slider = 50;
    let image_counter = 0;
    let hidden = 0;
    let list = [
      { breed: 'erizos' },
      { breed: 'hurones' },
      { breed: 'pajaros' },
      { breed: 'chihuahuas pelo largo' },
      { breed: 'tortugas' }
    ]
    const img_array = [ "https://www.hola.com/imagenes/estar-bien/20200917175486/canario-caracteristicas-cuidados-mascota-gt/0-866-448/portada-canario-t.webp?filter=high",
      "https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2015/06/12/150612173542_mascota_promo_624x351_thinkstock.jpg",
      "https://static.animalear.com/b/wp-content/uploads/2018/05/turtle-2836704_1920-1-1200x800.jpg",
      "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg"

    ]
    return {
      dog_slider: dog_slider,
      cat_slider: car_slider,
      list: list,
      image_counter: image_counter,
      img_array : img_array,
      disappear: hidden,
      message: "Perry el hornitorinco!"
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
  text-align: center;
}

header {
  width: 100vw;
  background-color: #16558f;
  padding: 15px;
}

jumbotron .text-center {
  text-align: center;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.card {
  width: 40%;
  margin: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: inline-block;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #ffffff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: red;
  border-bottom-color: #61b0b8;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>