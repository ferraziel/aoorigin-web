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

        <li style="color: green">{{ formatPrice(item.price_in_usd, 'USD') }}</li>
        <li style="color: green">{{ formatPrice(item.price_in_pesos, 'ARS') }} ARS</li>

        <li v-if="item.Data.DESC" style="color: green">Descripcion: {{ item.Data.DESC }}</li>
        <li style="color: green">Tipo de Objeto: {{ gameObjTypes[item.Data.OBJTYPE - 1] }}</li>
      </ul>

      <div>
        <h3>Cantidad a comprar:</h3>
        <input v-model="itemQuantity" type="number" name="itemQuantity" min="1" max="10000" required />
      </div>

      <h1 style="color: red" v-if="!$auth.loggedIn">Debes de iniciar sesion para poder comprar items.</h1>

      <h3 style="color: red" v-if="$auth.loggedIn && usersWithFreeSlots.length == 0 && !orderConfirmed">
        Debes de crear una cuenta en los bancos Goliath del juego con tu personaje. Esto se realiza dentro del juego,
        depositando un item en la boveda. En la boveda debe de haber slots disponibles para hacer el deposito de compra.
      </h3>

      <div v-if="usersWithFreeSlots.length > 0">
        <h1>Para que personaje queres comprar el item?</h1>

        <div v-for="user in usersWithFreeSlots" :key="user.name" :id="user.id">
          <ul>
            <li @click="selectCharacter(user.id)">
              {{ user.name }}
              <span v-if="selectedUserId == user.id">✔️</span>
            </li>
          </ul>
        </div>
        <br />

        <div v-if="$auth.loggedIn && selectedUserId">
          <PaymentMethodSelector :selectedUserId="selectedUserId" :item="item" :qtyItems="itemQuantity" saleType="ITEMS" />
        </div>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El item no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>
import gameObjTypes from "@/assets/gameObjTypes.json";
import { priceMixin } from '@/mixins/priceMixin.js';

export default {
  mixins: [priceMixin],
  async asyncData({ $axios, params }) {
    return {
      item: await $axios.$get(`market/getItemOnSaleById/${params.uid}`),
      itemQuantity: 1,
      selectedUserId: null,
      usersWithFreeSlots: [],
      gameObjTypes,
      orderConfirmed: false,
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
  },
  head() {
    return {
      title: this.item ? `${this.item.Data.NAME} - Item` : "Item no encontrado",
    };
  },
};
</script>

<style></style>
