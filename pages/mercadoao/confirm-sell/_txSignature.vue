<template>
  <div class="container">
    <h1 class="mb-12 text-5xl text-primary">Confirmacion de orden hecha, ahora hay que esperar que el comprador pague...</h1>

    <NuxtLink to="mercadoao" class="btn">Volver al mercado</NuxtLink>

  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      user: await $axios.$post(`market/allowSellUserOrder/${params.uid}`),
    };
  },
};
</script>

<style></style>
