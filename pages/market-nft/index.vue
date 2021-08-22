<template>
  <div class="container">
    <ul
      v-if="itemsOnSale.length"
      class="max-w-screen-md mx-auto bg-gray-900 border-2 border-gr border-gr-primary p-4 md:p-6"
    >
      <NuxtLink  v-for="item in itemsOnSale"
        :key="item.id"
        :id="item.id"
        :to="`/market-nft/${item.id}`"
        class="group flex flex-col p-3 md:p-6 border-b last:border-b-0 border-gray-700 hover:bg-white hover:bg-opacity-10 transition-colors duration-200 ease-out"
      >
        <h1 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          {{ item.obj_id }} {{ item.Name}}
        </h1>

        <h2 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          Precio: ${{ item.price }}
        </h2>

        <h2 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          Precio en oro dentro del mundo AO: ${{ item.Valor }}
        </h2>

        <h2 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          Rareza: {{ item.obj_type_rarity }}
        </h2>

        <h2 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          GrhIndex: {{ item.GrhIndex }}
        </h2>

        <h3 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          Comentario del vendedor: {{ item.description }}
        </h3>


        <h3 class="text-2xl text-primary group-hover:text-white transition-colors duration-200 ease-out">
          Descripcion del item: {{ item.Texto }}
        </h3>

        <time
          :datetime="item.published_date"
          :title="$dayjs(item.published_date).format('DD [de] MMMM [de] YYYY [a las] HH:mm')"
        >
          {{ $dayjs(item.published_date).fromNow() }}
        </time>
      </NuxtLink >
    </ul>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Aún no hay items a la venta.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      itemsOnSale: []
    }
  },
  async fetch() {
    this.itemsOnSale = await this.$axios.$get('nftmarket/getAllItemsOnSale')
  },
  head() {
    return {
      title: "Market NFT",
    };
  },
};
</script>

<style>
.news_body {
  @apply text-gray-200;
}

.news_body h1,
.news_body h2,
.news_body h3,
.news_body h4,
.news_body h5,
.news_body h6 {
  @apply mb-4 mt-6 md:mb-8 md:mt-12;
}

.news_body h1,
.news_body h2,
.news_body h3 {
  @apply border-b border-gray-800;
}

.news_body h4,
.news_body h5,
.news_body h6 {
  @apply text-xl mb-2 mt-6 md:mb-4 md:mt-8;
}

.news_body h1 {
  @apply text-3xl md:text-4xl pb-4 border-b border-gray-800;
}

.news_body h2 {
  @apply text-2xl md:text-3xl pb-3 border-b border-gray-800;
}

.news_body h3 {
  @apply text-xl md:text-2xl pb-3 border-b border-gray-800;
}

.news_body p {
  @apply my-2 md:my-3;
}

.news_body a {
  @apply text-primary underline;
}

.news ul {
  list-style-type: disc;
}

.news ol {
  list-style-type: decimal;
}

.news_body > ul,
.news_body > ol {
  @apply my-6;
}

.news ul,
.news ol {
  @apply pl-4;
}

.news ul > li,
.news ol > li {
  @apply pl-1;
}

.news ul > li::marker,
.news ol > li::marker {
  @apply text-gray-500;
}
</style>
