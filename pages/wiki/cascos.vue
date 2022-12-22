<template>
  <div class="container">
      <br>
      <br>
      <h2 class="section-title text-center mb-4 uppercase">Cascos</h2>
      <div v-if="helmets.length">
          <div v-for="helmet in helmets" :key="helmet.item_id">

              <!-- Item -->
              <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                  <div class="flex-none"><img :src="helmet.Data.canvasImage" :alt="helmet.Data.NAME" class="mx-auto md:mx-0"></div>
                  <div class="w-full">
                      <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                          <span class="flex-1">
                              <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ helmet.Data.NAME }}</span>
                          </span>
                          <span v-if="helmet.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon align-middle mr-2 color-icon-sm color-icon-gold"></span>{{ helmet.Data.VALOR }}</span>
                      </div>

                      <!-- Caracteristicas -->
                      <div class="block-info">
                          <span class="w-40">Características: </span>
                          <span class="">
                              <span v-if="helmet.Data.MINDEF" class="mr-5" title="Defensa Mínima"><span class="color-icon color-icon-sm color-icon-mindef"></span>{{ helmet.Data.MINDEF }}</span>
                              <span v-if="helmet.Data.MAXDEF" class="mr-5" title="Defensa Máxima"><span class="color-icon color-icon-sm color-icon-maxdef"></span>{{ helmet.Data.MAXDEF }}</span>
                              <span v-if="helmet.Data.MINELV" class="mr-5" title="Nivel Mínimo"><span class="color-icon align-middle mr-2 color-icon-sm color-icon-minlvl"></span>{{ helmet.Data.MINELV }}</span>
                              <span v-if="helmet.Data.RESISTENCIAMAGICA" class="mr-5" title="Resistencia Mágica"><span class="color-icon align-middle mr-2 color-icon-sm color-icon-resistenciamagica"></span>{{ helmet.Data.RESISTENCIAMAGICA }}</span>
                          </span>
                      </div>

                      <!-- Crafteo -->
                      <div v-if="helmet.Data.LINGH || helmet.Data.LINGP || helmet.Data.LINGO || helmet.Data.SKHERRERIA || helmet.Data.MADERA || helmet.Data.MADERAELFICA || helmet.Data.SKCARPINTERIA" class="block-info">
                          <span class="w-40">Crafteo: </span>
                          <span class="">
                              <span v-if="helmet.Data.LINGH" class="mr-5" title="Lingotes de Hierro"><span class="color-icon color-icon-sm color-icon-lingotehierro"></span>{{ helmet.Data.LINGH }}</span>
                              <span v-if="helmet.Data.LINGP" class="mr-5" title="Lingotes de Plata"><span class="color-icon color-icon-sm color-icon-lingoteplata"></span>{{ helmet.Data.LINGP }}</span>
                              <span v-if="helmet.Data.LINGO" class="mr-5" title="Lingotes de Oro"><span class="color-icon color-icon-sm color-icon-lingoteoro"></span>{{ helmet.Data.LINGO }}</span>
                              <span v-if="helmet.Data.SKHERRERIA" class="mr-5" title="Skill de herrería"><span class="color-icon color-icon-sm color-icon-herrero"></span>{{ helmet.Data.SKHERRERIA }}</span>
                              <span v-if="helmet.Data.MADERA" class="mr-5" title="Madera"><span class="color-icon color-icon-sm color-icon-madera"></span>{{ helmet.Data.MADERA }}</span>
                              <span v-if="helmet.Data.MADERAELFICA" class="mr-5" title="Madera Elfica"><span class="color-icon color-icon-sm color-icon-maderaelfica"></span>{{ helmet.Data.MADERAELFICA }}</span>
                              <span v-if="helmet.Data.SKCARPINTERIA" class="mr-5" title="Skills de carpintería"><span class="color-icon color-icon-sm color-icon-carpintero"></span>{{ helmet.Data.SKCARPINTERIA }}</span>
                          </span>
                      </div>

                      <!-- Clases prohibidas -->
                      <div v-if="helmet.Data.CP1" class="block-info">
                          <span class="w-40">Clases Prohibidas: </span>
                          <span>
                              <span v-if="helmet.Data.CP1">{{helmet.Data.CP1}}</span>
                              <span v-if="helmet.Data.CP2">, {{helmet.Data.CP2}}</span>
                              <span v-if="helmet.Data.CP3">, {{helmet.Data.CP3}}</span>
                              <span v-if="helmet.Data.CP4">, {{helmet.Data.CP4}}</span>
                              <span v-if="helmet.Data.CP5">, {{helmet.Data.CP5}}</span>
                              <span v-if="helmet.Data.CP6">, {{helmet.Data.CP6}}</span>
                              <span v-if="helmet.Data.CP7">, {{helmet.Data.CP7}}</span>
                              <span v-if="helmet.Data.CP8">, {{helmet.Data.CP8}}</span>
                              <span v-if="helmet.Data.CP9">, {{helmet.Data.CP9}}</span>
                              <span v-if="helmet.Data.CP10">, {{helmet.Data.CP10}}</span>
                              <span v-if="helmet.Data.CP11">, {{helmet.Data.CP11}}</span>
                              <span v-if="helmet.Data.CP12">, {{helmet.Data.CP12}}</span>
                              <span v-if="helmet.Data.CP13">, {{helmet.Data.CP13}}</span>
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
      <p class="text-2xl">Cargando cascos.</p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      helmets: [],
    };
  },
  async fetch() {
    this.helmets = await this.$axios.$get("/dats/getAllHelmets");
  },
  head() {
    return {
      title: "Wiki - Cascos / Sombreros",
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
