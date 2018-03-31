<template>
  <div class="row adding-rows">
    <input v-model="product" class="col-5 adding-columns"placeholder="ITEM"></input>
    <input v-model="price" class="col-5 adding-columns" placeholder="PRICE"></input>
    <button class="col-2 adding-button"  type="submit"  @click="add" >ADD</button>
  </div>
 
</template>


<script>
export default {
  data() {
    return {
      product: "",
      price: "",
      numberOfItem: 0
    };
  },

  methods: {
    add() {
      this.$emit("add", this.$data);
    }
  }
};
</script>


<style scoped>
.adding-columns {
  float: left;
  color: black;
  border: 3px solid black;
  border-radius: 25px;
  background-color: white;
  color: black;
  overflow: hidden;
}
.adding-button {
  background-color: green;
  color: white;
  cursor: pointer;
  border-radius: 50px;
  overflow: hidden;
}
</style>
