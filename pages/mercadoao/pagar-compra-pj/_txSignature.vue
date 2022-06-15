<template>
  <div class="container">
    <h1 class="mb-12 text-5xl text-primary">Hacer el pago por el personaje y cerrar la transaccion.</h1>

    <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
      <img :src="user.canvasImage" class="" />
    </div>
    <h4 class="text-gr gr-gold">{{ user.name }}</h4>
    <span class="gr-gold">Nivel: {{ user.level }}</span>

    <MessageBox :status="buyItemStatus" :message="buyItemMessage" />

    <table style="margin-left: auto; margin-right: auto">
      <h3>Elije metodo de pago:</h3>
      <tr>
        <th v-if="!isMercadoPagoLoaded" @click="buyUserWithMercadoPago()" style="color: yellow">MERCADOPAGO</th>
      </tr>
      <button class="cho-container"></button>
    </table>

  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      isMercadoPagoLoaded: false,
      user: await $axios.$get(`market/getItemOnSaleById/${params.txSignature}`),
    }
  },
  methods: {
    async buyUserWithMercadoPago() {
        this.isMercadoPagoLoaded = true;
        console.log("Comprando con MercadoPago.");
        this.buyUserStatus = "PENDING";
        this.buyUserMessage = "Generando orden de compra con MercadoPago";

        this.$axios.$get(`/market/createMercadoPagoPreferenceForUserTransaction/${params.txSignature}`)
        .then((preferenceIdMercadoPago) => {

          // Agrega credenciales de SDK
          const mp = new MercadoPago(process.env.MERCADOPAGO_PUBLIC_KEY, {
            locale: "es-AR",
          });

          // Inicializa el checkout
          mp.checkout({
            preference: {
              id: preferenceIdMercadoPago,
            },
            render: {
              container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
              label: "Pagar con MercadoPago", // Cambia el texto del botón de pago (opcional)
            },
          });

          this.buyUserStatus = "OK";
          this.buyUserMessage = "Se genero una preferencia de pago en MercadoPago, por favor haga el pago clickeando en el boton Pagar con MercadoPago.";

        })
        .catch((error) => {
          this.buyUserStatus = "ERROR";
          this.buyUserMessage = error.response.data.message;
        });
    },
  }

};
</script>

<style></style>
