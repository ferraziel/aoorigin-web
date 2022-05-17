<template>
  <div class="container">
    <PagePadding />

    <div v-if="user" lass="text-center mb-12">
      <h1 class="section-title">{{ user.name }}</h1>

      <!-- <div class="mb-4" v-if=!user.deleted>
        <h3>Setear Wallet Id para Personaje con Metamask</h3>
        <h3>WalletId: {{ user.eth_wallet_id }}</h3>

        <button
          @click="addWalletIdToUser()"
          v-if="!user.eth_wallet_id && !user.deleted && !user.is_locked_in_mao"
          type="submit"
          class="btn btn-silver self-start"
        >
          Agregar Wallet seleccionada en Personaje.
        </button>
        <MessageBox :status="addWalletStatus" :message="addWalletMessage" />

      </div>

      <br>
      <button
        @click="recoverUser()"
        v-if=user.deleted
        type="submit"
        class="btn btn-silver self-start"
      >
        Recuperar Personaje
      </button>
      <MessageBox :status="recoverUserStatus" :message="recoverUserMessage" /> -->

      <br>
      <div v-if="!user.is_locked_in_mao && !user.deleted">
        <span>Vender el personaje tiene un costo de 10.000 monedas de oro de juego. Se necesita tener el monto total en el inventario o boveda.</span>
        <button @click="addUserToMao()"
                type="submit"
                class="btn btn-silver self-start"
        >
          Vender Personaje en Mercado AO
        </button>
        <MessageBox :status="addUserToMaoStatus" :message="addUserToMaoMessage" />
      </div>

      <br>
      <button @click="removeUserFromMao()"
              v-if="user.is_locked_in_mao"
              type="submit"
              class="btn btn-silver self-start"
      >
        Sacar Personaje de Mercado AO
      </button>
      <MessageBox :status="removeUserFromMaoStatus" :message="removeUserFromMaoMessage" />

      <UserAndItemsRenderer :user="user" />
      <br>
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
    let user;

    try {
      user = await $axios.$get(`users/${params.uid}`);
    } catch (error) {
      user = null;
    }

    return {
      // user.id: params.uid,
      user,
      addWalletMessage: "",
      addWalletStatus: null,
      recoverUserMessage: "",
      recoverUserStatus: null,
      addUserToMaoMessage: "",
      addUserToMaoStatus: null,
      removeUserFromMaoMessage: "",
      removeUserFromMaoStatus: null,
    };
  },

  async mounted() {
    if (!ethereum) {
      alert("Necesitas Metamask para poder poner la wallet en tu personaje.");
      console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  },

  methods: {
    async addWalletIdToUser() {
      if (confirm("Estas seguro que quieres agregar la wallet seleccionada en tu personaje? Esta operacion no podra ser modificada.")) {
        this.addWalletStatus = "PENDING";
        this.addWalletMessage = "Confirme la asignacion de billetera mediante metamask";

        const ethWallets = await ethereum.request({ method: "eth_requestAccounts" });

        try {
          await this.$axios.$put(`/users/addWalletIdInUser/${this.user.id}/${ethWallets[0]}`);
          this.addWalletStatus = "OK";
          this.addWalletMessage = "La billetera fue asignada correctamente al personaje. Ahora podras usar tus NFT en el juego.";
          this.user.eth_wallet_id = ethWallets[0];
        } catch (error) {
          this.addWalletStatus = "ERROR";
          this.addWalletMessage = error.response.data.message;
        }
      }
    },

    async recoverUser() {
      if (confirm("Estas seguro que quieres recuperar a tu personaje?.")) {
        this.recoverUserStatus = "ERROR";
        this.recoverUserMessage = "No implementado";
      }
    },

    async addUserToMao() {
      if (confirm("Estas seguro que quieres vender a tu personaje? Al aceptar, el personaje quedara bloqueado con sus items tanto de inventario como banco, para la venta del mismo.")) {

        this.user.is_locked_in_mao = true;
        this.$axios.$post(`/users/addUserInMao/${this.user.id}`, {
          is_locked_in_mao: this.user.is_locked_in_mao,
        })
        .then((data) => {
          this.addUserToMaoStatus = "OK";
          this.addUserToMaoMessage = "El personaje ahora esta en el mercado ao.";
        })
        .catch((error) => {
          this.user.is_locked_in_mao = false;
          this.addUserToMaoStatus = "ERROR";
          this.addUserToMaoMessage = error.response.data.message;
        });
      }
    },

    async removeUserFromMao() {
      if (confirm("Estas seguro que quieres retirar de la venta a tu personaje?")) {
          this.user.is_locked_in_mao = false;

          this.$axios.$post(`/users/removeUserFromMao/${this.user.id}`, {
            is_locked_in_mao: this.user.is_locked_in_mao,
          })
          .then((data) => {
            this.removeUserFromMaoStatus = "OK";
            this.removeUserFromMaoMessage = "Se retiro correctamente el personaje de Mercado AO.";
          })
          .catch((error) => {
            this.user.is_locked_in_mao = true;
            this.removeUserFromMaoStatus = "ERROR";
            this.removeUserFromMaoMessage = error.response.data.message;
          });
      }
    },
  },

  head() {
    return {
      title: this.user ? `${this.user.name} - Personaje` : "Personaje no encontrado",
    };
  },
};
</script>

<style></style>
