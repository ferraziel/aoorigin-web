<template>
  <div>
    <MessageBox :status="buyStatus" :message="buyMessage" />
    <div v-if="$auth.loggedIn && !isPaymentGatewayLoaded">

      <h3>Elije metodo de pago:</h3>
      <tr>
        <td>
          <button v-if="!isPaymentGatewayLoaded" @click="submitOrder('MercadoPago')">
            <b>Solo Argentina 🇦🇷</b>
            <img src="@/assets/img/mao/mercadopago-logo.png" class="w-32 h-32 rounded-full mb-4" />
          </button>
          <button class="cho-container"></button>
        </td>

        <td>
          <button v-if="!isPaymentGatewayLoaded" @click="submitOrder('Stripe')">
            <b>Resto del mundo 🌏</b>
            <img src="@/assets/img/mao/stripe-logo.png" class="w-32 h-32 rounded-full mb-4" />
          </button>
          <button class="cho-container"></button>
        </td>

        <!-- <td>
          <button @click="buyWithEthereum()">
            <img src="@/assets/img/mao/ethereum-logo.png" class="w-32 h-32 rounded-full mb-4" />
          </button>
        </td>

        <td v-for="token in tokens" :key="token.name">
          <button @click="buyWithERC20Token(token.name)">
            <img :src="token.image" class="w-32 h-32 rounded-full mb-4" />
          </button>
        </td> -->
      </tr>
      <!--
          <h1 style="color: purple">PREGUNTAS FRECUENTES / FAQS</h1>
          <span>Debes estar conectado a la red Binance Smart Chain!</span>
          <img
            src="https://www.asiacryptotoday.com/wp-content/uploads/2020/08/Binance-Smart-Chain-scaled.jpeg"
            class="w-64 h-32 mb-4"
          />
          <a
            style="color: cyan"
            href="https://academy.binance.com/es/articles/connecting-metamask-to-binance-smart-chain"
            target="_blank"
          >
            Tutorial para Agregar Binance Smart Chain a Metamask
          </a>
          <hr />
          <br />

          <h4>Comprar AOLB (Argentum Online Libre B) Token</h4>
          <img
            src="https://argentumonline.org/assets/images/ao-libre-aolb-logo.png"
            alt="AOLB Token"
            class="w-32 h-32 rounded-full mb-4"
          />

          <a
            style="color: cyan"
            href="https://pancakeswap.finance/info/token/0xea17e48c988d64e92d64550c787b17281f61828e"
            target="_blank"
          >
            COMPRAR EN PANCAKE SWAP
          </a>
          <br />
          <a
            style="color: cyan"
            href="https://dex.guru/token/0xea17e48c988d64e92d64550c787b17281f61828e-bsc"
            target="_blank"
          >
            COMPRAR EN DEX GURU
          </a>
          <hr /> -->
    </div>

    <div v-if="!$auth.loggedIn" class="text-center mt-24">
      <h1 style="color: red">Debes de iniciar sesion para poder efectuar el pago.</h1>
    </div>
  </div>
</template>

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
        }
      }
    },

    async createPurchaseTransaction(transactionHash) {
      // Handle the result
      console.log(transactionHash);

      let endpoint = ""
      let payload = {
        paymentGateway: "Web3"
      };

      if (this.saleType === "AO20POINTS") {
        endpoint = "/market/buyAO20PointsMao"

        payload.tierName = this.item.name
        payload.txHash = transactionHash

      } else if (this.saleType === "USER") {
        //TODO = Check that this work
        endpoint = "/market/buyUserMao"

        payload.userName = this.user.name
        payload.txHash = transactionHash

      } else if (this.saleType === "ITEM") {
        endpoint = "/market/buyItemMao"

        payload.itemId = this.item.item_id
        payload.itemQuantity = qtyItems
        payload.userId = this.selectedUserId
        payload.txHash = transactionHash
      }

      requestPurchaseTransaction(endpoint, payload);
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

    async requestPurchaseTransaction(endpoint, payload) {
      this.$axios
        .$post(endpoint, payload)
        .then((response) => {
          this.buyStatus = "OK";
          this.buyMessage =
            "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se depositen tus puntos.";
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
