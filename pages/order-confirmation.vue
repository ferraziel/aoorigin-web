<template>
  <div class="container">
    <h1 class="mb-12 text-5xl text-primary">Confirmacion de orden</h1>

    <section v-if="statusOrder == 'confirmed'">Tu orden de compra esta confirmada, disfruta tu item.</section>
    <section v-else-if="statusOrder == 'pending'">Tu orden esta pendiente, por favor espera unos minutos a que procese.</section>
    <section v-else-if="statusOrder == 'failure'">Tu orden de compra no pudo ser completada, por favor intenta de nuevo con otro metodo de pago.</section>
    <section v-else>Hubo un error en tu orden de compra, por favor intentalo de nuevo.</section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      statusOrder: this.$route.query.statusAO20,
    };
  },
};
</script>

<style></style>
