<template>
<div class="container board">
      <addCom v-on:add="addElement($event)"></addCom>
      <listCom v-on:deleteItem="deleteItem($event)"v-bind:items="items" v-bind:totalCost="totalCost"></listCom>
      <button class="sendingButtons">Send</button>
</div>
</template>


<script>
import AddPart from "./AddPart.vue";
import ListPart from "./ListPart.vue";

export default {
  components: {
    addCom: AddPart, 
    listCom: ListPart 
  },
  
  data: function() {
    return {
      items: [],
      totalCost: 0
    };
  },

  methods: {
    addElement(presentElement) {
      if (isNaN(presentElement.price)) {
        return;
      }
      this.items.push({
        product: presentElement.product,
        price: presentElement.price,
        numberOfItem: presentElement.numberOfItem
      });
      this.totalCost = this.totalCost + parseFloat(presentElement.price);
    },
    deleteItem(PresentItem) {
      this.totalCost = this.totalCost - this.items[PresentItem].price;
      this.$delete(this.items, PresentItem);
    }
  }
};
</script>


<style>
.container {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  width: 1000px;
  color: grey;
}
.sendingButtons {
  background-color: green;
  color: white;
  border-radius: 30px;
  border: solid black;
  width: 300px;
}
</style>
