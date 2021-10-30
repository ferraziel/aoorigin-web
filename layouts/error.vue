<template>
  <div class="container  lg:pt-36">
    <div v-if="error.statusCode === 404" class="flex justify-center text-center">
      <h1 class="font-sans text-4xl">Página no encontrada.</h1>
    </div>
    <div v-else>
      <h1 class="font-sans text-4xl">Ocurrió un error.</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
