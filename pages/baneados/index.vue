<template>
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="section-title">Muro de la verguenza</h1>
      <h6>Lista de personajes baneados.</h6>
      <h6>Se actualiza cada 1 hs con la informacion mas reciente del mundo.</h6>

      <div v-if="bannedUsers.length">
        <div class="container grid grid-cols-4">
          <div class="flex flex-col items-center gap-y-4"
               v-for="user in bannedUsers" :key="user.id" :id="user.id">

            <!-- <NuxtLink :to="`/baneados/${user.id}`"> -->
            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
              <img :src="user.canvasImage" width="64px" />
            </div>

            <ul>
              <h4 class="text-gr gr-gold">{{ user.name }}</h4>
              <li class="text-m gr-gold">Nivel: {{ user.level }}</li>
              <li style="text-m gr-gold">Baneado por: {{ user.banned_by}}</li>
              <li style="text-m gr-gold">Razon: {{ user.ban_reason}}</li>
              <li class="text-xs gr-gold">Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY") }}</li>
            </ul>
            <!-- </NuxtLink> -->
            <br>
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
