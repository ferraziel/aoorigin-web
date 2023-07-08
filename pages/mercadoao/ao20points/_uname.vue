<template>
  <div class="container py-10 mx-auto">
    <div v-if="tier" class="product-card mx-auto text-center">
      <h1 class="product-title text-3xl mb-5">{{ tier.name }}</h1>
      <img :src="require(`~/assets/img/mao/${tier.image}`)" class="product-image mx-auto mb-5" alt="Product image" />

      <ul class="product-pricing list-disc list-inside text-left">
        <li class="price-ars text-green-500"> {{ formatPrice(tier.price_in_pesos, 'ARS') }} ARS</li>
        <li class="price-usd text-green-500"> {{ formatPrice(tier.price_in_usd, 'USD') }}</li>
        <li class="credits-qty text-purple-500">Cantidad creditos: {{ tier.qty_points }}</li>
      </ul>

      <PaymentMethodSelector :item="tier" qtyItems="1" saleType="AO20POINTS" />
    </div>

    <section v-else class="error-message text-center mt-24">
      <p class="text-2xl">El tier no existe o no esta a la venta.</p>
    </section>
  </div>
</template>

<script>
import { priceMixin } from '@/mixins/priceMixin.js';

export default {
  mixins: [priceMixin],

  async asyncData({ $axios, params }) {
    return {
      tier: await $axios.$get(`market/getAO20PointsOnSaleByTierName/${params.uname}`)
    };
  },
  head() {
    return {
      title: this.tier ? `${this.tier.name} - AO20 Creditos` : "Creditos Tier no encontrado"
    };
  },
};
</script>

<style>
.product-card {
  max-width: 600px;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-title {
  color: #333;
}

.cta-button {
  background-color: #f60;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
