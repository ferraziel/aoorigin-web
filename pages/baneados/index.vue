<template>
  <div class="container">
    <div class="text-center mb-12">
      <br>
      <br>
      <h1 class="section-title">Muro de la verguenza</h1>
      <h6>Lista de personajes baneados.</h6>
      <h6>Se actualiza cada 1 hs con la informacion mas reciente del mundo.</h6>

      <div v-if="bannedUsers.length">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div class="flex flex-col items-center gap-y-4"
              v-for="user in bannedUsers" :key="user.name" :id="user.name">

            <!-- <NuxtLink :to="`/mercadoao/personaje/${user.name}`"> -->
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
              <img :src="user.canvasImage" width="64px"/>
            </div>
            <ul>
              <h4 class="text-gr gr-gold">{{ user.name }}</h4>
              <li class="text-m gr-gold">Nivel: {{ user.level }}</li>
              <li style="text-m gr-gold">Baneado por: {{ user.banned_by}}</li>
              <li style="text-m gr-gold">Razon: {{ user.ban_reason}}</li>
              <li class="text-xs gr-gold">Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY") }}</li>
            </ul>
            <!-- </NuxtLink> -->
          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes baneados.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return {
      bannedUsers: await $axios.$get(`users/getAllBanned`),
    };
  },
};
</script>

<style></style>
