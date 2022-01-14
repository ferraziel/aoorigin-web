<template>
  <div class="container">
    <div
      v-if="npcs.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Npcs</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
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
            </tr>
          </thead>

          <tbody>
            <tr v-for="npc in npcs" :key="npc.npc_id">
              <td class="text-right">{{ npc.npc_id }}</td>
              <td><img width="300px" :src="npc.canvasImage" /></td>
              <td class="text-right">{{ npc.NAME }}</td>
              <td class="text-right">{{ npc.DESC }}</td>
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
