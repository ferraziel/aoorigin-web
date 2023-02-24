<template>
  <div>
    <MessageBox :status="buyStatus" :message="buyMessage" />
    <div v-if="$auth.loggedIn && !isMercadoPagoLoaded">

      <h3>Elije metodo de pago:</h3>
      <tr>
        <td>
          <button v-if="!isMercadoPagoLoaded" @click="buyWithMercadoPago()">
            <img src="@/assets/img/mao/mercadopago-logo.png" class="w-32 h-32 rounded-full mb-4" />
          </button>
          <button class="cho-container"></button>
        </td>

        <td>
          <button @click="buyItemWithNativeToken()">
            <img src="@/assets/img/mao/ethereum-logo.png" class="w-32 h-32 rounded-full mb-4" />
          </button>
        </td>

        <td v-for="token in tokens" :key="token.name">
          <button @click="buyItem(token.name)">
            <img :src="token.image" class="w-32 h-32 rounded-full mb-4" />
          </button>
        </td>
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
  </div>
</template>

<script>
import abiAolb from "@/assets/contracts/0xEA17E48C988D64e92d64550C787B17281F61828e.json";
import abiTheter from "@/assets/contracts/0xEA17E48C988D64e92d64550C787B17281F61828e.json";
import Web3 from "web3";

function buyAO20PointsMao(scope) {
  scope.$axios
    .$post(`/market/buyAO20PointsMao`, {
      tierName: scope.item.name,
      txHash: data.transactionHash,
    })
    .then((response) => {
      scope.buyStatus = "OK";
      scope.buyMessage =
        "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se depositen tus puntos.";
      scope.orderConfirmed = true;
    })
    .catch((error) => {
      scope.buyStatus = "ERROR";
      scope.buyMessage = error.response.data.message;
    });
}

function buyItemMao(scope) {
  scope.$axios
      .$post(`/market/buyItemMao`, {
        itemId: scope.item.item_id,
        itemQuantity: 1,
        userId: scope.selectedUserId,
        txHash: data.transactionHash,
      })
      .then((response) => {
        scope.buyItemStatus = "OK";
        scope.buyItemMessage = "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se deposite el item en tu boveda del banco.";
        scope.usersWithFreeSlots.length = 0;
        scope.orderConfirmed = true;
      })
      .catch((error) => {
        scope.buyItemStatus = "ERROR";
        scope.buyItemMessage = error.response.data.message;
      });
}

export default {
  props: ["item", "saleType", "selectedUserId"],
  head() {
    return {
      script: [
        {
          src: "https://sdk.mercadopago.com/js/v2",
          async: true,
        },
      ]
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
      isMercadoPagoLoaded: false,
      itemQuantity: 1,
    };
  },
  methods: {
    async buyItem(tokenName) {
      if (confirm("Estas seguro que quieres comprar estos AO20 Points?.")) {
        await ethereum.enable();

        console.log(`Comprando con ${tokenName} Token.`);
        this.buyStatus = "PENDING";
        this.buyMessage = `Comprando con ${tokenName} token. Esperando aprobar transaccion.`;

        var web3 = new Web3(window.ethereum);
        debugger;
        const token = this.tokens.find((x) => x.name === "tokenName");
        console.log(666, token);
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
            // Handle the result
            console.log(data.transactionHash);

            if (this.saleType === "AO20POINTS") {
              buyAO20PointsMao(this);
            } else {
              buyItemMao(this)
            }

          })
          .catch((error) => {
            this.buyStatus = "ERROR";
            this.buyMessage = error.message;
          });
      }
    },

    async buyItemWithNativeToken() {
      if (confirm("Estas seguro que quieres comprar este item?.")) {
        await ethereum.enable();

        const accounts = await ethereum.request({ method: "eth_accounts" });

        this.buyStatus = "PENDING";
        this.buyMessage =
        "Esperando aprobar transaccion. Esto puede tardar varios minutos dependiendo la congestion de la red Ethereum";

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

          // Handle the result
          console.log(transactionHash);
          if (this.saleType === "AO20POINTS") {
            buyAO20PointsMao(this);
          } else {
            buyItemMao(this)
          }

        } catch (error) {
          console.error(error);
          this.buyStatus = "ERROR";
          this.buyMessage = error;
        }
      }
    },

    async buyWithMercadoPago() {
      if (confirm("Estas seguro que quieres comprar este item?.")) {
        this.isMercadoPagoLoaded = true;
        console.log("Comprando con MercadoPago.");
        this.buyStatus = "PENDING";
        this.buyMessage = "Generando orden de compra con MercadoPago";

        if (this.itemQuantity <= 0 || this.itemQuantity > 10000) {
          this.buyMessage = "Numero no valido, debe ser mayor a 0 y menor a 10.000";
          this.buyStatus = "ERROR";
          return;
        }

        this.$axios
          .$post(`/market/createPreferenceForMercadoPagoToBuyAO20Points`, {
            tierName: this.item.name,
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
                elementsColor: "#8da811",
                headerColor: "#402a87",
              },
            });

            this.buyStatus = "OK";
            this.buyMessage =
              "Se genero una preferencia de pago en MercadoPago, por favor haga el pago clickeando en el boton Pagar con MercadoPago.";
          })
          .catch((error) => {
            this.buyStatus = "ERROR";
            this.buyMessage = error.response.data.message;
          });
      }
    },
  },
};
</script>

<style>
</style>
