<template>
  <main>
    <div class="w-full h-screen flex justify-center items-center">
      <form @submit.prevent="registerUser" class="bg-black p-8">
        <label for="account-name">Nombre de cuenta</label>
        <input
          type="text"
          name="account-name"
          id="account-name"
          class="text-input"
          required
          v-model="accountName"
        />
        <!-- <Btn>Registrar cuenta</Btn> -->
        <input type="submit" value="Registrar cuenta" />
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      accountName: "",
    };
  },
  methods: {
    registerUser() {
      console.log("register!");
    },
  },
};
</script>

<style>
body {
  @apply text-white bg-gray-900;
}

.text-input {
  @apply p-2;
}
</style>
