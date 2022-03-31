<template>
  <html>
  <div class="text-center" style="background-color:green;">
    <br>
    <h1 style="color:white; text-align:center; margin:15px;">+Kotas</h1>
    <br>
  </div>
  <header>
    <NavBar/>
  </header>
  <body>
  <ImageCards/>
  <br>
  <CatHateButton/>
  <br>
  <TwoWayBinding/>
  <br>
  <CatsAreWorseSlider/>
  <br>
  <ExoticPets/>
  <p style="color:white; text-align:center; margin:15px;">Copyright Jaime Hisao Yesaki A01720044</p>
  </body>
  </html>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ExoticPets from "./components/BreedsB.vue";
import CatHateButton from "./components/DogVsCats.vue";
import ImageCards from "./components/ImageCards.vue";
import TwoWayBinding from "./components/TwoWayBindingImplementation.vue";
import CatsAreWorseSlider from "./components/DogVsCatSlider.vue";
export default {
  name: "App",
  components: {
    NavBar,
    ImageCards,
    TwoWayBinding,
    CatsAreWorseSlider,
    ExoticPets,
    CatHateButton
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
</style>