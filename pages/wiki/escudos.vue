<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Escudos</h2>
    <div v-if="shields.length">
        <div v-for="shield in shields" :key="shield.item_id">

            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img :src="shield.Data.canvasImage" :alt="shield.Data.NAME" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ shield.Data.NAME }}</span>
                        </span>
                        <span v-if="shield.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ shield.Data.VALOR }}</span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="shield.Data.MINDEF" class="mr-5" title="Defensa Mínima"><span class="color-icon color-icon-sm color-icon-mindef"></span>{{ shield.Data.MINDEF }}</span>
                            <span v-if="shield.Data.MAXDEF" class="mr-5" title="Defensa Máxima"><span class="color-icon color-icon-sm color-icon-maxdef"></span>{{ shield.Data.MAXDEF }}</span>
                            <span v-if="shield.Data.MINELV" class="mr-5" title="Nivel Mínimo"><span class="color-icon color-icon-sm color-icon-minlvl"></span>{{ shield.Data.MINELV }}</span>
                            <span v-if="shield.Data.RESISTENCIAMAGICA" class="mr-5" title="Resistencia Mágica"><span class="color-icon color-icon-sm color-icon-resistenciamagica"></span>{{ shield.Data.RESISTENCIAMAGICA }}</span>
                        </span>
                    </div>

                    <!-- Crafteo -->
                    <div v-if="shield.Data.LINGH || shield.Data.LINGP || shield.Data.LINGO || shield.Data.SKHERRERIA || shield.Data.MADERA || shield.Data.MADERAELFICA || shield.Data.SKCARPINTERIA" class="block-info">
                        <span class="w-40">Crafteo: </span>
                        <span class="">
                            <span v-if="shield.Data.LINGH" class="mr-5" title="Lingotes de Hierro"><span class="color-icon color-icon-sm color-icon-lingotehierro"></span>{{ shield.Data.LINGH }}</span>
                            <span v-if="shield.Data.LINGP" class="mr-5" title="Lingotes de Plata"><span class="color-icon color-icon-sm color-icon-lingoteplata"></span>{{ shield.Data.LINGP }}</span>
                            <span v-if="shield.Data.LINGO" class="mr-5" title="Lingotes de Oro"><span class="color-icon color-icon-sm color-icon-lingoteoro"></span>{{ shield.Data.LINGO }}</span>
                            <span v-if="shield.Data.SKHERRERIA" class="mr-5" title="Skill de herrería"><span class="color-icon color-icon-sm color-icon-herrero"></span>{{ shield.Data.SKHERRERIA }}</span>
                            <span v-if="shield.Data.MADERA" class="mr-5" title="Madera"><span class="color-icon color-icon-sm color-icon-madera"></span>{{ shield.Data.MADERA }}</span>
                            <span v-if="shield.Data.MADERAELFICA" class="mr-5" title="Madera Elfica"><span class="color-icon color-icon-sm color-icon-maderaelfica"></span>{{ shield.Data.MADERAELFICA }}</span>
                            <span v-if="shield.Data.SKCARPINTERIA" class="mr-5" title="Skills de carpintería"><span class="color-icon color-icon-sm color-icon-carpintero"></span>{{ shield.Data.SKCARPINTERIA }}</span>
                        </span>
                    </div>

                    <!-- Clases permitidas -->
                    <div v-if="shield.Data.ClasesPermitidas" class="block-info">
                        <span class="w-40">Clases Permitidas: </span>
                        <span>{{shield.Data.ClasesPermitidas}}</span>
                    </div>

                </div>
            </div><!-- /Item -->
        </div><!-- /v-for -->
    </div><!-- /v-if -->

    <section v-else class="text-center mt-24">
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
      <p class="text-2xl">Cargando escudos.</p>
    </section>
</div><!-- /container -->
</template>

<script>
export default {
  data() {
    return {
      shields: [],
    };
  },
  async fetch() {
    this.shields = await this.$axios.$get("/dats/getAllShields");
  },
  head() {
    return {
      title: "Wiki - Escudos",
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
