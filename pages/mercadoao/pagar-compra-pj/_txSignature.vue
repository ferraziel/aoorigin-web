<template>
  <client-only>
    <div class="container">
      <!-- <pre class="bg-black">{{ user }}</pre> -->
      <div v-if="user">
        <h1 class="mb-12 text-5xl text-primary gr-gold">{{ user.name }}</h1>
        <span>Hacer el pago por el personaje y cerrar la transaccion.</span>
        <h3 class="gr-gold">Nivel: {{ user.level }}</h3>
        <h3 class="gr-gold">Precio: {{ user.price_in_mao.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS</h3>

        <h3>Elije metodo de pago:</h3>
        <button v-if="!isMercadoPagoLoaded" @click="buyUserWithMercadoPago()" style="color: yellow">MERCADOPAGO</button>
        <button class="cho-container"></button>
      </div>

      <MessageBox :status="buyUserStatus" :message="buyUserMessage" />
    </div>
  </client-only>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    let buyUserMessage = "";
    let buyUserStatus = "";

    const user = await $axios.$get(`market/getUserFromTransactionByTxSignature/${params.txSignature}`)
    .catch(err => {
      console.error("asyncData", err)
      buyUserStatus = "ERROR";
      buyUserMessage = "Hubo un error...";

      if (err.message.includes("401")) {
        buyUserMessage = "Tenes que estar logeado para poder hacer la compra.."
      }
    });

    return {
      user,
      buyUserMessage,
      buyUserStatus,
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
            // autoOpen: true,
            theme: {
                elementsColor: '#8da811',
                headerColor: '#402a87'
            }
          });

          this.buyUserStatus = "OK";
          this.buyUserMessage = "Se genero una preferencia de pago en MercadoPago, por favor haga el pago clickeando en el boton Pagar con MercadoPago.";

        })
        .catch((error) => {
          console.log("buyUserWithMercadoPago", error)
          this.buyUserStatus = "ERROR";
          this.buyUserMessage = error.response.data.message;
        });
    },
  },
  head() {
    return {
      title: this.user && this.user.name ? `${this.user.name} ` : "Personaje no encontrado",
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
