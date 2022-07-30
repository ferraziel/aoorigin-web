<template>
  <div class="container">
    <div v-if="user" lass="text-center mb-12">
      <h3>PERSONAJE BANEADO</h3>
      <h6>Se actualiza cada 1 hs con la informacion mas reciente del mundo.</h6>

      <h1 class="section-title">{{ user.name }}</h1>
      <UserAndItemsRenderer :user="user" />
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El personaje no existe o no esta baneado.</p>
    </section>
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      user: await $axios.$get(`users/getBannedUser/${params.uid}`).catch(err => console.error(err)),
    };
  },


  head() {
    return {
      title: this.user ? `${this.user.name} - Personaje Baneado` : "Personaje no encontrado",
    };
  },
};
</script>

<style></style>
