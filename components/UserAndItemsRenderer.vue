<template>
  <div>
    <div class="text-center mb-20">
      <div class="container grid">
        <h6 v-if="user.price_in_mao">
          Precio:
          {{
            user.price_in_mao.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
          }}
          ARS
        </h6>

        <div class="container grid">
          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <h6>{{ user.description }}</h6>
            <img :src="user.canvasImage" width="64px" />
            <ul>
              <li class="text-xs">Fuerza: {{ user.attributes.strength }}</li>
              <li class="text-xs">Agilidad: {{ user.attributes.agility }}</li>
              <li class="text-xs">Inteligencia: {{ user.attributes.intelligence }}</li>
              <li class="text-xs">Constitucion: {{ user.attributes.constitution }}</li>
              <li class="text-xs">Carisma: {{ user.attributes.charisma }}</li>
            </ul>
          </div>

          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <ul>
              <li class="text-xs">Nivel: {{ user.level }}</li>
              <li class="text-xs">Raza: {{ user.race }}</li>
              <li class="text-xs">Experiencia: {{ user.exp.toLocaleString('es-AR') }}</li>
              <li class="text-xs">Sexo: {{ user.genre }}</li>
              <li class="text-xs">Clase: {{ user.class }}</li>
              <li class="text-xs">Max HP: {{ user.max_hp.toLocaleString('es-AR') }}</li>
              <li class="text-xs">Max Stamina: {{ user.max_sta.toLocaleString('es-AR') }}</li>
              <li class="text-xs">Max Mana: {{ user.max_man }}</li>
              <li class="text-xs">Min Golpe: {{ user.min_hit }}</li>
              <li class="text-xs">Max Golpe: {{ user.max_hit }}</li>
              <li class="text-xs">Npcs Matados: {{ user.killed_npcs }}</li>
              <li class="text-xs">Usuarios Matados: {{ user.killed_users }}</li>
              <li class="text-xs">Ciudadanos Matados: {{ user.ciudadanos_matados }}</li>
              <li class="text-xs">Criminales Matados: {{ user.criminales_matados }}</li>
              <li class="text-xs">Nivel de inventario: {{ user.invent_level }}</li>
              <li class="text-xs">Mascotas salvadas: {{ user.pets_saved }}</li>
              <li class="text-xs">Fecha creacion: {{ $dayjs(user.created_at).format("DD [de] MMMM [de] YYYY") }}</li>
              <li class="text-xs">Ultimo login: {{ $dayjs(user.fecha_ingreso).format("DD [de] MMMM [de] YYYY") }}</li>
              <!-- <li class="text-xs">Penas: {{ user.counter_pena }}</li> -->
              <!-- <li class="text-xs">Pertenece a Legion del Caos: {{ user.pertenece_real }}</li> -->
              <!-- <li class="text-xs">Recibio Armadura Legion del Caos: {{ user.recibio_armadura_caos }}</li> -->
              <!-- <li class="text-xs">Pertenece a Armada Real: {{ user.pertenece_real }}</li> -->
              <!-- <li class="text-xs">Recibio Armadura Real: {{ user.recibio_armadura_real }}</li> -->
              <!-- <li class="text-xs">Lista de clanes a los cual pertenecio: {{ user.guild_member_history }}</li> -->
            </ul>
          </div>

          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <span v-if="user.guild_index">
              Pertenece a un clan, buscalo en el
              <NuxtLink class="text-primary underline text-sm" to="/ranking-clanes"> Ranking de Clanes</NuxtLink>
            </span>

            <span style="color:blue" v-if="user.pertenece_real">
              Pertenece a la ARMADA REAL
            </span>

            <span style="color:cyan" v-if="user.pertenece_consejo_real">
              Pertenece al CONSEJO de la ARMADA REAL
            </span>

            <span style="color:red" v-if="user.pertenece_caos">
              Pertenece a la LEGION DEL CAOS
            </span>

            <span style="color:orange" v-if="user.pertenece_consejo_caos">
              Pertenece aL CONSEJO DE LA LEGION DEL CAOS
            </span>

            <ul>
              <li>🪙Oro en Inventario: {{ user.gold.toLocaleString('es-AR') }}</li>
              <li>🏦 Oro en Banco: {{ user.bank_gold.toLocaleString('es-AR') }}</li>
              <li>💰Oro Total: {{ (user.gold + user.bank_gold).toLocaleString('es-AR') }}</li>
            </ul>
          </div>

        </div>

        <div class="container grid grid-cols-4">
          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <h1>Skillpoints</h1>
          </div>

          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <ul>
              <li class="text-xs">Puntos de habilidad libres: {{ user.free_skillpoints }}</li>
              <li v-for="(value, name) in user.skillpoints" :key="name" :id="name" class="text-xs">
                {{ name }}: {{ value }}
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div v-if="user.inventoryItem.length > 0" class="text-center mb-12">
        <h2>Items de inventario</h2>
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            class="flex flex-col items-center gap-y-4"
            v-for="(item, index) in user.inventoryItem"
            :key="index + item.item_id + '-inventario'"
            :id="index + item.item_id + '-inventario'"
          >
            <div v-if="item.Data">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                <img :src="item.Data.canvasImage" width="64px" />
              </div>

              <ul>
                <li class="text-yellow text-lg md:text-xl lg:text-2xl">{{ item.Data.NAME }}</li>
                <li class="text-cyan text-sm md:text-base lg:text-lg">{{ item.Data.NAME == item.Data.TEXTO ? "" : item.Data.TEXTO }}</li>
                <li class="text-green text-sm md:text-base lg:text-lg">Cantidad: {{ item.amount.toLocaleString('es-AR') }}</li>
              </ul>

            </div>
          </div>
        </div>

      </div>

      <div v-else class="text-center mt-24">
        <p class="text-2xl">No hay items en el inventario.</p>
      </div>

      <div v-if="user.bankInventoryItem.length > 0" class="text-center mb-12">
        <h2>Items de Banco</h2>
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            class="flex flex-col items-center gap-y-4"
            v-for="(item, index) in user.bankInventoryItem"
            :key="index + item.item_id + '-banco'"
            :id="index + item.item_id + '-banco'"
          >
            <div v-if="item.Data">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                <img :src="item.Data.canvasImage" width="64px" />
              </div>

              <ul>
                <li class="text-yellow text-lg md:text-xl lg:text-2xl">{{ item.Data.NAME }}</li>
                <li class="text-cyan text-sm md:text-base lg:text-lg">{{ item.Data.NAME == item.Data.TEXTO ? "" : item.Data.TEXTO }}</li>
                <li class="text-green text-sm md:text-base lg:text-lg">Cantidad: {{ item.amount.toLocaleString('es-AR') }}</li>
              </ul>

            </div>
          </div>
        </div>

      </div>
      <div v-else class="text-center mt-24">
        <p class="text-2xl">No hay items en el banco.</p>
      </div>
    </div>

    <div v-if="user.spells.length > 0" class="text-center mb-12">
      <h1>Hechizos</h1>
      <ul>
        <li v-for="spell in user.spells" :key="spell.spell_id" :id="spell.spell_id">
          {{ spell.Data.NOMBRE }}: {{ spell.Data.DESC }}
        </li>
      </ul>
    </div>
    <div v-else class="text-center mt-24">
      <p class="text-2xl">No hay hechizos.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
</style>
