<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Armas</h2>
    <div v-if="weapons.length">
        <div v-for="weapon in weapons" :key="weapon.item_id">

            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img :src="weapon.Data.canvasImage" :alt="weapon.Data.NAME" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ weapon.Data.NAME }}</span>
                            <span class="block md:flex text-gray-600">{{ weapon.Data.NAME }}</span>
                        </span>
                        <span v-if="weapon.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ weapon.Data.VALOR }}</span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="weapon.Data.MINHIT" class="mr-5" title="Golpe Mínimo"><span class="color-icon color-icon-sm color-icon-minhit"></span>{{ weapon.Data.MINHIT }}</span>
                            <span v-if="weapon.Data.MAXHIT" class="mr-5" title="Golpe Máximo"><span class="color-icon color-icon-sm color-icon-maxhit"></span>{{ weapon.Data.MAXHIT }}</span>
                            <span v-if="weapon.Data.DOSMANOS" class="mr-5" title="Dos Manos"><span class="color-icon color-icon-sm color-icon-dosmanos"></span></span>
                            <span v-else class="mr-5" title="Una Mano"><span class="color-icon color-icon-sm color-icon-unamano"></span></span>
                            <span  class="mr-5" title="Apuñala"><span v-if="weapon.Data.APUÑALA" class="color-icon color-icon-sm color-icon-apunala"></span></span>
                        </span>
                    </div>

                    <!-- Crafteo -->
                    <div v-if="weapon.Data.LINGH || weapon.Data.LINGP || weapon.Data.LINGO || weapon.Data.SKHERRERIA || weapon.Data.MADERA || weapon.Data.MADERAELFICA || weapon.Data.SKCARPINTERIA" class="block-info">
                        <span class="w-40">Crafteo: </span>
                        <span class="">
                            <span v-if="weapon.Data.LINGH" class="mr-5" title="Lingotes de Hierro"><span class="color-icon color-icon-sm color-icon-lingotehierro"></span>{{ weapon.Data.LINGH }}</span>
                            <span v-if="weapon.Data.LINGP" class="mr-5" title="Lingotes de Plata"><span class="color-icon color-icon-sm color-icon-lingoteplata"></span>{{ weapon.Data.LINGP }}</span>
                            <span v-if="weapon.Data.LINGO" class="mr-5" title="Lingotes de Oro"><span class="color-icon color-icon-sm color-icon-lingoteoro"></span>{{ weapon.Data.LINGO }}</span>
                            <span v-if="weapon.Data.SKHERRERIA" class="mr-5" title="Skill de herrería"><span class="color-icon color-icon-sm color-icon-herrero"></span>{{ weapon.Data.SKHERRERIA }}</span>
                            <span v-if="weapon.Data.MADERA" class="mr-5" title="Madera"><span class="color-icon color-icon-sm color-icon-madera"></span>{{ weapon.Data.MADERA }}</span>
                            <span v-if="weapon.Data.MADERAELFICA" class="mr-5" title="Madera Elfica"><span class="color-icon color-icon-sm color-icon-maderaelfica"></span>{{ weapon.Data.MADERAELFICA }}</span>
                            <span v-if="weapon.Data.SKCARPINTERIA" class="mr-5" title="Skills de carpintería"><span class="color-icon color-icon-sm color-icon-carpintero"></span>{{ weapon.Data.SKCARPINTERIA }}</span>
                        </span>
                    </div>

                    <!-- Clases prohibidas -->
                    <div v-if="weapon.Data.CP1" class="block-info">
                        <span class="w-40">Clases Prohibidas: </span>
                        <span>
                            <span v-if="weapon.Data.CP1">{{weapon.Data.CP1}}</span>
                            <span v-if="weapon.Data.CP2">, {{weapon.Data.CP2}}</span>
                            <span v-if="weapon.Data.CP3">, {{weapon.Data.CP3}}</span>
                            <span v-if="weapon.Data.CP4">, {{weapon.Data.CP4}}</span>
                            <span v-if="weapon.Data.CP5">, {{weapon.Data.CP5}}</span>
                            <span v-if="weapon.Data.CP6">, {{weapon.Data.CP6}}</span>
                            <span v-if="weapon.Data.CP7">, {{weapon.Data.CP7}}</span>
                            <span v-if="weapon.Data.CP8">, {{weapon.Data.CP8}}</span>
                            <span v-if="weapon.Data.CP9">, {{weapon.Data.CP9}}</span>
                            <span v-if="weapon.Data.CP10">, {{weapon.Data.CP10}}</span>
                            <span v-if="weapon.Data.CP11">, {{weapon.Data.CP11}}</span>
                            <span v-if="weapon.Data.CP12">, {{weapon.Data.CP12}}</span>
                            <span v-if="weapon.Data.CP13">, {{weapon.Data.CP13}}</span>
                        </span>
                    </div>

                </div><!-- /.w-full -->
            </div><!-- /Item -->
        </div><!-- /v-for -->
    </div><!-- /v-if -->

    <section v-else class="text-center">
      <p class="text-2xl">Cargando armas</p>
    </section>

    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Nudillos para Artes Marciales</h2>

    <div v-if="weapons.length">
        <div v-for="knuckles in knuckles" :key="knuckles.item_id">

            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img :src="knuckles.Data.canvasImage" :alt="knuckles.Data.NAME" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ knuckles.Data.NAME }}</span>
                            <span class="block md:flex text-gray-600">{{ knuckles.Data.NAME }}</span>
                        </span>
                        <span v-if="knuckles.Data.VALOR" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ knuckles.Data.VALOR }}</span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="knuckles.Data.MINHIT" class="mr-5" title="Golpe Mínimo"><span class="color-icon color-icon-sm color-icon-minhit"></span>{{ knuckles.Data.MINHIT }}</span>
                            <span v-if="knuckles.Data.MAXHIT" class="mr-5" title="Golpe Máximo"><span class="color-icon color-icon-sm color-icon-maxhit"></span>{{ knuckles.Data.MAXHIT }}</span>
                            <span v-if="knuckles.Data.DOSMANOS" class="mr-5" title="Dos Manos"><span class="color-icon color-icon-sm color-icon-dosmanos"></span></span>
                            <span v-else class="mr-5" title="Una Mano"><span class="color-icon color-icon-sm color-icon-unamano"></span></span>
                            <span  class="mr-5" title="Apuñala"><span v-if="knuckles.Data.APUÑALA" class="color-icon color-icon-sm color-icon-apunala"></span></span>
                        </span>
                    </div>

                    <!-- Crafteo -->
                    <div v-if="knuckles.Data.LINGH || knuckles.Data.LINGP || knuckles.Data.LINGO || knuckles.Data.SKHERRERIA || knuckles.Data.MADERA || knuckles.Data.MADERAELFICA || knuckles.Data.SKCARPINTERIA" class="block-info">
                        <span class="w-40">Crafteo: </span>
                        <span class="">
                            <span v-if="knuckles.Data.LINGH" class="mr-5" title="Lingotes de Hierro"><span class="color-icon color-icon-sm color-icon-lingotehierro"></span>{{ knuckles.Data.LINGH }}</span>
                            <span v-if="knuckles.Data.LINGP" class="mr-5" title="Lingotes de Plata"><span class="color-icon color-icon-sm color-icon-lingoteplata"></span>{{ knuckles.Data.LINGP }}</span>
                            <span v-if="knuckles.Data.LINGO" class="mr-5" title="Lingotes de Oro"><span class="color-icon color-icon-sm color-icon-lingoteoro"></span>{{ knuckles.Data.LINGO }}</span>
                            <span v-if="knuckles.Data.SKHERRERIA" class="mr-5" title="Skill de herrería"><span class="color-icon color-icon-sm color-icon-herrero"></span>{{ knuckles.Data.SKHERRERIA }}</span>
                            <span v-if="knuckles.Data.MADERA" class="mr-5" title="Madera"><span class="color-icon color-icon-sm color-icon-madera"></span>{{ knuckles.Data.MADERA }}</span>
                            <span v-if="knuckles.Data.MADERAELFICA" class="mr-5" title="Madera Elfica"><span class="color-icon color-icon-sm color-icon-maderaelfica"></span>{{ knuckles.Data.MADERAELFICA }}</span>
                            <span v-if="knuckles.Data.SKCARPINTERIA" class="mr-5" title="Skills de carpintería"><span class="color-icon color-icon-sm color-icon-carpintero"></span>{{ knuckles.Data.SKCARPINTERIA }}</span>
                        </span>
                    </div>

                    <!-- Clases prohibidas -->
                    <div v-if="knuckles.Data.CP1" class="block-info">
                        <span class="w-40">Clases Prohibidas: </span>
                        <span>
                            <span v-if="knuckles.Data.CP1">{{knuckles.Data.CP1}}</span>
                            <span v-if="knuckles.Data.CP2">, {{knuckles.Data.CP2}}</span>
                            <span v-if="knuckles.Data.CP3">, {{knuckles.Data.CP3}}</span>
                            <span v-if="knuckles.Data.CP4">, {{knuckles.Data.CP4}}</span>
                            <span v-if="knuckles.Data.CP5">, {{knuckles.Data.CP5}}</span>
                            <span v-if="knuckles.Data.CP6">, {{knuckles.Data.CP6}}</span>
                            <span v-if="knuckles.Data.CP7">, {{knuckles.Data.CP7}}</span>
                            <span v-if="knuckles.Data.CP8">, {{knuckles.Data.CP8}}</span>
                            <span v-if="knuckles.Data.CP9">, {{knuckles.Data.CP9}}</span>
                            <span v-if="knuckles.Data.CP10">, {{knuckles.Data.CP10}}</span>
                            <span v-if="knuckles.Data.CP11">, {{knuckles.Data.CP11}}</span>
                            <span v-if="knuckles.Data.CP12">, {{knuckles.Data.CP12}}</span>
                            <span v-if="knuckles.Data.CP13">, {{knuckles.Data.CP13}}</span>
                        </span>
                    </div>

                </div><!-- /.w-full -->
            </div><!-- /Item -->
        </div><!-- /v-for -->
    </div><!-- /v-if -->

    <section v-else class="text-center">
      <p class="text-2xl">Cargando Nudillos para Artes Marciales</p>
    </section>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      weapons: [],
      knuckles: [],
    };
  },
  async fetch() {
    this.weapons = await this.$axios.$get("/dats/getAllWeapons");
    this.knuckles = await this.$axios.$get("/dats/getAllKnuckles");
  },
  head() {
    return {
      title: "Wiki - Armas",
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

    td {
      @apply bg-gray-900 p-4 border border-gray-200;
    }

    .color-icon {
        @apply align-middle mr-2;
    }

    .block-info {
        @apply block border-b border-gray-700 md:flex text-center md:text-left py-2;
    }

</style>
