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
      user: await $axios.$post(`users/getUserOnSale/${params.uid}`),
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

        // await ethereum.enable();

        // const accounts = await ethereum.request({ method: 'eth_accounts' });

        // this.removeUserFromMaoStatus = "PENDING";
        // this.removeUserFromMaoMessage = "Esperando aprobar transaccion. Esto puede tardar varios minutos dependiendo la congestion de la red ethereum";

        // try {
        //   const transactionHash = await ethereum.request({
        //     method: 'eth_sendTransaction',
        //     params: [
        //       {
        //         to: '0x94f5bA56B06a6097f25D6b658f7abE2f78880B79',
        //         value: "10000000000000",
        //         from: accounts[0],
        //       },
        //     ],
        //   });

        //   // Handle the result
        //   console.log(transactionHash);

        //   this.$axios.$post(`/users/buyUserFromMao/${this.user.id}`, {
        //     txHash: "asds",
        //   })
        //   .then((data) => {
        //     this.removeUserFromMaoStatus = "OK";
        //     this.removeUserFromMaoMessage = "Tu peticion para eliminar el personaje de MercadoAO llego con exito, espera a que se confirme la transaccion.";
        //   })
        //   .catch((error) => {
        //     this.user.is_locked_in_mao = true;
        //     this.removeUserFromMaoStatus = "ERROR";
        //     this.removeUserFromMaoMessage = error.response.data.message;
        //   });

        // } catch (error) {
        //   console.error(error);
        //   this.user.is_locked_in_mao = true;
        //   this.removeUserFromMaoStatus = "ERROR";
        //   this.removeUserFromMaoMessage = error;
        // }



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
