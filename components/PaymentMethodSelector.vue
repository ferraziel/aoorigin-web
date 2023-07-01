<template>
  <div>
    <MessageBox :status="buyStatus" :message="buyMessage" />
    <div v-if="$auth.loggedIn && !isPaymentGatewayLoaded" class="payment-options">
      <div class="payment-container">
        <h3 class="payment-heading">Elije método de pago:</h3>

        <div class="payment-option">
          <button v-if="!isPaymentGatewayLoaded" @click="submitOrder('MercadoPago')" class="payment-button">
            <img src="@/assets/img/mao/mercadopago-logo.png" class="payment-logo" />
            <span class="payment-label">MercadoPago (Solo Argentina 🇦🇷)</span>
          </button>
        </div>

        <div class="payment-option">
          <button v-if="!isPaymentGatewayLoaded" @click="submitOrder('Stripe')" class="payment-button">
            <img src="@/assets/img/mao/stripe-logo.png" class="payment-logo" />
            <span class="payment-label">Stripe (Internacional 🌏)</span>
          </button>
        </div>

      </div>
    </div>

    <div v-if="!$auth.loggedIn" class="text-center">
      <h1 class="login-message">Debes iniciar sesión para poder efectuar el pago.</h1>
    </div>
  </div>
</template>

<style>
.payment-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.payment-option {
  text-align: center;
  flex: 1;
}

.payment-button:hover {
  background-color: #4e88de;
}

.text-center {
  text-align: center;
  margin-top: 24px;
}

.login-message {
  color: red;
  margin-top: 24px;
}

.payment-heading {
  display: block;
  margin-bottom: 10px; /* Adjust the spacing as needed */
}

.payment-button {
  display: flex;
  align-items: left;
  justify-content: left;
  width: 500px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.payment-logo {
  width: 90px; /* Adjust the logo width as needed */
  height: 100px; /* Adjust the logo height as needed */
  margin-right: 10px; /* Adjust the spacing between the logo and label */
}

.payment-label {
  font-size: 20px; /* Adjust the label font size as needed */
}


</style>


<script>
import abiAolb from "@/assets/contracts/0xEA17E48C988D64e92d64550C787B17281F61828e.json";
import abiTheter from "@/assets/contracts/0xEA17E48C988D64e92d64550C787B17281F61828e.json";
import Web3 from "web3";

export default {
  props: ["item", "saleType", "selectedUserId", "qtyItems", "user"],
  head() {
    return {
      script: [
        {
          src: "https://sdk.mercadopago.com/js/v2",
          async: true,
        },
      ],
    };
  },
  data() {
    return {
      buyMessage: "",
      buyStatus: null,
      tokens: [
        {
          name: "AOLB",
          address: process.env.TOKEN_AOLB_CONTRACT_ADDRESS,
          abi: abiAolb,
          image: "https://argentumonline.org/aoclasico/assets/images/ao-libre-aolb-logo.png",
        },
        {
          name: "Theter",
          address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
          abi: abiTheter,
          image: "https://spng.pngfind.com/pngs/s/142-1429336_tether-and-the-role-of-stable-coins-tether.png",
        },
      ],
      paymentAddress: process.env.PAYMENT_ADDRESS,
      orderConfirmed: false,
      isPaymentGatewayLoaded: false
    };
  },
  methods: {
    async submitOrder(paymentGateway) {
      if (confirm(`¿Estas seguro que quieres efectuar la comprar con ${paymentGateway}?`)) {
        this.isPaymentGatewayLoaded = true;

        this.buyStatus = "PENDING";
        this.buyMessage = "Generando orden de compra con " + paymentGateway;

        let endpoint = "";
        let payload = {
          paymentGateway: paymentGateway
        };

        if (this.saleType === "AO20POINTS") {
          endpoint = "/market/buyAO20PointsMao";
          payload.tierName = this.item.name

        } else if (this.saleType === "USER") {
          endpoint = "/market/buyUserMao";
          payload.userName = this.user.name

        } else if (this.saleType === "ITEM") {
          if (this.qtyItems <= 0 || this.qtyItems > 10000) {
            this.buyMessage = "Numero no valido, debe ser mayor a 0 y menor a 10.000";
            this.buyStatus = "ERROR";
            return;
          }

          endpoint = "/market/buyItemMao";
          payload.itemId = this.item.item_id
          payload.characterId = this.selectedUserId
          payload.itemQuantity = parseInt(this.qtyItems)
        }

        switch (paymentGateway) {
          case "MercadoPago":
            this.buyWithMercadoPagoRequest(endpoint, payload);
            break;

          case "Stripe":
            this.buyWithStripeRequest(endpoint, payload);
            break;

          case "Ethereum":
            const transactionHash = await ethereum.request({
              method: "eth_sendTransaction",
              params: [
                {
                  to: this.paymentAddress,
                  value: this.item.price_in_tokens.toString(),
                  from: accounts[0],
                },
              ],
            });

            payload.txHash = transactionHash

            this.buyWithEthereumRequest(endpoint, payload);
            break;
        }
      }
    },

    async buyWithERC20Token(tokenName) {
      if (confirm(`Estas seguro que quieres efectuar la compra con ${tokenName}?.`)) {
        await ethereum.enable();

        console.log(`Comprando con ${tokenName} Token.`);
        this.buyStatus = "PENDING";
        this.buyMessage = `Comprando con ${tokenName} token. Esperando aprobar transaccion.`;

        var web3 = new Web3(window.ethereum);
        const token = this.tokens.find((x) => x.name === tokenName);

        const tokenContract = new web3.eth.Contract(token.abi, token.address);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const priceInWei = Web3.utils.toWei(this.item.price_in_tokens.toString(), "ether");

        const estimatedGas = await tokenContract.methods.transfer(this.paymentAddress, priceInWei).estimateGas({
          from: accounts[0],
        });

        console.log("Estimated gas: " + estimatedGas);

        tokenContract.methods
          .transfer(this.paymentAddress, priceInWei)
          .send({
            from: accounts[0],
            gas: estimatedGas,
          })
          .then((data) => {
            createPurchaseTransaction(data.transactionHash)
          })
          .catch((error) => {
            this.buyStatus = "ERROR";
            this.buyMessage = error.message;
          });
      }
    },

    async buyWithEthereum() {
      if (confirm("Estas seguro que quieres efectuar la compra con Ethereum?.")) {
        await ethereum.enable();

        const accounts = await ethereum.request({ method: "eth_accounts" });

        this.buyStatus = "PENDING";
        this.buyMessage = "Esperando aprobar transaccion. Esto puede tardar varios minutos dependiendo la congestion de la red Ethereum";

        try {
          const transactionHash = await ethereum.request({
            method: "eth_sendTransaction",
            params: [
              {
                to: this.paymentAddress,
                value: this.item.price_in_tokens.toString(),
                from: accounts[0],
              },
            ],
          });

          createPurchaseTransaction(transactionHash)

        } catch (error) {
          console.error(error);
          this.buyStatus = "ERROR";
          this.buyMessage = error;
        }
      }
    },

    async buyWithMercadoPagoRequest(endpoint, payload) {
      this.$axios
        .$post(endpoint, payload)
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
            autoOpen: true,
            theme: {
              elementsColor: "#8da811",
              headerColor: "#402a87",
            },
          });

          this.buyStatus = "OK";
          this.buyMessage = "Se genero una preferencia de pago en MercadoPago, por favor termine el pago.";
        })
        .catch((error) => {
          this.buyStatus = "ERROR";
          this.buyMessage = error.response.data.message;
        });
    },

    async buyWithStripeRequest(endpoint, payload) {
      this.$axios
        .$post(endpoint, payload)
        .then((data) => {
          this.buyStatus = "OK";
          this.buyMessage = "Se creo una sesion de pago con Stripe, por favor termine el pago.";

          window.location.href = data.stripeSessionUrl;
        })
        .catch((error) => {
          this.buyStatus = "ERROR";
          this.buyMessage = error.message;
        });
    },

    async buyWithEthereumRequest(endpoint, payload) {
      this.$axios
        .$post(endpoint, payload)
        .then((response) => {
          this.buyStatus = "OK";
          this.buyMessage = "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se concrete la operacion.";
          this.orderConfirmed = true;

          if (this.usersWithFreeSlots) {
            this.usersWithFreeSlots.length = 0;
          }
        })
        .catch((error) => {
          this.buyStatus = "ERROR";
          this.buyMessage = error.response.data.message;
        });
    }
  },
};
</script>

<style>
</style>
