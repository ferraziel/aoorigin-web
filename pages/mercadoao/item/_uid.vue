<template>
  <div class="container">
    <PagePadding />

    <div v-if="item" lass="text-center mb-12">

      <h1 class="section-title">{{ item.Data.NAME }}</h1>

      <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
        <img :src="item.Data.canvasImage" class="" />
      </div>

      <ul>
        <li style="color: cyan">{{ item.Data.TEXTO }}</li>
        <li style="color: green">Precio: {{ item.price_in_tokens }} AO Tokens</li>
      </ul>

      <button @click="prepareOrder()"
              v-if="usersWithFreeSlots.length <= 0"
              type="submit"
              class="btn btn-silver self-start"
      >
        Seleccionar personaje al cual asignar item.
      </button>
      <MessageBox :status="buyItemStatus" :message="buyItemMessage" />

      <div v-if="usersWithFreeSlots.length > 0">
        <h1>Para que personaje queres comprar el item?</h1>

        <div v-for="user in usersWithFreeSlots" :key="user.name" :id="user.id">
          <button @click="buyItem(user.id)" class="section-title">{{ user.name }}</button>
        </div>
      </div>

    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El item no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      item: await $axios.$get(`market/getItemOnSaleById/${params.uid}`),
      usersWithFreeSlots: [],
      buyItemMessage: "",
      buyItemStatus: null,
    };
  },

  async mounted() {
    if (!ethereum) {
      alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  },

  methods: {
    async prepareOrder() {
      this.buyItemStatus = "PENDING";
      this.buyItemMessage = "Selecciona el personaje al cual quieras asignar el item.";

      this.$axios.$post(`/users/getUserFromAccountWithFreeSlotsInBankInventory`)
      .then((data) => {
        this.buyItemStatus = "PENDING";
        this.buyItemMessage = "Debes de seleccionar el personaje a comprar el item..";
        this.usersWithFreeSlots = data.usersWithFreeSlots;
      })
      .catch((error) => {
        this.buyItemStatus = "ERROR";
        this.buyItemMessage = error.response.data.message;
      });

    },

    async buyItem(userId) {
      if (confirm("Estas seguro que quieres comprar este item?.")) {

        await ethereum.enable();

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        this.buyItemStatus = "PENDING";
        this.buyItemMessage = "Esperando aprobar transaccion. Esto puede tardar varios minutos dependiendo la congestion de la red ethereum";

        try {
          const transactionHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [
              {
                to: '0x94f5bA56B06a6097f25D6b658f7abE2f78880B79',
                value: "10000000000000",
                from: accounts[0],
              },
            ],
          });

          // Handle the result
          console.log(transactionHash);

          this.$axios.$post(`/market/buyItemMao`, {
            itemId: this.item.item_id,
            itemQuantity: 1,
            userId: userId,
            txHash: transactionHash,
          })
          .then((data) => {
            this.buyItemStatus = "OK";
            this.buyItemMessage = "Tu pedido ingreso a nuestro sistema con exito, espera a que se confirme la transaccion para que se deposite el item en tu boveda del banco.";
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
