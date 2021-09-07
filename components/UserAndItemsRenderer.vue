
<template>
  <div>
    <div class="text-center mb-12">
      <div class="container grid grid-cols-4">
        <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
          <img :src="user.canvasImage" class="" />
          <h6>{{ user.description }}</h6>
        </div>

        <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
          <ul>
            <li class="text-xs">Fuerza: {{ user.attributes.strength }}</li>
            <li class="text-xs">Agilidad: {{ user.attributes.agility }}</li>
            <li class="text-xs">Inteligencia: {{ user.attributes.intelligence }}</li>
            <li class="text-xs">Constitucion: {{ user.attributes.constitution }}</li>
            <li class="text-xs">Carisma: {{ user.attributes.charisma }}</li>
          </ul>
        </div>
      </div>

          <h2>Oro en Inventario: {{ user.gold }}</h2>
    <h2>Oro en Banco: {{ user.bank_gold }}</h2>
    <h2>Oro Total: {{ user.gold + user.bank_gold }}</h2>


    <div v-if="user.inventoryItem.length > 0" class="text-center mb-12">
      <h2>Items de inventario</h2>
      <div class="container grid grid-cols-4">
        <div
          class="flex flex-col items-center gap-y-4"
          v-for="item in user.inventoryItem"
          :key="item.item_id"
          :id="item.item_id"
        >
          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <img :src="item.Data.canvasImage" class="" />
          </div>

          <ul>
            <li style="color: yellow">{{ item.Data.NAME }}</li>
            <li style="color: cyan">{{ item.Data.TEXTO }}</li>
            <li style="color: green">Cantidad: {{ item.amount }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-24">
      <p class="text-2xl">No hay items en el inventario.</p>
    </div>

    <div v-if="user.bankInventoryItem.length > 0" class="text-center mb-12">
      <h2>Items de Banco</h2>
      <div class="container grid grid-cols-4">
        <div
          class="flex flex-col items-center gap-y-4"
          v-for="item in user.bankInventoryItem"
          :key="item.item_id"
          :id="item.item_id"
        >
          <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
            <img :src="item.Data.canvasImage" class="" />
          </div>

          <ul>
            <li style="color: yellow">{{ item.Data.NAME }}</li>
            <li style="color: cyan">{{ item.Data.TEXTO }}</li>
            <li style="color: green">Cantidad: {{ item.amount }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-24">
      <p class="text-2xl">No hay items en el banco.</p>
    </div>

      <div class="container grid grid-cols-4">
        <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
          <h1>Informacion del Personaje</h1>
        </div>

        <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
          <ul>
            <li class="text-xs">Fecha creacion: {{ $dayjs(user.created_at).format("DD [de] MMMM [de] YYYY") }}</li>
            <li class="text-xs">Nivel: {{ user.level }}</li>
            <li class="text-xs">Experiencia: {{ user.exp }}</li>
            <li class="text-xs">Sexo: {{ user.genre_id }}</li>
            <li class="text-xs">Clase: {{ user.class_id }}</li>
            <li class="text-xs">Max HP: {{ user.max_hp }}</li>
            <li class="text-xs">Max Stamina: {{ user.max_sta }}</li>
            <li class="text-xs">Max Mana: {{ user.max_man }}</li>
            <li class="text-xs">Min Golpe: {{ user.min_hit }}</li>
            <li class="text-xs">Max Golpe: {{ user.max_hit }}</li>
            <li class="text-xs">Npcs Matados: {{ user.killed_npcs }}</li>
            <li class="text-xs">Usuarios Matados: {{ user.killed_users }}</li>
            <li class="text-xs">Ciudadanos Matados: {{ user.ciudadanos_matados }}</li>
            <li class="text-xs">Criminales Matados: {{ user.criminales_matados }}</li>
            <li class="text-xs">Nivel de inventario: {{ user.invent_level }}</li>
            <li class="text-xs">Mascotas salvadas: {{ user.pets_saved }}</li>
            <!-- <li class="text-xs">Penas: {{ user.counter_pena }}</li> -->
            <!-- <li class="text-xs">Pertenece a Legion del Caos: {{ user.pertenece_real }}</li> -->
            <!-- <li class="text-xs">Recibio Armadura Legion del Caos: {{ user.recibio_armadura_caos }}</li> -->
            <!-- <li class="text-xs">Pertenece a Armada Real: {{ user.pertenece_real }}</li> -->
            <!-- <li class="text-xs">Recibio Armadura Real: {{ user.recibio_armadura_real }}</li> -->
            <li class="text-xs">Pertenece a clan: {{ user.guild_index }}</li>
            <!-- <li class="text-xs">Lista de clanes a los cual pertenecio: {{ user.guild_member_history }}</li> -->
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
            <li v-for="(value, name) in user.skillpoints"
                :key="name" :id="name"
                class="text-xs">
                {{ name }}: {{ value }}
            </li>
          </ul>
        </div>
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
