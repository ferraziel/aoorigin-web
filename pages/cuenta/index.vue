<template>
  <div class="container">
    <PagePadding />

    <div class="text-center mb-12">
      <h1 class="section-title">¡Iniciaste sesión!</h1>
      <NuxtLink to="personajes">Mis Personajes</NuxtLink>
    </div>
    <!-- <pre class="bg-black">{{ $auth.user }}</pre> -->

    <div class="flex justify-center">
      <button class="btn btn-silver" @click="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style></style>
