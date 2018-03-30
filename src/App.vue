<template>

  <body>

    <h1>My list</h1>
    <board></board>
  </body>
</template>

<script>
import MainBoard from "./components/MainBoard.vue";

export default {
  components: {
    board: MainBoard
  }
};
</script>

<style>
body {
  background-color: white;
  text-align: center;
  font-size: 40px;
  color: blue;
}

</style>
