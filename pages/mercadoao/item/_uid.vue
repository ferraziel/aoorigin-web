<template>
  <div class="container">

    <div v-if="item" lass="text-center mb-12">

      <h1 class="section-title">{{ item.Data.NAME }}</h1>
      <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-2 bg-gray-900">
        <img :src="item.Data.canvasImage" class="" />
      </div>

      <ul>
        <li style="color: cyan">{{ item.Data.TEXTO }}</li>

        <!-- <li style="color: green">
          Precio: {{ item.price_in_tokens }} AOLB Tokens
          <img
            src="https://argentumonline.org/assets/images/ao-libre-aolb-logo.png"
            alt="AOLB Token"
            class="w-8 h-8 rounded-full"
          />
        </li> -->

        <li style="color: green">
          Precio: ${{ item.price_in_pesos }} Pesos Argentinos
        </li>

        <li v-if="item.Data.DESC" style="color: green">Descripcion: {{ item.Data.DESC }}</li>
        <li style="color: green">Tipo de Objeto: {{ gameObjTypes[item.Data.OBJTYPE - 1] }}</li>
      </ul>

      <div>
        <h3>Cantidad a comprar:</h3>
        <input v-model="itemQuantity" type="number" name="itemQuantity" min="1" max="10000" required/>
      </div>

      <h1 style="color: red" v-if="!$auth.loggedIn">Debes de iniciar sesion para poder comprar items.</h1>

      <h3 style="color: red" v-if="$auth.loggedIn && usersWithFreeSlots.length == 0 && !orderConfirmed">
        Debes de crear una cuenta en los bancos Goliath del juego con tu personaje. Esto se realiza dentro del juego, depositando un item en la boveda. En la boveda debe de haber slots disponibles para hacer el deposito de compra.
      </h3>

      <MessageBox :status="buyItemStatus" :message="buyItemMessage" />

      <div v-if="usersWithFreeSlots.length > 0">
        <h1>Para que personaje queres comprar el item?</h1>

        <div v-for="user in usersWithFreeSlots" :key="user.name" :id="user.id">
          <h1 @click="selectCharacter(user.id)" class="section-title">
            {{ user.name }}
            <span v-if="selectedUserId == user.id">✔️</span>
          </h1>
        </div>
        <br />

        <table v-if="selectedUserId" style="margin-left: auto; margin-right: auto">
          <h3>Elije metodo de pago:</h3>
          <tr>
            <!-- <th style="color: cyan">AOLB (AO Libre Token B)</th> -->
            <th v-if="!isMercadoPagoLoaded" @click="buyItemWithMercadoPago()" style="color: yellow">MERCADOPAGO</th>
          </tr>
          <button class="cho-container"></button>

          <tr>
            <!-- <td>
              <img
                src="https://argentumonline.org/assets/images/ao-libre-aolb-logo.png"
                class="w-32 h-32 rounded-full mb-4"
              />
            </td> -->
            <!-- <td>
                  <img @click="buyItemWithNativeToken()" src="https://assets.trustwalletapp.com/blockchains/binance/info/logo.png" class="w-32 h-32 rounded-full mb-4" />
              </td> -->
          </tr>
        </table>
      </div>
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

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El item no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>
import abi from "@/assets/contracts/0xEA17E48C988D64e92d64550C787B17281F61828e.json";
import gameObjTypes from "@/assets/gameObjTypes.json";
import Web3 from "web3";

export default {

async asyncData({ $axios, params }) {
    return {
      item: await $axios.$get(`market/getItemOnSaleById/${params.uid}`),
      itemQuantity: 1,
      selectedUserId: null,
      usersWithFreeSlots: [],
      buyItemMessage: "",
      buyItemStatus: null,
      abi,
      gameObjTypes,
      aolbContractAddress: process.env.TOKEN_AOLB_CONTRACT_ADDRESS,
      paymentAddress: process.env.PAYMENT_ADDRESS,
      orderConfirmed: false,
      isMercadoPagoLoaded: false
    };
  },

  async mounted() {
    // if (!ethereum) {
    //   alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
    //   console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    // }

    // console.log(666, this.aolbContractAddress, this.paymentAddress);

    this.prepareOrder();
  },

  methods: {
    selectCharacter(userId) {
      this.selectedUserId = userId;
    },

    prepareOrder() {
      this.$axios
        .$post(`/users/getUserFromAccountWithFreeSlotsInBankInventory`)
        .then((data) => {
          this.buyItemMessage = "Debes de seleccionar el personaje a comprar el item..";
          this.usersWithFreeSlots = data.usersWithFreeSlots;
        })
        .catch((error) => {
          this.buyItemStatus = "ERROR";
          this.buyItemMessage = error.response.data.message;
        });
    },

    async buyItem() {
      if (confirm("Estas seguro que quieres comprar este item?.")) {
        await ethereum.enable();

        console.log("Comprando con AOLB Token.");
        this.buyItemStatus = "PENDING";
        this.buyItemMessage = "Esperando aprobar transaccion en Metamask.";

        var web3 = new Web3(window.ethereum);

        // const aolTokenContract = new web3.eth.Contract(this.abi, "0xEA17E48C988D64e92d64550C787B17281F61828e");
        const aolTokenContract = new web3.eth.Contract(this.abi, this.aolbContractAddress);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        const priceInWei = Web3.utils.toWei(this.item.price_in_tokens.toString(), 'ether')

        const estimatedGas = await aolTokenContract.methods
          .transfer(this.paymentAddress, priceInWei)
          .estimateGas({
            from: accounts[0],
          });

        console.log("Estimated gas: " + estimatedGas);

        aolTokenContract.methods
          .transfer(this.paymentAddress, priceInWei)
          .send({
            from: accounts[0],
            gas: estimatedGas,
          })
          .then((data) => {
            // Handle the result
            console.log(data.transactionHash);

          this.$axios
              .$post(`/market/buyItemMao`, {
                itemId: this.item.item_id,
                itemQuantity: 1,
                userId: this.selectedUserId,
                txHash: data.transactionHash,
              })
              .then((response) => {
                this.buyItemStatus = "OK";
                this.buyItemMessage = "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se deposite el item en tu boveda del banco.";
                this.usersWithFreeSlots.length = 0;
                this.orderConfirmed = true;
              })
              .catch((error) => {
                this.buyItemStatus = "ERROR";
                this.buyItemMessage = error.response.data.message;
              });
          })
          .catch((error) => {
            debugger;
            this.buyItemStatus = "ERROR";
            this.buyItemMessage = error.message;
          });
      }
    },

    async buyItemWithNativeToken() {
      if (confirm("Estas seguro que quieres comprar este item?.")) {
        await ethereum.enable();

        const accounts = await ethereum.request({ method: "eth_accounts" });

        this.buyItemStatus = "PENDING";
        this.buyItemMessage =
          "Esperando aprobar transaccion. Esto puede tardar varios minutos dependiendo la congestion de la red Binance Smart Chain";

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

          this.$axios
            .$post(`/market/buyItemMao`, {
              itemId: this.item.item_id,
              itemQuantity: 1,
              userId: this.selectedUserId,
              txHash: transactionHash,
            })
            .then((data) => {
              this.buyItemStatus = "OK";
              this.buyItemMessage =
                "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se deposite el item en tu boveda del banco.";
              this.usersWithFreeSlots.length = 0;
            })
            .catch((error) => {
              this.buyItemStatus = "ERROR";
              this.buyItemMessage = error.response.data.message;
            });
        } catch (error) {
          console.error(error);
          this.buyItemStatus = "ERROR";
          this.buyItemMessage = error;
        }
      }
    },

    async buyItemWithMercadoPago() {
        this.isMercadoPagoLoaded = true;
        console.log("Comprando con MercadoPago.");
        this.buyItemStatus = "PENDING";
        this.buyItemMessage = "Generando orden de compra con MercadoPago";

		    if (this.itemQuantity <= 0 || this.itemQuantity > 10000) {
          this.buyItemMessage = "Numero no valido, debe ser mayor a 0 y menor a 10.000";
          this.buyItemStatus = "ERROR";
          return;
        }

        this.$axios.$post(`/market/createPreferenceForMercadoPago`, {
          itemId: this.item.item_id,
          characterId: this.selectedUserId,
          itemQuantity: parseInt(this.itemQuantity),
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
          });

          this.buyItemStatus = "OK";
          this.buyItemMessage = "Se genero una preferencia de pago en MercadoPago, por favor haga el pago clickeando en el boton Pagar con MercadoPago.";

        })
        .catch((error) => {
          this.buyItemStatus = "ERROR";
          this.buyItemMessage = error.response.data.message;
        });
    },
  },
  head() {
    return {
      title: this.item ? `${this.item.Data.NAME} - Item` : "Item no encontrado",
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
