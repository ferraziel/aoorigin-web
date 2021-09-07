<template>
  <div class="container">
    <PagePadding />

    <div class="text-center mb-12">
      <h1 class="section-title">Mercado AO</h1>
      <h4>Lista de personajes en Venta!</h4>
      <div
        v-if="usersOnSell.length"
      >
        <NuxtLink
          v-for="user in usersOnSell"
          :key="user.id"
          :id="user.id"
          :to="`/mercadoao/${user.id}`"
        >

          <div class="flex flex-col items-center gap-y-2">
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
              <img :src="user.canvasImage" class="">
            </div>
          </div>

          <h2 class="text-gr gr-gold">{{ user.name }}</h2>
          <h2>Nivel: {{ user.level }}</h2>
          <h2>Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY [a las] HH:mm") }}</h2>
          <hr />
          <br />
        </NuxtLink>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en venta.</p>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData({ $axios }) {
    return {
      usersOnSell: await $axios.$get(`users/getAllActiveUsers`),
    };
  },
};
</script>

<style></style>
