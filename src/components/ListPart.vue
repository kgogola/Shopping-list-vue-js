<template>
  <div class="container list">
    <li class="row all-items" v-for='(items,numberOfItem) in items'>
      <span class="col-1 item-number">{{numberOfItem+1}}</span>
      <span class="col-8 item-name">{{items.product}}</span>
      <span class="col-2 item-price">{{items.price}}$</span>
      <button class="col-1 item-delete"  @click="deleteItem(numberOfItem)">X</button>
    </li>
    <li class= "row sum">
      <span class="col-1 item">SUM:</span>
      <span class="col-8 item"></span>
      <span class="col-2 item">{{sum}}$</span>
    </li>
  </div>
</template>


<script>
export default {
  props: ["items", "sum"],

  methods: {
    deleteItem(numberOfItem) {
      this.$emit("deleteItem", numberOfItem);
    }
  }
};
</script>


<style>
.item-number {
  color: black;
  background-color: pink;
  border-radius: 170px;
  border: solid green;
}
.item-delete {
  color: red;
}

.all-items {
  background-color: lightpink;
  border: solid black;
  border-radius: 10px;
  color: black;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
