<template>
  <div class="container">
    <br>
    <div class="text-center mb-12">
      <h1 class="section-title">Mercado AO</h1>

      <h3>Lista de items a la venta.</h3>

      <div v-if="itemsOnSale.length">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="flex flex-col items-center gap-y-4" v-for="item in itemsOnSale" :key="item.item_id" :id="item.item_id">

            <NuxtLink :to="`/mercadoao/item/${item.item_id}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                <img :src="item.Data.canvasImage" width="64px" />
              </div>

              <ul>
                <h4 class="text-gr gr-gold text-lg md:text-xl lg:text-2xl">{{ item.Data.NAME }}</h4>
                <li class="text-xs md:text-sm lg:text-base">{{ item.Data.NAME == item.Data.TEXTO ? "" : item.Data.TEXTO }}</li>
                <li class="text-green text-sm md:text-base lg:text-lg">Precio: {{ item.price_in_pesos.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS</li>
              </ul>
            </NuxtLink>
          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">No hay items en venta.</p>
      </section>

      <PagePadding />

      <h3>Lista de personajes en venta.</h3>
      <h4>Se actualiza cada 1 hs con la informacion mas reciente del mundo.</h4>
      <div v-if="usersOnSale.length">
        <span>Hay <strong>{{usersOnSale.length}}</strong> personajes listados.</span>

        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div class="flex flex-col items-center gap-y-4"
              v-for="user in usersOnSale" :key="user.name" :id="user.name">

            <NuxtLink :to="`/mercadoao/personaje/${user.name}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                <img :src="user.canvasImage" width="64px"/>
              </div>
              <ul>
                <h4 class="text-gr gr-gold text-lg md:text-xl lg:text-2xl">{{ user.name }}</h4>
                <li class="text-m gr-gold text-sm md:text-base lg:text-lg">Nivel: {{ user.level }}</li>
                <li class="text-m gr-gold text-sm md:text-base lg:text-lg">{{ user.price_in_mao.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS</li>
              </ul>
            </NuxtLink>
          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en venta.</p>
      </section>
    </div>
    <span>
      Leí y acepto
      <NuxtLink to="/reglamento" class="text-primary hover:underline"> el reglamento de juego al utilizar MAO</NuxtLink>
    </span>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return {
      usersOnSale: await $axios.$post(`users/getAllUsersOnSaleInMao`),
      itemsOnSale: await $axios.$get(`market/getAllItemsOnSale`),
    };
  },
};
</script>

<style>
  /* Add some spacing between each item in the grid */
  .container .grid .gap-y-4 {
    margin-bottom: 24px;
  }

  /* Style the NuxtLink components */
  .container .grid .flex .NuxtLink {
    text-decoration: none;
    color: inherit;
  }

  /* Style the item images */
  .container .grid .flex .border-2 {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }

  /* Style the item details */
  .container .grid .flex ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .container .grid .flex ul li {
    font-size: 18px;
    line-height: 1.5;
  }

  /* Style the price */
  .container .grid .flex ul li[style*="color: green"] {
    font-weight: bold;
  }

</style>
