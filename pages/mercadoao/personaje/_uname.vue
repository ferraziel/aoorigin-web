<template>
  <div class="container">
    <br>
    <br>
    <div v-if="user" class="text-center mb-12">
      <h1 class="section-title text-3xl font-bold">{{ user.name }}</h1>
      <UserAndItemsRenderer :user="user" />

      <div v-if="user.mao_history.length > 0">
        <hr>
        <h2 class="section-title text-3xl font-bold">Historial de venta</h2>
        <ul>
          <li v-for="transaction in user.mao_history" :key="transaction.updated_at">
            {{ $dayjs(transaction.updated_at).format("DD [de] MMMM [de] YYYY") }} - ${{ transaction.price.toLocaleString('es-AR') }}
          </li>
        </ul>
      </div>

      <br>
      <hr>
      <br>

      <PaymentMethodSelector :user="user" saleType="USER"/>

      <MessageBox :status="buyUserStatus" :message="buyUserMessage" />
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl font-bold">El personaje no existe o no esta a la venta o el vendedor no linkeo su cuenta de MercadoPago para recibir el pago.</p>
    </section>
  </div>
</template>


<script>

export default {
  async asyncData({ $axios, params }) {
    return {
      user: await $axios.$post(`users/getUserOnSaleByName/${params.uname}`).catch(err => console.error(err)),
      buyUserMessage: "",
      buyUserStatus: null,
      isSubmited: false,
    };
  },

  head() {
    return {
      title: this.user && this.user.name ? `${this.user.name} ` : "Personaje no encontrado"
    };
  }
};
</script>

<style>
</style>
