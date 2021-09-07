
<template>
  <div>
    <img :src="user.canvasImage" class="" />
    <h7>{{ user.description }}</h7>

    <h4>Informacion del personaje</h4>
    <ul>
      <li>Nivel: {{ user.level }}</li>
      <li>Experiencia: {{ user.exp }}</li>
      <li>Sexo: {{ user.genre_id }}</li>
      <li>Clase: {{ user.class_id }}</li>
      <li>Max HP: {{ user.max_hp }}</li>
      <li>Max Stamina: {{ user.max_sta }}</li>
      <li>Max Mana: {{ user.max_man }}</li>
      <li>Min Golpe: {{ user.min_hit }}</li>
      <li>Max Golpe: {{ user.max_hit }}</li>
      <li>Oro en Inventario: {{ user.gold }}</li>
      <li>Oro en Banco: {{ user.bank_gold }}</li>
      <li>Puntos de habilidad libres: {{ user.free_skillpoints }}</li>
      <li>Npcs Matados: {{ user.killed_npcs }}</li>
      <li>Usuarios Matados: {{ user.killed_users }}</li>
      <li>Ciudadanos Matados: {{ user.ciudadanos_matados }}</li>
      <li>Criminales Matados: {{ user.criminales_matados }}</li>
      <li>Nivel de inventario: {{ user.invent_level }}</li>
      <li>Mascotas salvadas: {{ user.pets_saved }}</li>
      <li>Penas: {{ user.counter_pena }}</li>
      <li>Pertenece a Legion del Caos: {{ user.pertenece_real }}</li>
      <li>Recibio Armadura Legion del Caos: {{ user.recibio_armadura_caos }}</li>
      <li>Pertenece a Armada Real: {{ user.pertenece_real }}</li>
      <li>Recibio Armadura Real: {{ user.recibio_armadura_real }}</li>
      <li>Pertenece a clan: {{ user.guild_index }}</li>
      <li>Lista de clanes a los cual pertenecio: {{ user.guild_member_history }}</li>
    </ul>

    <br />
    <h4>Hechizos</h4>
    <div v-if="user.spells.length > 0" lass="text-center mb-12">
      <ul>
        <li v-for="spell in user.spells" :key="spell.spell_id" :id="spell.spell_id">
          {{ spell.Data.NOMBRE }}: {{ spell.Data.DESC }}
        </li>
      </ul>
    </div>
    <div v-else class="text-center mt-24">
      <p class="text-2xl">No hay hechizos.</p>
    </div>

    <h2>Items de inventario</h2>
    <div v-if="user.inventoryItem.length > 0" lass="text-center mb-12">
      <div
        style="display: table-cell; vertical-align: middle"
        v-for="item in user.inventoryItem"
        :key="item.item_id"
        :id="item.item_id"
      >
        <img :src="item.Data.canvasImage" class="" />

        <span style="color: yellow">{{ item.Data.NAME }}</span>
        <br />
        <span>{{ item.Data.TEXTO }}</span>
        <br />
        <span style="color: green">Cantidad: {{ item.amount }}</span>
      </div>
    </div>
    <div v-else class="text-center mt-24">
      <p class="text-2xl">No hay items en el inventario.</p>
    </div>

    <h2>Items de Banco</h2>
    <div v-if="user.bankInventoryItem.length > 0" lass="text-center mb-12">
      <div
        style="display: table-cell; vertical-align: middle"
        v-for="item in user.bankInventoryItem"
        :key="item.item_id"
        :id="item.item_id"
      >
        <img :src="item.Data.canvasImage" class="" />

        <span style="color: yellow">{{ item.Data.NAME }}</span>
        <br />
        <span>{{ item.Data.TEXTO }}</span>
        <br />
        <span style="color: green">Cantidad: {{ item.amount }}</span>
      </div>
    </div>
    <div v-else class="text-center mt-24">
      <p class="text-2xl">No hay items en el banco.</p>
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
