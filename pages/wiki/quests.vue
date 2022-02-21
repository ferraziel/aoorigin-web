<template>
  <div class="container">
    <div
      v-if="quests.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Quests</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Nivel Requerido</th>
              <th>Items Solicitados</th>
              <th>Npcs Solicitados</th>
              <!-- <th>Mapa</th> -->
              <th>Repetible</th>
              <th>Premio Experiencia</th>
              <th>Premio Oro</th>
              <th>Premio Items</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="quest in quests" :key="quest.quest_id">
              <td class="text-right">{{ quest.NOMBRE }}</td>
              <td class="text-right">{{ quest.DESC }}</td>
              <td class="text-right">{{ quest.REQUIREDLEVEL }}</td>
              <td class="text-right">{{ quest.REQUIREDOBJS }}</td>
              <td class="text-right">{{ quest.REQUIREDNPCS }}</td>
              <!-- <td class="text-right">{{ quest.POSMAP }}</td> -->
              <td class="text-right"><span v-if="quest.REPETIBLE == '1'">Sí</span><span v-else>No</span></td>
              <td class="text-right">{{ quest.REWARDEXP }}</td>
              <td class="text-right">{{ quest.REWARDGLD }}</td>
              <td class="text-right">
                <div v-if="quest.REWARDOBJSINFORMATION">
                  <div v-for="item in quest.REWARDOBJSINFORMATION" :key="item.item_id">
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
      <p class="text-2xl">Cargando quests.</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      quests: [],
    };
  },
  async fetch() {
    this.quests = await this.$axios.$get("https://api-staging.ao20.com.ar:11812/dats/getAllQuestsInformation");
  },
  head() {
    return {
      title: "Wiki - Quests",
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
