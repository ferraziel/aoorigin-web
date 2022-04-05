<template>
  <div class="container">
    <div
      v-if="npcs.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <br>
      <h1>Npcs</h1>
      <h2>Domar, explicacion:</h2>
      <span>
        PuntosDomar = Carisma * Domar
      </span>
      <br>
      <span>
        Si es Druida
        PuntosDomar = PuntosDomar / 6
      </span>
      <br>

      <span>
        Otras clases
        PuntosDomar = PuntosDomar / 11
      </span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Experiencia</th>
              <th>Experiencia Clan</th>
              <th>Descripcion</th>
              <th>Min Hit</th>
              <th>Max Hit</th>
              <th>Salud</th>
              <th>Defensa</th>
              <th>Evasion</th>
              <th>Acierto</th>
              <th>Hechizos</th>
              <th>Rango Hechizos</th>
              <th>Intervalo Respawn</th>
              <th>Alineacion</th>
              <th>Puntos Domar</th>
              <th>Tiran</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="npc in npcs" :key="npc.npc_id">
              <td class="text-right">{{ npc.npc_id }}</td>
              <td>
                <div>
                  <img :alt="npc.NAME" :title="npc.NAME" :src="npc.canvasImage" />
                  <span class="text-right">{{ npc.NAME }}</span>
                </div>
              </td>
              <td class="text-right">{{ npc.GIVEEXP }}</td>
              <td class="text-right">{{ npc.GIVEEXPCLAN }}</td>
              <td class="text-xs text-right">{{ npc.DESC }}</td>
              <td class="text-right">{{ npc.MINHIT }}</td>
              <td class="text-right">{{ npc.MAXHIT }}</td>
              <td class="text-right">{{ npc.MAXHP }}</td>
              <td class="text-right">{{ npc.DEF }}</td>
              <td class="text-right">{{ npc.PODEREVASION }}</td>
              <td class="text-right">{{ npc.PODERATAQUE }}</td>
              <td class="text-right">{{ npc.SPELLSNAMES }}</td>
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
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando npcs.</p>
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
    this.npcs = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllHostileNpcs");
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

</style>
