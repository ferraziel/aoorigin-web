<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Hechizos</h2>
    <div v-if="spells.length">
        <div v-for="spell in spells" :key="spell.item_id">

            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img v-if="spell.Data" :src="spell.Data.canvasImage" :alt="spell.Data.NOMBRE" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ spell.NOMBRE }}</span>
                            <span v-if="spell.PALABRASMAGICAS" class="block md:flex text-teal-300">{{ spell.PALABRASMAGICAS }}</span>
                            <span class="block md:flex text-gray-600">{{ spell.DESC }}</span>
                        </span>
                        <span v-if="spell.Data" class="text-xl" title="Valor en oro"><span class="color-icon color-icon-sm color-icon-gold"></span>{{ spell.Data.VALOR }}</span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="spell.MINHP" class="mr-5" title="Golpe Mínimo"><span class="color-icon color-icon-sm color-icon-minhit"></span>{{ spell.MINHP }}</span>
                            <span v-if="spell.MAXHP" class="mr-5" title="Golpe Máximo"><span class="color-icon color-icon-sm color-icon-maxhit"></span>{{ spell.MAXHP }}</span>
                            <span v-if="spell.SUBEHP" class="mr-5" title="Sube HP"><span class="color-icon color-icon-sm color-icon-subehp"></span>{{ spell.SUBEHP }}</span>
                            <span v-if="spell.MINSKILL" class="mr-5" title="Skills en Magia"><span class="color-icon color-icon-sm color-icon-skillsmagia"></span>{{ spell.MINSKILL }}</span>
                            <span v-if="spell.MANAREQUERIDO" class="mr-5" title="Mana Requerido"><span class="color-icon color-icon-sm color-icon-mana"></span>{{ spell.MANAREQUERIDO }}</span>
                            <span v-if="spell.STAREQUERIDO" class="mr-5" title="Stamina Requerido"><span class="color-icon color-icon-sm color-icon-stamina"></span>{{ spell.STAREQUERIDO }}</span>
                            <span v-if="spell.NEEDSTAFF" class="mr-5" title="Vara Requerida"><span class="color-icon color-icon-sm color-icon-vara"></span></span>

                        </span>
                    </div>

                    <!-- Clases prohibidas -->
                    <div v-if="spell.Data" class="block-info">
                        <span class="w-40">Clases Prohibidas: </span>
                        <span>
                            <span v-if="spell.Data.CP1">{{spell.Data.CP1}}</span>
                            <span v-if="spell.Data.CP2">, {{spell.Data.CP2}}</span>
                            <span v-if="spell.Data.CP3">, {{spell.Data.CP3}}</span>
                            <span v-if="spell.Data.CP4">, {{spell.Data.CP4}}</span>
                            <span v-if="spell.Data.CP5">, {{spell.Data.CP5}}</span>
                            <span v-if="spell.Data.CP6">, {{spell.Data.CP6}}</span>
                            <span v-if="spell.Data.CP7">, {{spell.Data.CP7}}</span>
                            <span v-if="spell.Data.CP8">, {{spell.Data.CP8}}</span>
                            <span v-if="spell.Data.CP9">, {{spell.Data.CP9}}</span>
                            <span v-if="spell.Data.CP10">, {{spell.Data.CP10}}</span>
                            <span v-if="spell.Data.CP11">, {{spell.Data.CP11}}</span>
                            <span v-if="spell.Data.CP12">, {{spell.Data.CP12}}</span>
                            <span v-if="spell.Data.CP13">, {{spell.Data.CP13}}</span>
                        </span>
                    </div>

                </div><!-- /.w-full -->
            </div><!-- /Item -->
        </div><!-- /v-for -->
    </div><!-- /v-if -->


    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando hechizos.</p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      spells: [],
    };
  },
  async fetch() {
    this.spells = await this.$axios.$get("/dats/getAllSpells");

  },
  head() {
    return {
      title: "Wiki - Hechizos",
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
