<template>
  <div class="container">
    <div v-if="tier" lass="text-center mb-12">
      <br>
      <br>
      <h1 class="section-title">{{ tier.name }}</h1>
      <img :src="require(`~/assets/img/mao/${tier.image}`)" width="300px"/>

      <ul>
        <!-- <li style="color: green">
          Precio: {{ item.price_in_tokens }} AOLB Tokens
          <img
            src="https://argentumonline.org/assets/images/ao-libre-aolb-logo.png"
            alt="AOLB Token"
            class="w-8 h-8 rounded-full"
          />
        </li> -->

        <li style="color: green">
          Precio: {{ tier.price_in_pesos.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS
        </li>

        <li style="color: purple">
          Puntos AO20: {{ tier.qty_points }}
        </li>
      </ul>

      <h1 style="color: red" v-if="!$auth.loggedIn">Debes de iniciar sesion para poder comprar puntos.</h1>

      <PaymentMethodSelector :item="tier" saleType="AO20POINTS"/>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">El item no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>
import PaymentMethodSelector from '~/components/PaymentMethodSelector.vue';

export default {
  components: { PaymentMethodSelector },

  async asyncData({ $axios, params }) {
    return {
      tier: await $axios.$get(`market/getAO20PointsOnSaleByTierName/${params.uname}`)
    };
  },
  head() {
    return {
      title: this.tier ? `${this.tier.name} - AO20 Points Tier` : "AO20 Points Tier no encontrado"
    };
  },
};
</script>

<style></style>
