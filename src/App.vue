<template>
  <Layout />
</template>

<script>
  import Layout from "./layouts/Layout.vue";

  export default {
    name: "App",
    components: {
      Layout
    },
  };
</script>

<style>
  body, 
  input, 
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 10px 25px;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
