<template>
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="section-title">Lista de personajes</h1>
      <MessageBox :status="removeUserFromMaoStatus" :message="removeUserFromMaoMessage" />

      <ul
        v-if="users.length"
        class="max-w-screen-md mx-auto bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-6"
      >
        <div v-for="user in users" :key="user.id" :id="user.id">
          <!-- <NuxtLink :to="`/personajes/${user.id}`"> -->
          <div class="flex flex-col items-center gap-y-2">
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
              <img :src="user.canvasImage" width="64px" />
            </div>
          </div>

          <h2 class="text-gr gr-gold">{{ user.name }}</h2>
          <!-- </NuxtLink> -->

          <h6>Nivel: {{ user.level }}</h6>
          <h6>Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}</h6>
          <!-- <h2>Online: {{ user.is_logged ? '🟢' : '🔴'}}</h2> -->
          <div v-if="user.is_locked_in_mao == 0 && user.deleted == 0 && user.is_published == 1">
            <button @click="removeUserFromMao(user)"
                    type="submit"
                    class="btn btn-silver self-start"
            >
              Sacar Personaje de Mercado AO
            </button>

          </div>
          <!-- <h2 v-if="user.eth_wallet_id">WalletId: {{ user.eth_wallet_id }}</h2> -->
          <hr />
          <br />
        </div>
      </ul>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en la cuenta.</p>
      </section>
    </div>

    <div class="text-center mb-12">
      <h1 class="section-title">Personajes Borrados</h1>
      <h5>Si queres podes recuperar tus personajes borrados por dinero</h5>
      <ul
        v-if="deletedUsers.length"
        class="max-w-screen-md mx-auto bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-6"
      >
        <NuxtLink
          v-for="deletedUser in deletedUsers"
          :key="deletedUser.id"
          :id="deletedUser.id"
          :to="`/personajes/${deletedUser.id}`"
        >
          <div class="flex flex-col items-center gap-y-2">
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
              <img :src="deletedUser.canvasImage" class="" />
            </div>
          </div>

          <h2 class="text-4xl text-gr gr-gold">{{ deletedUser.name }}</h2>
          <h2>Nivel: {{ deletedUser.level }}</h2>
          <h2>Ultimo login: {{ $dayjs(deletedUser.fecha_ingreso).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}</h2>
          <hr />
          <br />
        </NuxtLink>
      </ul>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes borrados en la cuenta.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData({ $axios }) {
    return {
      users: await $axios.$get(`users/getAllActiveUsers`),
      deletedUsers: await $axios.$get(`users/getAllDeletedUsers`),
      removeUserFromMaoMessage: "",
      removeUserFromMaoStatus: null,
    };
  },
  methods: {
     async removeUserFromMao(user) {
      if (confirm("Estas seguro que quieres retirar de la venta a tu personaje?")) {
        user.is_locked_in_mao = 0;

        this.removeUserFromMaoStatus = "PENDING";
        this.removeUserFromMaoMessage = "Enviando peticion al servidor, por favor espere.";

        this.$axios
          .$get(`/users/removeUserFromMao/${user.id}`)
          .then((data) => {
            this.removeUserFromMaoStatus = "OK";
            this.removeUserFromMaoMessage = data.message;
          })
          .catch((error) => {
            // this.user.is_published = true;
            this.removeUserFromMaoStatus = "ERROR";
            this.removeUserFromMaoMessage = error.response.data.message;
          });

          window.scrollTo(0, 0)
      }
    },
}
};
</script>

<style></style>
