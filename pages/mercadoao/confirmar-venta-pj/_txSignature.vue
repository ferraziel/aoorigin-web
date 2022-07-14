<template>
  <div class="container">
    <h1 class="mb-12 text-5xl text-primary">{{ allowOrder.message }}</h1>
    <!-- <h1 class="mb-12 text-5xl text-primary">{{ allowOrder }}</h1> -->
    <NuxtLink to="/mercadoao" class="btn">Volver al mercado</NuxtLink>
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      allowOrder: await $axios.$get(`market/allowSellUserOrder/${params.txSignature}`)
                              .catch(err => {
                                console.error(err)
                                if (err.message.includes("401")) {
                                  return { message : "Para confirmar una venta de personaje tenes que iniciar sesion." };
                                }

                                if (err.message.includes("404")) {
                                  return { message : "No se encontro una orden de compra valida." };
                                }

                                return err
                              }),
    };
  },
};
</script>

<style></style>
