<template>
  <html>
  <head></head>
  <body>
  <div>
    <h2>Mis mascotas exoticas favoritas:</h2>
    <ul id="example-1">
      <li v-for="item in list" :key="item.breed">
        {{ item.breed }}
      </li>
    </ul>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  data() {
    let list = [
      { breed: 'erizos' },
      { breed: 'hurones' },
      { breed: 'pajaros' },
      { breed: 'chihuahuas pelo largo' },
      { breed: 'tortugas' }
    ]
    return {
      list: list
    };
  }
};
</script>

<style>
</style>