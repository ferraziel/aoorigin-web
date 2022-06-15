<template>
  <div class="container">
    <h1 class="mb-12 text-5xl text-primary">{{ allowOrder }}</h1>

    <NuxtLink to="mercadoao" class="btn">Volver al mercado</NuxtLink>

  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      allowOrder: await $axios.$get(`market/allowSellUserOrder/${params.txSignature}`),
    };
  },
};
</script>

<style></style>
