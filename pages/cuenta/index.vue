<template>
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="section-title">¡Iniciaste sesión!</h1>
      <NuxtLink to="mercadoao" class="btn btn-cta">Entrar al mercado</NuxtLink>

      <ul>
        <li><NuxtLink to="personajes">Mis Personajes</NuxtLink></li>
        <!-- <li><NuxtLink to="recuperar">Cambiar contraseña</NuxtLink></li> -->
      </ul>
    </div>

    <div v-if="!this.$auth.user.mercado_pago" class="text-center mb-12">
      <a href="https://auth.mercadopago.com.ar/authorization?client_id=6962025294834257&response_type=code&platform_id=mp&redirect_uri=https://mercado.ao20.com.ar/mercadopago/callback" class="btn btn-silver">Enlazar MercadoPago (solo disponible en Argentina)</a>
    </div>

    <div v-else class="text-center mb-12">
      <button class="btn btn-silver" @click="disableMercadoPago">Desenlazar MercadoPago</button>
    </div>

    <!-- <pre class="bg-black">{{ $auth.user }}</pre> -->

    <div class="flex justify-center">
      <button class="btn btn-silver" @click="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script>
export default  {
  middleware: "auth",
  methods: {
    async logout() {
      await this.$auth.logout();
      window.location.href = "/";
    },
    async disableMercadoPago() {
      this.$axios.$get(`mercadopago/disable`).then(data => {
        location.reload();
      })
    },
  },
};
</script>

<style></style>
