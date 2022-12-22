<template>
  <div class="container">
      <br>
      <br>
      <h2 class="section-title text-center mb-4 uppercase">Monturas</h2>

      <div v-if="monturas.length">
          <div v-for="montura in monturas" :key="montura.item_id">

              <!-- Item -->
              <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                  <div class="flex-none"><img :src="montura.Data.canvasImage" :alt="montura.Data.NAME" class="mx-auto md:mx-0"></div>
                  <div class="w-full">
                      <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                          <span class="flex-1">
                              <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ montura.Data.NAME }}</span>
                              <span class="block md:flex text-gray-600">{{ montura.Data.TEXTO }}</span>
                          </span>
                          <span v-if="montura.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ montura.Data.VALOR }}</span>
                      </div>

                      <!-- Caracteristicas -->
                      <div class="block-info">
                          <span class="w-40">Características: </span>
                          <span class="">
                              <span v-if="montura.Data.MINELV" class="mr-5" title="Nivel Mínimo"><span class="color-icon color-icon-sm color-icon-minlvl"></span>{{ montura.Data.MINELV }}</span>
                              <span v-if="montura.Data.SKILLREQUERIDO" class="mr-5" title="Skill Requerido"><span class="color-icon color-icon-sm color-icon-skills"></span>{{ montura.Data.SKILLREQUERIDO }}</span>
                              <span v-if="montura.Data.VELOCIDAD" class="mr-5" title="Velocidad"><span class="color-icon color-icon-sm color-icon-velocidad"></span>{{ montura.Data.VELOCIDAD }}</span>
                              <span v-if="montura.Data.INTIRABLE" class="mr-5" title="No se puede tirar"><span class="color-icon color-icon-sm color-icon-notirable"></span></span>
                              <span v-else class="mr-5" title="Se puede tirar"><span class="color-icon color-icon-sm color-icon-tirable"></span></span>
                              <span v-if="montura.Data.INSTRANSFERIBLE" class="mr-5" title="No se puede transferir"><span class="color-icon color-icon-sm color-icon-notransferible"></span></span>
                              <span v-else class="mr-5" title="Se puede transferir"><span class="color-icon color-icon-sm color-icon-transferible"></span></span>
                              <span v-if="montura.Data.NOSECAE" class="mr-5" title="No se cae"><span class="color-icon color-icon-sm color-icon-nosecae"></span></span>
                              <span v-else class="mr-5" title="Se cae"><span class="color-icon color-icon-sm color-icon-secae"></span></span>
                          </span>
                      </div>

                      <!-- Clases prohibidas -->
                      <div v-if="montura.Data.CP1" class="block-info">
                          <span class="w-40">Clases Prohibidas: </span>
                          <span>
                              <span v-if="montura.Data.CP1">{{montura.Data.CP1}}</span>
                              <span v-if="montura.Data.CP2">, {{montura.Data.CP2}}</span>
                              <span v-if="montura.Data.CP3">, {{montura.Data.CP3}}</span>
                              <span v-if="montura.Data.CP4">, {{montura.Data.CP4}}</span>
                              <span v-if="montura.Data.CP5">, {{montura.Data.CP5}}</span>
                              <span v-if="montura.Data.CP6">, {{montura.Data.CP6}}</span>
                              <span v-if="montura.Data.CP7">, {{montura.Data.CP7}}</span>
                              <span v-if="montura.Data.CP8">, {{montura.Data.CP8}}</span>
                              <span v-if="montura.Data.CP9">, {{montura.Data.CP9}}</span>
                              <span v-if="montura.Data.CP10">, {{montura.Data.CP10}}</span>
                              <span v-if="montura.Data.CP11">, {{montura.Data.CP11}}</span>
                              <span v-if="montura.Data.CP12">, {{montura.Data.CP12}}</span>
                              <span v-if="montura.Data.CP13">, {{montura.Data.CP13}}</span>
                          </span>
                      </div>

                  </div><!-- /.w-full -->
              </div><!-- /Item -->
          </div><!-- /v-for -->
      </div><!-- /v-if -->

    <section v-else class="text-center">
        <div id="circularG">
            <div id="circularG_1" class="circularG"></div>
            <div id="circularG_2" class="circularG"></div>
            <div id="circularG_3" class="circularG"></div>
            <div id="circularG_4" class="circularG"></div>
            <div id="circularG_5" class="circularG"></div>
            <div id="circularG_6" class="circularG"></div>
            <div id="circularG_7" class="circularG"></div>
            <div id="circularG_8" class="circularG"></div>
        </div>
      <p class="text-2xl">Cargando monturas.</p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      monturas: [],
    };
  },
  async fetch() {
    this.monturas = await this.$axios.$get("/dats/getAllMonturas");
  },
  head() {
    return {
      title: "Wiki - Monturas",
    };
  },
};
</script>

<style>

    select:required:invalid {
      color: gray;
    }

    option[value=""][disabled] {
      display: none;
    }

    .color-icon {
        @apply align-middle mr-2;
    }

    .block-info {
        @apply block border-b border-gray-700 md:flex text-center md:text-left py-2;
    }

</style>
