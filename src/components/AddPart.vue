<template>
  <div class="row AddingRows">
    <input v-model="product" class="col-5 AddingColumns"placeholder="ITEM"></input>
    <input v-model="price" class="col-5 AddingColumns" placeholder="PRICE"></input>
    <button class="col-2 AddingColumns" id="addButton" type="submit"  v-on:click="add" >ADD</button>

  </div>
  </body>

</template>


<script>
export default {
  data: function() {
    return {
      product: "",
      price: "",
      numberOfItem: 0
    };
  },

  methods: {
    add() {
      this.$emit("add", {
        product: this.product,
        price: this.price,
        numberOfItem: this.numberOfItem
      });
    }
  }
};
</script>


<style scoped>
#all {
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
}

.AddingColumns {
  float: left;
  color: black;
  border: 3px solid black;
  border-radius: 25px;
  background-color: white;
  color: black;
}

#addButton {
  background-color: green;
  color: white;
  cursor: pointer;
}
</style>
