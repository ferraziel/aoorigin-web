<template>
  <section>
    <p>Te enviaremos un mail para que recuperes tu contraseña</p>
    <form @submit.prevent="sendRecovery">
      <label for="email">Email</label>
      <input type="email" id="email" class="text-input" required />
      <button class="btn btn-silver">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
