<template>
  <div class="container">
    <br>
    <br>
    <h1 class="mb-12 text-5xl text-primary">Confirmacion de orden</h1>

    <section v-if="statusOrderAO20 == 'success'">Tu orden de compra esta siendo procesada correctamente, pronto recibiras un email con instrucciones. Si compraste un item sera depositado en la boveda, Si compraste un personaje asegurate de tener un slot de personaje disponible.</section>
    <section v-else-if="statusOrderAO20 == 'pending'">Tu orden esta pendiente de pago, por favor espera unos momentos y verifica que el pago fue procesado.</section>
    <section v-else-if="statusOrderAO20 == 'failure'">Tu orden de compra no pudo ser completada, por favor intenta de nuevo con otro metodo de pago.</section>
    <section v-else>Hubo un error en tu orden de compra, por favor intentalo de nuevo.</section>

    <NuxtLink to="/mercadoao" class="btn">Volver al mercado</NuxtLink>

  </div>
</template>

<script>

export default {
  data() {
    return {
      statusOrderAO20: this.$route.query.statusAO20,
    };
  },
};
</script>

<style></style>
