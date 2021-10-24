<template>
  <div class="container">

    <div v-if="item" lass="text-center mb-12">

      <h1 class="section-title">{{ item.Data.NAME }}</h1>
      <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-2 bg-gray-900">
        <img :src="item.Data.canvasImage" class="" />
      </div>

      <ul>
        <li style="color: cyan">{{ item.Data.TEXTO }}</li>

        <li style="color: green">
          Precio: {{ item.price_in_tokens }} AOLB Tokens
          <img
            src="https://argentumonline.org/assets/images/ao-libre-aolb-logo.png"
            alt="AOLB Token"
            class="w-8 h-8 rounded-full"
          />
        </li>
        <li style="color: green">Descripcion: {{ item.Data.DESC }}</li>
        <li style="color: green">Tipo de Objeto: {{ gameObjTypes[item.Data.OBJTYPE - 1] }}</li>
      </ul>

      <h1 style="color: red" v-if="!$auth.loggedIn">Debes de iniciar sesion para poder comprar items.</h1>

      <h1 style="color: red" v-if="$auth.loggedIn && usersWithFreeSlots.length == 0 && !orderConfirmed">
        Debes de crear un personaje en el juego para poder comprar items.
      </h1>

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

        <table @click="buyItem()" v-if="selectedUserId" style="margin-left: auto; margin-right: auto">
          <h3>Pagar Con:</h3>
          <tr>
            <th style="color: cyan">AOLB (AO Libre Token B)</th>
            <!-- <th style="color: yellow">BNB (Binance Token)</th> -->
          </tr>
          <tr>
            <td>
              <img
                src="https://argentumonline.org/assets/images/ao-libre-aolb-logo.png"
                class="w-32 h-32 rounded-full mb-4"
              />
            </td>
            <!-- <td>
                  <img @click="buyItemWithNativeToken()" src="https://assets.trustwalletapp.com/blockchains/binance/info/logo.png" class="w-32 h-32 rounded-full mb-4" />
              </td> -->
          </tr>
        </table>
      </div>

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
      <hr />
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
      selectedUserId: null,
      usersWithFreeSlots: [],
      buyItemMessage: "",
      buyItemStatus: null,
      abi,
      gameObjTypes,
      aolbContractAddress: process.env.TOKEN_AOLB_CONTRACT_ADDRESS,
      paymentAddress: process.env.PAYMENT_ADDRESS,
      orderConfirmed: false,
    };
  },

  async mounted() {
    if (!ethereum) {
      alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }

    console.log(666, this.aolbContractAddress, this.paymentAddress);

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
                this.buyItemMessage =
                  "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se deposite el item en tu boveda del banco.";
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
                // to: "0x8bE08c2eddC1E266B0177a7FD23A2d7DBA6bB563",
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
  },

  head() {
    return {
      title: this.item ? `${this.item.Data.NAME} - Item` : "Item no encontrado",
    };
  },
};
</script>

<style></style>
