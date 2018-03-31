<template>
<div class="container board">
  <addCom @add="addElement($event)"></addCom>
  <listCom @deleteItem="deleteItem($event)":items="items" :sum="sum"></listCom>
  <button class="sending-buttons">Send</button>
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

  data() {
    return {
      items: []
    };
  },
  computed: {
    sum: function() {
      return this.items.reduce(
        (cost, items) => cost + parseFloat(items.price),
        0
      );
    }
  },

  methods: {
    addElement(presentElement) {
      if (isNaN(presentElement.price) || presentElement.price == "") {
        return;
      }
      this.items.push({
        product: presentElement.product,
        price: presentElement.price,
        numberOfItem: presentElement.numberOfItem
      });
    },
    deleteItem(presentItem) {
      this.$delete(this.items, presentItem);
    }
  }
};
</script>


<style>
.container {
  position: relative;
  width: 1000px;
  color: grey;
}
.sending-buttons {
  background-color: green;
  color: white;
  border-radius: 30px;
  border: solid black;
  width: 300px;
}
</style>
