<template>
  <div class="container LIST">
      <li class="row allItems" v-for="(items,numberOfItem) in items">
      <span class="col-1 itemNumber">{{numberOfItem+1}}</span>
      <span class="col-8 itemName">{{items.product}}</span>
      <span class="col-2 itemPrice">{{items.price}}$</span>
      <button class="col-1 itemDelete"  v-on:click="deleteItem(numberOfItem)">X</button>
      </li>
      <li class= "row sum">
      <span class="col-1 item">SUM:</span>
      <span class="col-8 item"></span>
      <span class="col-2 item">{{totalCost}}$</span>
      </li>
  </div>
</template>


<script>
export default {
  props: ["items", "totalCost"],

  methods: {
    deleteItem(numberOfItem) {
      this.$emit("deleteItem", numberOfItem);
    }
  }
};
</script>


<style>
.itemNumber {
  color:black;
  background-color: pink;
  border-radius: 170px;
  border: solid green;
}
.itemDelete {
  color:red;
}

.allItems{
  background-color: lightpink;
  border: solid black;
  border-radius: 10px;
  color:black;
  font-family: "Comic Sans MS", cursive, sans-serif
}


</style>
