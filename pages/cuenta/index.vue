<template>
  <div class="container">
    <div class="text-center mb-12">
      <h1 class="section-title">¡Iniciaste sesión!</h1>
      <NuxtLink to="mercadoao" class="btn">Entrar al mercado</NuxtLink>
      <br>

      <ul>
        <li><NuxtLink to="personajes">Mis Personajes</NuxtLink></li>
        <!-- <li><NuxtLink to="recuperar">Cambiar contraseña</NuxtLink></li> -->
        <li v-if="!this.$auth.user.mercado_pago">
          <a :href=mercadoPagoRedirectUri>
            Enlazar MercadoPago (solo disponible en Argentina)
          </a>
        </li>
        <li v-else @click="disableMercadoPago">Desenlazar MercadoPago</li>
        <li @click="logout">Cerrar sesión</li>
      </ul>
    </div>
    <!-- <pre class="bg-black">{{ $auth.user }}</pre> -->
  </div>
</template>

<script>
export default  {
  middleware: "auth",
  data(){
    console.log(666, process.env.MERCADOPAGO_CLIENT_ID )
    return {
      mercadoPagoRedirectUri: "https://auth.mercadopago.com.ar/authorization?client_id=" + process.env.MERCADOPAGO_CLIENT_ID + "&response_type=code&platform_id=mp&redirect_uri=" + location.origin + "/mercadopago/callback"
    }
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      window.history.go(-1)
      // window.location.href = "/";
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
