<template>
  <div class="container max-w-screen-lg">
    <article class="news">
      <header class="pb-3 border-b border-gr border-gr-silver">
        <h1 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">{{ itemOnSale.Name }}</h1>
        <div class="flex items-center text-lg md:text-xl">
          <time :datetime="itemOnSale.published_date">
            <span v-if="$dayjs(itemOnSale.published_date).year() != $dayjs().year()">{{
              $dayjs(itemOnSale.published_date).format("DD [de] MMMM [de] YYYY [a las] HH:mm")
            }}</span>
            <span v-else>{{ $dayjs(itemOnSale.published_date).format("DD [de] MMMM [a las] HH:mm") }}</span>
          </time>
          <span class="mx-2">-</span>
        </div>
      </header>

      <main class="mt-8 news_body md:mt-12">
        <h6>Tipo de objeto: {{ itemOnSale.ObjType }}</h6>
        <h6>Precio: {{ itemOnSale.price }}</h6>
        <h6>Estado: {{ itemOnSale.status }}</h6>
        <h6>Rareza: {{ itemOnSale.obj_type_rarity }}</h6>

        <h4 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">Comentario vendedor: {{ itemOnSale.description }}</h4>
        <h4 class="mb-3 text-4xl md:text-5xl text-primary md:mb-6">Descripcion del item en el juego: {{ itemOnSale.Texto }}</h4>
      </main>

      <button>Comprar</button>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      itemOnSale: await $axios.$get(`nftmarket/getItemOnSaleById/${params.uid}`),
    }
  },
  head() {
    return {
      title: this.itemOnSale.Name,
    };
  },
};
</script>
