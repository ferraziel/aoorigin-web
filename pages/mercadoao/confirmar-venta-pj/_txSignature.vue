<template>
  <div class="container">
    <!-- <pre class="bg-black">{{ allowOrder }}</pre> -->

    <h1 class="mb-12 text-5xl text-primary">{{ allowOrder.message }}</h1>
    <NuxtLink to="/mercadoao" class="btn">Volver al mercado</NuxtLink>
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      allowOrder: await $axios.$get(`market/allowSellUserOrder/${params.txSignature}`).catch(err => console.error(err)),
    };
  },
};
</script>

<style></style>
