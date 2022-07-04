<template>
  <div class="container">
    <!-- <pre class="bg-black">{{ user }}</pre> -->

    <h1 class="mb-12 text-5xl text-primary gr-gold">{{ user.name }}</h1>
    <h4>Hacer el pago por el personaje y cerrar la transaccion.</h4>
    <h3 class="gr-gold">Nivel: {{ user.level }}</h3>
    <h3 class="gr-gold">Precio: {{ user.price_in_mao.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS</h3>

    <MessageBox :status="buyUserStatus" :message="buyUserMessage" />

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
    let buyUserMessage = "";
    const user = await $axios.$get(`market/getUserFromTransactionByTxSignature/${params.txSignature}`)
    .catch(err => {
      console.error(err)
      buyUserMessage = err.message;
    });

return {
      user,
      buyUserMessage,
      buyUserStatus: "",
      isMercadoPagoLoaded: false,
    }
  },
  methods: {
    async buyUserWithMercadoPago() {
        this.isMercadoPagoLoaded = true;
        console.log("Comprando con MercadoPago.");
        this.buyUserStatus = "PENDING";
        this.buyUserMessage = "Generando orden de compra con MercadoPago";

        this.$axios.$get(`/market/createMercadoPagoPreferenceForUserTransaction/${this.$route.params.txSignature}`)
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
          this.buyUserMessage = error.message;
        });
    },
  },
  head() {
    return {
      title: this.user ? `${this.user.name} ` : "Personaje no encontrado",
      script: [
        {
          src: "https://sdk.mercadopago.com/js/v2",
          async: true,
        },
      ]
    };
  },
};
</script>

<style></style>
