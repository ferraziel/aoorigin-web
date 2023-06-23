<template>
  <div class="container">
    <br>
    <br>
    <div v-if="user" class="text-center mb-12">
      <h1 class="section-title text-3xl font-bold">{{ user.name }}</h1>
      <UserAndItemsRenderer :user="user" />

      <div v-if="user.mao_history.length > 0">
        <hr>
        <h2 class="section-title text-3xl font-bold">Historial de venta</h2>
        <ul>
          <li v-for="transaction in user.mao_history" :key="transaction.updated_at">
            {{ $dayjs(transaction.updated_at).format("DD [de] MMMM [de] YYYY") }} - ${{ transaction.price.toLocaleString('es-AR') }}
          </li>
        </ul>
      </div>

      <br>
      <hr>
      <br>

      <button @click="processPayment('MercadoPago')"
              type="submit"
              v-if="!isSubmited"
              class="btn btn-silver self-start py-2 px-4 rounded-full hover:bg-gray-200"
      >
        Comprar Personaje Mercado Pago
      </button>

      <button @click="processPayment('Ethereum')"
              type="submit"
              v-if="!isSubmited"
              class="btn btn-silver self-start py-2 px-4 rounded-full hover:bg-gray-200"
      >
        Comprar Personaje Ethereum
      </button>

      <NuxtLink v-else to="/mercadoao" class="btn btn-silver self-start py-2 px-4 rounded-full hover:bg-gray-200">Volver al mercado</NuxtLink>
      <MessageBox :status="buyUserStatus" :message="buyUserMessage" />

    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl font-bold">El personaje no existe o no esta a la venta o el vendedor no linkeo su cuenta de MercadoPago para recibir el pago.</p>
    </section>
  </div>
</template>


<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      user: await $axios.$post(`users/getUserOnSaleByName/${params.uname}`).catch(err => console.error(err)),
      buyUserMessage: "",
      buyUserStatus: null,
      isSubmited: false,
    };
  },

  async mounted() {
    if (!ethereum) {
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  },

  methods: {
    async processPayment(paymentGateway) {
      switch (paymentGateway) {
        case 'MercadoPago':
          buyUserMercadoPago();
          break;
        case 'Ethereum':
          buyUserEthereum();
          break;
        case 'Stripe':
          break;
        default:
          // Default case
          console.error('Invalid payment gateway');
          break;
      }
    },

    async buyUserEthereum() {
      if (confirm("Estas seguro que quieres comprar este personaje?.")) {
        await ethereum.enable();

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        this.buyUserStatus = "PENDING";
        this.buyUserMessage = "Esperando aprobar transaccion. Esto puede tardar varios minutos dependiendo la congestion de la red ethereum";

        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your smart contract address
        const contractABI = [...]; // Replace with your smart contract ABI

        const web3 = new Web3(ethereum);
        const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

        // Call the transfer function of your smart contract
        contractInstance.methods.transfer(recipient, amount).send({
          from: accounts[0]
        })
        .on('transactionHash', (hash) => {
          // Transaction hash is available here
          this.buyUserStatus = "PENDING";
          this.buyUserMessage = "Transaccion enviada. Esperando confirmacion en la red ethereum...";

          //TODO:
          // createErc20TokenTransaction()
        })
        .on('confirmation', (confirmationNumber, receipt) => {
          // Transaction confirmed
          if (confirmationNumber === 1) {
            this.buyUserStatus = "SUCCESS";
            this.buyUserMessage = "Transaccion exitosa. El personaje ha sido comprado.";
          }
        })
        .on('error', (error) => {
          // Error occurred during transaction
          this.buyUserStatus = "ERROR";
          this.buyUserMessage = "Error al procesar la transaccion.";
        });
      }
    },

    /**
     * Executes the process of buying a user from Mao through MercadoPago.
     * Asks for confirmation from the user before processing the payment.
     * Handles errors and displays messages according to the results.
     *
     * @return {void}
     */
    async buyUserMercadoPago() {
      if (confirm("Estas seguro que quieres comprar este personaje?.")) {
        this.isSubmited = true;
        this.buyUserStatus = "PENDING";
        this.buyUserMessage = "Generando una preferencia de pago de MercadoPago por favor aguarde.";

        try {
          this.$axios.$post(`/market/buyUserFromMao`, {
            userName: this.user.name,
          })
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
              autoOpen: true,
              theme: {
                  elementsColor: '#8da811',
                  headerColor: '#402a87'
              }
            });

            this.buyUserStatus = "OK";
            this.buyUserMessage = "Se genero una preferencia de pago en MercadoPago, por favor haga el pago clickeando en el boton Pagar con MercadoPago.";

          })
          .catch((error) => {
            this.buyUserStatus = "ERROR";
            this.isSubmited = false;

            if (error.response) {
              console.error(error.response);
              // Request made and server responded
              this.buyUserMessage = error.response.data.message;
            } else if (error.request) {
              // The request was made but no response was received
              console.error(error.request);
              this.buyUserMessage = error.request;

            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error', error.message);
              this.buyUserMessage = error.message;
            }

          });

        } catch (error) {
          console.error(error);
          this.buyUserStatus = "ERROR";
          this.buyUserMessage = error.message;
          this.isSubmited = false;
        }

      }
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
  }
};
</script>

<style>
</style>
