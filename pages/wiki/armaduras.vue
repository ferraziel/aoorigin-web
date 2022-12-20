<template>
  <div class="container">
  <br>
  <br>
  <h2 class="section-title text-center mb-4 uppercase">Armaduras</h2>
    <div v-if="armours.length">
        <div v-for="armour in armours" :key="armour.item_id">

            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img :src="armour.Data.canvasImage" :alt="armour.Data.NAME" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ armour.Data.NAME }}</span>
                        </span>
                        <span v-if="armour.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ armour.Data.VALOR }}</span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="armour.Data.MINDEF" class="mr-5" title="Defensa Mínima"><span class="color-icon color-icon-sm color-icon-mindef"></span>{{ armour.Data.MINDEF }}</span>
                            <span v-if="armour.Data.MAXDEF" class="mr-5" title="Defensa Máxima"><span class="color-icon color-icon-sm color-icon-maxdef"></span>{{ armour.Data.MAXDEF }}</span>
                            <span v-if="armour.Data.MINELV" class="mr-5" title="Nivel Mínimo"><span class="color-icon color-icon-sm color-icon-minlvl"></span>{{ armour.Data.MINELV }}</span>
                            <span v-if="armour.Data.RESISTENCIAMAGICA" class="mr-5" title="Resistencia Mágica"><span class="color-icon color-icon-sm color-icon-resistenciamagica"></span>{{ armour.Data.RESISTENCIAMAGICA }}</span>
                        </span>
                    </div>

                    <!-- Crafteo -->
                    <div v-if="armour.Data.LINGH || armour.Data.LINGP || armour.Data.LINGO || armour.Data.SKHERRERIA || armour.Data.MADERA || armour.Data.MADERAELFICA || armour.Data.SKCARPINTERIA" class="block-info">
                        <span class="w-40">Crafteo: </span>
                        <span class="">
                            <span v-if="armour.Data.LINGH" class="mr-5" title="Lingotes de Hierro"><span class="color-icon color-icon-sm color-icon-lingotehierro"></span>{{ armour.Data.LINGH }}</span>
                            <span v-if="armour.Data.LINGP" class="mr-5" title="Lingotes de Plata"><span class="color-icon color-icon-sm color-icon-lingoteplata"></span>{{ armour.Data.LINGP }}</span>
                            <span v-if="armour.Data.LINGO" class="mr-5" title="Lingotes de Oro"><span class="color-icon color-icon-sm color-icon-lingoteoro"></span>{{ armour.Data.LINGO }}</span>
                            <span v-if="armour.Data.SKHERRERIA" class="mr-5" title="Skill de herrería"><span class="color-icon color-icon-sm color-icon-herrero"></span>{{ armour.Data.SKHERRERIA }}</span>
                            <span v-if="armour.Data.MADERA" class="mr-5" title="Madera"><span class="color-icon color-icon-sm color-icon-madera"></span>{{ armour.Data.MADERA }}</span>
                            <span v-if="armour.Data.MADERAELFICA" class="mr-5" title="Madera Elfica"><span class="color-icon color-icon-sm color-icon-maderaelfica"></span>{{ armour.Data.MADERAELFICA }}</span>
                            <span v-if="armour.Data.SKCARPINTERIA" class="mr-5" title="Skills de carpintería"><span class="color-icon color-icon-sm color-icon-carpintero"></span>{{ armour.Data.SKCARPINTERIA }}</span>
                        </span>
                    </div>

                    <!-- Clases prohibidas -->
                    <div v-if="armour.Data.CP1" class="block-info">
                        <span class="w-40">Clases Prohibidas: </span>
                        <span>
                            <span v-if="armour.Data.CP1">{{armour.Data.CP1}}</span>
                            <span v-if="armour.Data.CP2">, {{armour.Data.CP2}}</span>
                            <span v-if="armour.Data.CP3">, {{armour.Data.CP3}}</span>
                            <span v-if="armour.Data.CP4">, {{armour.Data.CP4}}</span>
                            <span v-if="armour.Data.CP5">, {{armour.Data.CP5}}</span>
                            <span v-if="armour.Data.CP6">, {{armour.Data.CP6}}</span>
                            <span v-if="armour.Data.CP7">, {{armour.Data.CP7}}</span>
                            <span v-if="armour.Data.CP8">, {{armour.Data.CP8}}</span>
                            <span v-if="armour.Data.CP9">, {{armour.Data.CP9}}</span>
                            <span v-if="armour.Data.CP10">, {{armour.Data.CP10}}</span>
                            <span v-if="armour.Data.CP11">, {{armour.Data.CP11}}</span>
                            <span v-if="armour.Data.CP12">, {{armour.Data.CP12}}</span>
                            <span v-if="armour.Data.CP13">, {{armour.Data.CP13}}</span>
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
      <p class="text-2xl">Cargando armaduras.</p>
    </section>

    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Armaduras Faccionarias</h2>
    <div v-if="armoursFacciones.length">
        <div v-for="armourFacciones in armoursFacciones" :key="armourFacciones.item_id">

            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img :src="armourFacciones.Data.canvasImage" :alt="armourFacciones.Data.NAME" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ armourFacciones.Data.NAME }}</span>
                        </span>
                        <span v-if="armourFacciones.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ armourFacciones.Data.VALOR }}</span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="armourFacciones.Data.MINDEF" class="mr-5" title="Defensa Mínima"><span class="color-icon color-icon-sm color-icon-mindef"></span>{{ armourFacciones.Data.MINDEF }}</span>
                            <span v-if="armourFacciones.Data.MAXDEF" class="mr-5" title="Defensa Máxima"><span class="color-icon color-icon-sm color-icon-maxdef"></span>{{ armourFacciones.Data.MAXDEF }}</span>
                            <span v-if="armourFacciones.Data.MINELV" class="mr-5" title="Nivel Mínimo"><span class="color-icon color-icon-sm color-icon-minlvl"></span>{{ armourFacciones.Data.MINELV }}</span>
                            <span v-if="armourFacciones.Data.RESISTENCIAMAGICA" class="mr-5" title="Resistencia Mágica"><span class="color-icon color-icon-sm color-icon-resistenciamagica"></span>{{ armourFacciones.Data.RESISTENCIAMAGICA }}</span>
                        </span>
                    </div>

                    <!-- Crafteo -->
                    <div v-if="armourFacciones.Data.LINGH || armourFacciones.Data.LINGP || armourFacciones.Data.LINGO || armourFacciones.Data.SKHERRERIA || armourFacciones.Data.MADERA || armourFacciones.Data.MADERAELFICA || armourFacciones.Data.SKCARPINTERIA" class="block-info">
                        <span class="w-40">Crafteo: </span>
                        <span class="">
                            <span v-if="armourFacciones.Data.LINGH" class="mr-5" title="Lingotes de Hierro"><span class="color-icon color-icon-sm color-icon-lingotehierro"></span>{{ armourFacciones.Data.LINGH }}</span>
                            <span v-if="armourFacciones.Data.LINGP" class="mr-5" title="Lingotes de Plata"><span class="color-icon color-icon-sm color-icon-lingoteplata"></span>{{ armourFacciones.Data.LINGP }}</span>
                            <span v-if="armourFacciones.Data.LINGO" class="mr-5" title="Lingotes de Oro"><span class="color-icon color-icon-sm color-icon-lingoteoro"></span>{{ armourFacciones.Data.LINGO }}</span>
                            <span v-if="armourFacciones.Data.SKHERRERIA" class="mr-5" title="Skill de herrería"><span class="color-icon color-icon-sm color-icon-herrero"></span>{{ armourFacciones.Data.SKHERRERIA }}</span>
                            <span v-if="armourFacciones.Data.MADERA" class="mr-5" title="Madera"><span class="color-icon color-icon-sm color-icon-madera"></span>{{ armourFacciones.Data.MADERA }}</span>
                            <span v-if="armourFacciones.Data.MADERAELFICA" class="mr-5" title="Madera Elfica"><span class="color-icon color-icon-sm color-icon-maderaelfica"></span>{{ armourFacciones.Data.MADERAELFICA }}</span>
                            <span v-if="armourFacciones.Data.SKCARPINTERIA" class="mr-5" title="Skills de carpintería"><span class="color-icon color-icon-sm color-icon-carpintero"></span>{{ armourFacciones.Data.SKCARPINTERIA }}</span>
                        </span>
                    </div>

                    <!-- Clases prohibidas -->
                    <div v-if="armourFacciones.Data.CP1" class="block-info">
                        <span class="w-40">Clases Prohibidas: </span>
                        <span>
                            <span v-if="armourFacciones.Data.CP1">{{armourFacciones.Data.CP1}}</span>
                            <span v-if="armourFacciones.Data.CP2">, {{armourFacciones.Data.CP2}}</span>
                            <span v-if="armourFacciones.Data.CP3">, {{armourFacciones.Data.CP3}}</span>
                            <span v-if="armourFacciones.Data.CP4">, {{armourFacciones.Data.CP4}}</span>
                            <span v-if="armourFacciones.Data.CP5">, {{armourFacciones.Data.CP5}}</span>
                            <span v-if="armourFacciones.Data.CP6">, {{armourFacciones.Data.CP6}}</span>
                            <span v-if="armourFacciones.Data.CP7">, {{armourFacciones.Data.CP7}}</span>
                            <span v-if="armourFacciones.Data.CP8">, {{armourFacciones.Data.CP8}}</span>
                            <span v-if="armourFacciones.Data.CP9">, {{armourFacciones.Data.CP9}}</span>
                            <span v-if="armourFacciones.Data.CP10">, {{armourFacciones.Data.CP10}}</span>
                            <span v-if="armourFacciones.Data.CP11">, {{armourFacciones.Data.CP11}}</span>
                            <span v-if="armourFacciones.Data.CP12">, {{armourFacciones.Data.CP12}}</span>
                            <span v-if="armourFacciones.Data.CP13">, {{armourFacciones.Data.CP13}}</span>
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
      <p class="text-2xl">Cargando armaduras faccionarias.</p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      armours: [],
      armoursFacciones: [],
    };
  },
  async fetch() {
    this.armours = await this.$axios.$get("/dats/getAllArmours");
    this.armoursFacciones = await this.$axios.$get("/dats/getAllArmoursFacciones");
  },
  head() {
    return {
      title: "Wiki - Armaduras",
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
