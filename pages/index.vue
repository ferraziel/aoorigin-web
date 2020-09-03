<template>
  <main>
    <div class="w-full h-screen flex justify-center items-center">
      <form
        @submit.prevent="registerUser"
        class="flex flex-col gap-y-4 bg-black p-8"
        id="main-form"
      >
        <div class="flex flex-col">
          <label for="name">Nombre de cuenta</label>
          <input type="text" name="name" id="name" class="text-input" required v-model="name" />
        </div>

        <div class="flex flex-col">
          <label for="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            class="text-input"
            required
            v-model="password"
          />
        </div>

        <div class="flex flex-col">
          <label for="repeat-password">Repetir contraseña</label>
          <input
            type="password"
            name="repeat-password"
            id="repeat-password"
            class="text-input"
            required
            v-model="repeatedPassword"
          />
        </div>

        <div class="flex flex-col">
          <label for="email">Correo electrónico</label>
          <input type="email" name="email" id="email" class="text-input" required v-model="email" />
        </div>

        <div class="flex flex-col">
          <label for="aux-email">Correo electrónico auxiliar</label>
          <input
            type="email"
            name="aux-email"
            id="aux-email"
            class="text-input"
            required
            v-model="auxEmail"
          />
        </div>

        <input
          type="submit"
          value="Registrar cuenta"
          class="bg-gray-900"
          :disabled="registerStatus == 'pending'"
        />
        <div
          class="p-4 border"
          :class="{
            'border-green-400 bg-green-200 text-green-700': registerStatus == 'success',
            'border-red-400 bg-red-200 text-red-700': registerStatus == 'error',
          }"
          v-show="registerStatus == 'success' || registerStatus == 'error'"
        >
          <p>{{ registerMessage }}</p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      repeatedPassword: "",
      email: "",
      auxEmail: "",
      registerStatus: null,
      registerMessage: "",
    };
  },
  methods: {
    async registerUser() {
      const { name, password, repeatedPassword, email, auxEmail } = this;
      this.registerStatus = "pending";
      this.registerMessage = "";

      try {
        const res = await this.$axios.post("/api/accounts", {
          name,
          password,
          repeatedPassword,
          email,
          auxEmail,
        });

        this.registerStatus = "success";
        this.registerMessage = "Cuenta creada exitosamente.";
      } catch (e) {
        this.registerStatus = "error";

        if (e.response) {
          const data = e.response.data;

          if (data.error == "account_exists") {
            this.registerMessage = "Esa cuenta ya existe.";
          } else if (data.error == "email_exists") {
            this.registerMessage = "Ya existe una cuenta con ese email.";
          }

          if (data.errors) {
            this.registerMessage = data.errors[0].msg;
          }

          console.log(data);
        }
      }
    },
  },
};
</script>

<style>
body {
  @apply text-white bg-gray-900;
}

.text-input {
  @apply p-2 bg-gray-800;
}

#main-form {
  @apply w-full;
}

@screen sm {
  #main-form {
    width: 450px;
  }
}
</style>
