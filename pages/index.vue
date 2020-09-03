<template>
  <main>
    <div class="w-full h-screen flex justify-center items-center">
      <form
        @submit.prevent="registerAccount"
        class="flex flex-col gap-y-4 bg-black p-8"
        id="main-form"
      >
        <div class="flex flex-col">
          <label for="name">Nombre de cuenta</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            pattern="[a-zA-Z0-9\s]+"
            v-model="$v.name.$model"
            class="text-input"
            :class="{ 'input-error': $v.name.$error }"
          />
          <div class="text-sm text-red-500">
            <p v-if="!$v.name.minLength">
              El nombre debe tener un mínimo de {{ $v.name.$params.minLength.min }} caracteres.
            </p>
            <p v-if="!$v.name.maxLength">
              El nombre debe tener un máximo de {{ $v.name.$params.maxLength.max }} caracteres.
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <label for="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            v-model="$v.email.$model"
            class="text-input"
            :class="{ 'input-error': $v.email.$error }"
          />
          <div class="text-sm text-red-500" v-if="$v.email.$error">Ingrese un email válido.</div>
        </div>

        <div class="flex flex-col">
          <label for="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            v-model="$v.password.$model"
            class="text-input"
            :class="{ 'input-error': $v.password.$error }"
          />
          <div class="text-sm text-red-500" v-if="!$v.password.minLength">
            La contraseña debe tener un mínimo de
            {{ $v.password.$params.minLength.min }} caracteres.
          </div>
        </div>

        <div class="flex flex-col">
          <label for="repeat-password">Repetir contraseña</label>
          <input
            type="password"
            name="repeat-password"
            id="repeat-password"
            required
            v-model="repeatedPassword"
            class="text-input"
            :class="{ 'input-error': password != repeatedPassword }"
          />
          <div class="text-sm text-red-500" v-if="password != repeatedPassword">
            Las contraseñas deben coincidir.
          </div>
        </div>

        <!-- <div class="flex flex-col">
          <label for="aux-email">Correo electrónico auxiliar</label>
          <input
            type="email"
            name="aux-email"
            id="aux-email"
            class="text-input"
            required
            v-model="auxEmail"
          />
        </div>-->

        <Btn :disabled="registerStatus == 'PENDING'" class="self-end">Crear Cuenta</Btn>
        <!-- <input
          type="submit"
          value="Registrar cuenta"
          class="bg-gray-900"
          :disabled="registerStatus == 'PENDING'"
        />-->
        <div
          class="p-4 border"
          :class="{
            'border-green-400 bg-green-200 text-green-700': registerStatus == 'SUCCESS',
            'border-red-400 bg-red-200 text-red-700': registerStatus == 'ERROR',
          }"
          v-show="registerStatus == 'SUCCESS' || registerStatus == 'ERROR'"
        >
          <p>{{ registerMessage }}</p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

function sleep(ms, value) {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
}

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
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(40),
    },
    password: {
      required,
      minLength: minLength(5),
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    async registerAccount() {
      this.registerStatus = "PENDING";
      this.registerMessage = "";

      const { name, password, repeatedPassword, email } = this;

      try {
        await sleep(500);
        await this.$axios.post("/api/accounts", {
          name,
          password,
          repeatedPassword,
          email,
        });

        this.registerStatus = "SUCCESS";
        this.registerMessage = "Cuenta creada exitosamente.";
      } catch (e) {
        this.registerStatus = "ERROR";

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

.input-error {
  @apply border border-red-500;
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
