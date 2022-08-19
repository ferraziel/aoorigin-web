<template>
  <div class="container">
      <br>
      <br>
      <h2 class="section-title text-center mb-4 uppercase">NPCs</h2>
      <div class="text-center mb-4">
          <h3>Cálculo para domar:</h3>
          <span>PuntosDomar = Carisma * Domar</span><br>
          <span>Si es Druida: PuntosDomar = PuntosDomar / 6</span><br>
          <span>Otras clases: PuntosDomar = PuntosDomar / 11</span>
      </div>

    <div v-if="npcs.length">
        <div v-for="npc in npcs" :key="npc.npc_id">
            <!-- Item -->
            <div class="w-full md:max-w-full md:flex border border-gr border-gr-silver p-4 mb-10 box-marker-yellow">
                <div class="flex-none"><img :src="npc.canvasImage" :alt="npc.NAME" class="mx-auto md:mx-0"></div>
                <div class="w-full">
                    <div class="block border-b border-gray-700 md:flex text-center md:text-left w-full justify-between pb-2">
                        <span class="flex-1">
                            <span class="w-full text-2xl block md:flex text-yellow-ao20">{{ npc.NAME }}</span>
                            <span class="block md:flex text-gray-600">{{ npc.DESC }}</span>
                        </span>
                    </div>

                    <!-- Caracteristicas -->
                    <div class="block-info">
                        <span class="w-40">Características: </span>
                        <span class="">
                            <span v-if="npc.MINHIT" class="mr-5" title="Golpe Mínimo"><span class="color-icon color-icon-sm color-icon-minhit"></span>{{ npc.MINHIT }}</span>
                            <span v-if="npc.MAXHIT" class="mr-5" title="Golpe Máximo"><span class="color-icon color-icon-sm color-icon-maxhit"></span>{{ npc.MAXHIT }}</span>
                            <span v-if="npc.DEF" class="mr-5" title="Defensa"><span class="color-icon color-icon-sm color-icon-def"></span>{{ npc.DEF }}</span>
                            <span v-if="npc.MAXHP" class="mr-5" title="Vida Máxima"><span class="color-icon color-icon-sm color-icon-maxhp"></span>{{ npc.MAXHP }}</span>
                            <span v-if="npc.GIVEEXP" class="mr-5" title="Experiencia de recompensa"><span class="color-icon color-icon-sm color-icon-exp-given"></span>{{ npc.GIVEEXP }}</span>
                            <span v-if="npc.GIVEEXPCLAN" class="mr-5" title="Experiencia de Clan"><span class="color-icon color-icon-sm color-icon-exp-given-clan"></span>{{ npc.GIVEEXPCLAN }}</span>
                        </span>
                    </div>

                    <!-- Hechizos -->
                    <div class="block-info" v-if="npc.SPELLSNAMES.length > 0">
                        <span class="w-40">Hechizos: </span>
                        <span class="">
                            <span v-if="npc.SPELLSNAMES" class="mr-5" title="Hechizos">{{ npc.SPELLSNAMES }}</span>
                        </span>
                    </div>


                </div><!-- /.w-full -->
            </div><!-- /Item -->
        </div><!-- /v-for -->
    </div><!-- /v-if -->


    <!--
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <tr v-for="npc in npcs" :key="npc.npc_id">


              <td class="text-right">{{ npc.PODEREVASION }}</td>
              <td class="text-right">{{ npc.PODERATAQUE }}</td>
              <td class="text-right">{{ npc.RANGOSPELL }}</td>
              <td class="text-right">{{ npc.INTERVALORESPAWN }}</td>
              <td class="text-right">{{ npc.ALINEACION }}</td>
              <td class="text-right">{{ npc.DOMABLE }}</td>
              <td class="text-right">
                <div v-if="npc.OBJSINFORMATION">
                  <div v-for="item in npc.OBJSINFORMATION" :key="item.item_id">
                    <img v-if="item.Data" :src="item.Data.canvasImage" :alt="item.Data.NAME" :title="item.Data.NAME" />
                    <span v-if="item.Data">{{item.Data.NAME}}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    -->




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
        <p class="text-2xl">Cargando NPCs.</p>
    </section>

  </div>
</template>

<script>

export default {
  data() {
    return {
      npcs: [],
    };
  },
  async fetch() {
    this.npcs = await this.$axios.$get("/dats/getAllHostileNpcs");
    // this.npcs = await this.$axios.$get("https://localhost:5101/dats/getAllHostileNpcs");
  },
  head() {
    return {
      title: "Wiki - Npcs",
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
