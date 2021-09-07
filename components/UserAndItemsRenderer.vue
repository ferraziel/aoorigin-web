
<template>
  <div>
    <img :src="user.canvasImage" class="" />

    <h2>Items de inventario</h2>
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

    <h2>Items de Banco</h2>
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
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
</style>
