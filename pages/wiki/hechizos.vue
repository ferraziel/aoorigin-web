<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Hechizos</h2>

    <div>
      <h3>Donde venden cada Hechizo?</h3>
      <h6>Ullathorpe / Nix / Arghal / Penthar</h6>
      <span>Dargo , Curar Veneno , Curar Heridas , Flecha Mágica , Flecha Electrica, Misil Mágico , Llamado de la naturaleza , Remover Paralisis , Paralizar</span>

      <h6>Banderbille / Arkhein / Lindos</h6>
      <span>Inmovilizar , Tormenta de fuego , Curar heridas , Invocar esqueletos Guerreros , Celeridad , Fuerza</span>

      <h6>Ciudad Abandonada / Eleusis</h6>
      <span>Descarga Eléctrica , Apocalipsis, Invisibilidad , Resucitar , Disipar Magia , Grito de Guerra</span>

      <h6>Eleusis</h6>
      <span>Invocar Elemental Acuático , Invocar Elemental Terrestre , Invocar Elemental de Fuego , Invocar elemental de Viento , Invocar Mascota , Piranha Impetum , Mimetismo.</span>
    </div>

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

                    <!-- Clases permitidas -->
                    <div v-if="spell.Data" class="block-info">
                        <span class="w-40">Clases Permitidas: </span>
                        <span>
                            <span>{{spell.Data.ClasesPermitidas}}</span>
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
