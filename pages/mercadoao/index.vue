<template>
  <div class="container">
    <PagePadding />

    <div class="text-center mb-12  lg:pt-36">
      <h1 class="section-title">Mercado AO</h1>

      <h4>Lista de items a la venta!</h4>

      <div v-if="itemsOnSale.length">
        <div class="container grid grid-cols-4">
          <div class="flex flex-col items-center gap-y-4"
               v-for="item in itemsOnSale" :key="item.item_id" :id="item.item_id">

            <NuxtLink :to="`/mercadoao/item/${item.item_id}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                <img :src="item.Data.canvasImage" class="" />
              </div>
              <h4 class="text-gr gr-gold">{{ item.Data.NAME }}</h4>
            </NuxtLink>
            <span class="gr-gold"> {{ item.Data.TEXTO }}</span>
            <span style="color: green">Precio: {{ item.price_in_tokens }} AO Tokens</span>

          </div>
        </div>
      </div>
      <section v-else class="text-center mt-24">
        <p class="text-2xl">No hay items en venta.</p>
      </section>

      <PagePadding />

      <h4>Lista de personajes en Venta!</h4>

      <div v-if="usersOnSale.length">
        <div class="container grid grid-cols-4">
          <div class="flex flex-col items-center gap-y-4"
               v-for="user in usersOnSale" :key="user.id" :id="user.id">

            <NuxtLink :to="`/mercadoao/personaje/${user.id}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                <img :src="user.canvasImage" class="" />
              </div>
              <h4 class="text-gr gr-gold">{{ user.name }}</h4>
            </NuxtLink>
            <span class="gr-gold">Nivel: {{ user.level }}</span>
            <span class="gr-gold">Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY") }}</span>

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

<style></style>
