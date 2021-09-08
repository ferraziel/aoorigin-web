<template>
  <div class="container">
    <PagePadding />

    <div v-if="user" lass="text-center mb-12">

      <h1 class="section-title">{{ user.name }}</h1>
      <UserAndItemsRenderer :user="user" />

      <button @click="buyUser()"
              type="submit"
              class="btn btn-silver self-start"
      >
        Comprar Personaje
      </button>
      <MessageBox :status="buyUserStatus" :message="buyUserMessage" />
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El personaje no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      user: await $axios.$post(`users/getUserOnSell/${params.uid}`),
      buyUserMessage: "",
      buyUserStatus: null,
    };
  },

  async mounted() {
    if (!ethereum) {
      alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  },

  methods: {

    async buyUser() {
      if (confirm("Estas seguro que quieres comprar este personaje?.")) {
        this.buyUserStatus = "ERROR";
        this.buyUserMessage = "No implementado, paciencia ya vas a poder invertir dinerito";
      }
    },

  },

  head() {
    return {
      title: this.user ? `${this.user.name} - Personaje` : "Personaje no encontrado",
    };
  },
};
</script>

<style></style>
