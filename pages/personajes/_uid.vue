<template>
  <div class="container">
    <PagePadding />

    <div v-if="character" lass="text-center mb-12">
      <!-- <CharacterHead :id="character.head_id" :scale="i === 0 ? 5 : i === 1 ? 3 : 2" class="flex-shrink-0 mr-4" /> -->
      <h1 class="section-title">{{ character.name }}</h1>

      <h3>Setear Wallet Id para Personaje con Metamask</h3>
      <h3>WalletId: {{ character.eth_wallet_id }}</h3>

      <CharacterRenderer
        :isDead="character.min_hp == 0"
        :bodyData="character.bodyGraphicData"
        :helmetData="character.helmetGraphicData"
        :weaponData="character.weaponGraphicData"
        :shieldData="character.shieldGraphicData"
        :headData="character.headGraphicData"
        background="https://i1.sndcdn.com/artworks-wclS76qZZbYHAhoX-yVPKnw-t500x500.jpg"
      />
      <div style="display:table-cell; vertical-align:middle"
        v-for="item in character.inventoryItem"
        :key="item.item_id"
        :id="item.item_id"
      >
        <ItemRenderer
          :item="item"
          background="https://i1.sndcdn.com/artworks-wclS76qZZbYHAhoX-yVPKnw-t500x500.jpg"
        />

        <span style="color:yellow">{{item.Data.NAME}}</span>
        <br>
        <span>{{item.Data.TEXTO}}</span>
        <br>
        <span style="color:green">Cantidad: {{item.amount}}</span>


      </div>

      <button
        @click="addWalletIdToCharacter()"
        v-if="!character.eth_wallet_id && !($dayjs(character.deleted_at).year() > 1970)"
        type="submit"
        class="btn btn-silver self-start"
      >
        Agregar Wallet seleccionada en Personaje.
      </button>
      <MessageBox :status="addWalletStatus" :message="addWalletMessage" />

      <button
        @click="recoverCharacter()"
        v-if="$dayjs(character.deleted_at).year() > 1970"
        type="submit"
        class="btn btn-silver self-start"
      >
        Recuperar Personaje
      </button>

    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El personaje no existe o no pertenece a tu cuenta.</p>
    </section>
  </div>
</template>

<script>
import { convertToJson } from 'fast-xml-parser';
export default {
  middleware: "auth",
  async asyncData({ $axios, params }) {
    let character;
    try {
      character = await $axios.$get(`characters/${params.uid}`);
    } catch (error) {
      character = null;
    }
    console.log(character)
    return {
      userId: params.uid,
      character,
      addWalletMessage: "",
      addWalletStatus: null,
    };
  },
  async mounted() {
    if (!ethereum) {
      alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  },

  methods: {
    async addWalletIdToCharacter() {
      if (confirm("Estas seguro que quieres agregar la wallet seleccionada en tu personaje? Esta operacion no podra ser modificada.")) {
        this.addWalletStatus = "PENDING";
        this.addWalletMessage = "Confirme la asignacion de billetera mediante metamask";

        const ethWallets = await ethereum.request({ method: "eth_requestAccounts" });

        try {
          await this.$axios.$put(`/characters/addWalletIdInCharacter/${this.userId}/${ethWallets[0]}`);
          this.addWalletStatus = "OK";
          this.addWalletMessage =
            "La billetera fue asignada correctamente al personaje. Ahora podras usar tus NFT en el juego.";

          this.character.eth_wallet_id = ethWallets[0];
        } catch (error) {
          this.addWalletStatus = "ERROR";
          this.addWalletMessage = error.response.data.message;
        }
      }
    },

    async recoverCharacter() {
      if (confirm("Estas seguro que quieres recuperar a tu personaje?.")) {
        alert('no implementado aun.')
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
