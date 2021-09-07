<template>
  <div class="container">
    <PagePadding />

    <div class="text-center mb-12">
      <h1 class="section-title">Mercado AO</h1>
      <h4>Lista de personajes en Venta!</h4>

      <div v-if="usersOnSell.length">
        <div class="container grid grid-cols-4">
          <div class="flex flex-col items-center gap-y-4"
               v-for="user in usersOnSell" :key="user.id" :id="user.id">

            <NuxtLink :to="`/mercadoao/${user.id}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                <img :src="user.canvasImage" class="" />
              </div>
              <h4 class="text-gr gr-gold">{{ user.name }}</h4>
            </NuxtLink>
            <span class="gr-gold">Nivel: {{ user.level }}</span>
            <span class="gr-gold">Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY") }}</span>

          </div>
        </div>
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
