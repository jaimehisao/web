<template>
  <nav>
    <div class="menu-item">
      <a href="https://unsplash.com/s/photos/dog">Dogs</a>
    </div>
    <div class="menu-item">
      <a href="https://unsplash.com/images/animals/cat">Cats</a>
    </div>
    <DropDown title="Services" :items="services"/>
  </nav>
</template>

<script>
import DropDown from "./DropDown";
export default {
  name: "NavBar",
  components: { DropDown },
  data() {
    return {
      services: [
        {
          title: "Dog pictures",
          link: "#"
        },
        {
          title: "Cat names",
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
  background-color: #61b0b8;
  border-bottom-color: #61b0b8;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>