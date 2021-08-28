<template>
  <div class="container">
    <PagePadding />

    <div v-if="character" lass="text-center mb-12">
      <!-- <CharacterHead :id="character.head_id" :scale="i === 0 ? 5 : i === 1 ? 3 : 2" class="flex-shrink-0 mr-4" /> -->
      <h1 class="section-title">{{ character.name }}</h1>

      <h3>Setear Wallet Id para Personaje con Metamask</h3>
      <h3>WalletId: {{ character.eth_wallet_id }}</h3>

      <button @click="addWalletIdToCharacter()" v-if="!character.eth_wallet_id" type="submit" class="btn btn-silver self-start">
        Agregar Wallet seleccionada en Personaje.
      </button>

      <MessageBox :status="addWalletStatus" :message="addWalletMessage" />
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El personaje no existe o no pertenece a tu cuenta.</p>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData({ $axios, params }) {
    let character;
    try {
      character = await $axios.$get(`characters/${params.uid}`);
    } catch (error) {
      character = null;
    }

    return {
      character,
      userId: params.uid,
      addWalletMessage: "",
      addWalletStatus: null
    };
  },
  async mounted() {
      if (ethereum) {
        // Using provider setting from nuxt config :
        // web3 = new this.$Web3(ethereum);

        //Ganache
        // console.log(6667, process.env.ETH_NODE_URL)
        // web3 = new this.$Web3("wss://rinkeby.infura.io/ws/v3/bb0f7b73b542418a813d97d7464d8fa5");
        // web3 = new this.$Web3("wss://mainnet.infura.io/ws/v3/bb0f7b73b542418a813d97d7464d8fa5");

        try {
          // Request account access
          // await ethereum.enable();
          this.isEthereumSupportedVisibilityButton = true;

          console.log("This browser is supported for ethereum");

          // await window.ethereum.enable();

          // web3.eth.getAccounts().then(result => {
          //   console.log(888, 666, result)
          //   alert(result)
          // });

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      // Non-decentralized app browsers...
      else {
        alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }

  },

  methods: {
    async addWalletIdToCharacter() {
        if (confirm("Estas seguro que quieres agregar la wallet seleccionada en tu personaje? Esta operacion no podra ser modificada.")) {
          const ethWallets = await ethereum.request({ method: 'eth_requestAccounts' });
          this.$axios.$put(`/characters/addWalletIdInCharacter/${this.userId}/${ethWallets[0]}`)
          .then(data => {
            this.addWalletStatus = "OK";
            this.addWalletMessage = "La billetera fue asignada correctamente al personaje. Ahora podras usar tus NFT en el juego.";

            character.eth_wallet_id = ethWallets[0];
          })
          .catch(error => {
            this.addWalletStatus = "ERROR";
            this.addWalletMessage = error.response.data.message;
          });
        }
    },
  },

  head() {
    return {
      title: this.character ? `${this.character.name} - Personaje` : "Personaje no encontrado",
    };
  },
};
</script>

<style></style>
