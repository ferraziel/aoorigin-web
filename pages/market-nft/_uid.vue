<template>
  <div class="container max-w-screen-lg">
    <article class="news">
      <header class="pb-3 border-b border-gr border-gr-silver">
        <h1 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">{{ itemOnSale.Name }}</h1>
        <div class="flex items-center text-lg md:text-xl">
          <time :datetime="itemOnSale.published_date">
            <span v-if="$dayjs(itemOnSale.published_date).year() != $dayjs().year()">
              {{ $dayjs(itemOnSale.published_date).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}
            </span>
            <span v-else>{{ $dayjs(itemOnSale.published_date).format("DD [de] MMMM [a las] HH:mm") }}</span>
          </time>
          <span class="mx-2">-</span>
        </div>
      </header>

      <main class="mt-8 news_body md:mt-12">
        <h6>Tipo de objeto: {{ itemOnSale.ObjType }}</h6>
        <h6>Precio: {{ itemOnSale.price }}</h6>
        <h6>Estado: {{ itemOnSale.status }}</h6>
        <h6>Rareza: {{ itemOnSale.obj_type_rarity }}</h6>

        <h4 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">
          Comentario vendedor: {{ itemOnSale.description }}
        </h4>
        <h4 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">
          Descripcion del item en el juego: {{ itemOnSale.Texto }}
        </h4>
      </main>

      <div>
        <button @click="sendEthButton">Comprar</button><br>
        <span>Conectado : {{ isEthereumSupported() }}</span><br>
        <button v-if="!isEthereumSupportedVisibilityButton" @click="contractConnect">Connect to Smart Contract</button><br>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isEthereumSupportedVisibilityButton: false,
      accounts: []
    }
  },

  async asyncData({ $axios, params }) {
    return {
      contractAddress: "0x000000000000000000000000",
      itemOnSale: await $axios.$get(`nftmarket/getItemOnSaleById/${params.uid}`),
    };
  },

  methods: {
    async contractConnect() {
      if (!this.isEthereumSupported()) {
        alert("Necesitas Metamask para poder hacer compras en sitio.");
      }
    },

    async sendEthButton() {
      this.accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: this.accounts[0],
              to: "0xA5B4F71F7e996d24bAA641F91D50bdc1148f9B05",
              value: web3.utils.toWei("2100000", 'gwei'),
              // gasPrice: web3.utils.toWei("2100000", 'gwei'),
              // gas: web3.utils.toWei("2100000", 'gwei'),
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
    },

    async isEthereumSupported() {
      if (ethereum) {
        // Using provider setting from nuxt config :
        // web3 = new this.$Web3(ethereum);

        //Ganache
        web3 = new this.$Web3('http://127.0.0.1:7545');

        try {
          // Request account access
          await ethereum.enable();
          this.isEthereumSupportedVisibilityButton = true;
          console.log("This browser is supported for ethereum");
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      // Non-decentralized app browsers...
      else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
    },
  },

  head() {
    return {
      title: this.itemOnSale.Name,
    };
  },
};
</script>
