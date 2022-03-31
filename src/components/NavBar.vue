<template>
  <nav>
    <div class="menu-item">
      <a href="https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg">Perros</a>
    </div>
    <div class="menu-item">
      <a href="https://www.nationalgeographic.com.es/medio/2020/10/31/erinaceus-europaeus_3c6c90ab.jpg">Otras Cosas</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      services: [
        {
          title: "Perros",
          link: "#"
        },
        {
          title: "Una sorpresa animal",
          link: "#"
        }
      ]
    };
  }
};
</script>

<style>
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