<template>
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="section-title">Mercado AO</h1>

      <h4>Lista de items a la venta.</h4>

      <div v-if="itemsOnSale.length">
        <div class="container grid grid-cols-4">
          <div class="flex flex-col items-center gap-y-4" v-for="item in itemsOnSale" :key="item.item_id" :id="item.item_id">

            <NuxtLink :to="`/mercadoao/item/${item.item_id}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                <img :src="item.Data.canvasImage" class="" />
              </div>

              <ul>
                <li style="color: yellow">{{ item.Data.NAME }}</li>
                <li class="text-xs">{{ item.Data.TEXTO }}</li>
                <li style="color: green">Precio: {{ item.price_in_pesos.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS</li>
              </ul>
            </NuxtLink>
          </div>
        </div>
      </div>
      <section v-else class="text-center mt-24">
        <p class="text-2xl">No hay items en venta.</p>
      </section>

      <PagePadding />

      <h4>Lista de personajes en Venta!</h4>
      <h6>Se actualiza cada 1 hs con la informacion mas reciente del mundo.</h6>

      <div v-if="usersOnSale.length">
        <div class="container grid grid-cols-4">
          <div class="flex flex-col items-center gap-y-4"
               v-for="user in usersOnSale" :key="user.id" :id="user.id">

            <NuxtLink :to="`/mercadoao/personaje/${user.id}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                <img :src="user.canvasImage" class="" />
              </div>

              <ul>
                <h4 class="text-gr gr-gold">{{ user.name }}</h4>
                <li class="text-m gr-gold">Nivel: {{ user.level }}</li>
                <li style="text-m gr-gold">Precio: {{ user.price_in_mao.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0, maximumFractionDigits: 0 }) }} ARS</li>
                <li class="text-xs gr-gold">Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY") }}</li>
              </ul>
            </NuxtLink>
            <br>
          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en venta.</p>
      </section>
    </div>
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

  .container .grid .flex .border-2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    .section-title {
    font-family: "Times New Roman", Times, serif;
    font-size: 32px;
    color: #8B4513;
  }

  h4 {
    font-family: "Goudy Old Style", Garamond, serif;
    font-size: 24px;
    color: #8B4513;
  }

  h6 {
    font-family: "Goudy Old Style", Garamond, serif;
    font-size: 18px;
    color: #8B4513;
  }

  ul {
    list-style: none;
    font-family: "Goudy Old Style", Garamond, serif;
    color: #8B4513;
  }

  li {
    font-size: 16px;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .gap-y-4 {
    gap: 16px;
  }

  .border-2 {
    border-width: 2px;
  }

  .border-gr {
    border-color: #8B4513;
  }

  .border-gr-primary {
    border-color: #D2691E;
  }

  .bg-gray-900 {
    background-color: #2F4F4F;
  }

  .p-12 {
    padding: 48px;
  }

  .text-m {
    font-size: 24px;
  }

  .text-xs {
    font-size: 12px;
  }

  .text-gr {
    color: #8B4513;
  }

  .gr-gold {
    color: #DAA520;
  }

</style>
