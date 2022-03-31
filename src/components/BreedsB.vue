<template>
  <html>
  <head></head>
  <body>
  <div>
    <h2>My favorite dog breeds:</h2>
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
      { breed: 'schnauzer' },
      { breed: 'golden' },
      { breed: 'french bulldog' },
      { breed: 'husky' },
      { breed: 'dalmatian' }
    ]
    return {
      list: list
    };
  }
};
</script>

<style>
</style>