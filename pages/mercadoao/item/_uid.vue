<template>
  <div class="container">
    <PagePadding />

    <div v-if="item" lass="text-center mb-12">

      <h1 class="section-title">{{ item.Data.NAME }}</h1>

      <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
        <img :src="item.Data.canvasImage" class="" />
      </div>

      <ul>
        <li style="color: cyan">{{ item.Data.TEXTO }}</li>
      </ul>

      <button @click="buyItem()"
              type="submit"
              class="btn btn-silver self-start"
      >
        Comprar Item
      </button>
      <MessageBox :status="buyItemStatus" :message="buyItemMessage" />
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El item no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      item: await $axios.$get(`market/getItemOnSaleById/${params.uid}`),
      buyItemMessage: "",
      buyItemStatus: null,
    };
  },

  async mounted() {
    if (!ethereum) {
      alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  },

  methods: {

    async buyItem() {
      if (confirm("Estas seguro que quieres comprar este item?.")) {

        this.buyItemStatus = "ERROR";
        this.buyItemMessage = "No implementado, paciencia ya vas a poder invertir dinerito";
      }
    },

  },

  head() {
    return {
      title: this.item ? `${this.item.Data.NAME} - Item` : "Item no encontrado",
    };
  },
};
</script>

<style></style>
