<template>
  <main>
    <header class="py-48 relative overflow-hidden border-b border-gr border-silver mb-40">
      <!-- <img
        src="@/assets/img/game.png"
        alt="Argentum 20"
        class="absolute top-0 left-0 w-full h-full object-cover"
        style="filter: brightness(0.4); z-index: -1;"
      />-->
      <div class="container flex justify-center items-center">
        <div class="flex flex-col items-center">
          <img src="@/assets/img/argentum20_logo.png" alt="Argentum 20 Logo" class="mb-6" />
          <h1 class="text-2xl text-gr gr-gold">El Servidor Oficial de AO Clásico</h1>
          <h2 class="text-lg text-gr gr-silver">Basado en AO Yind</h2>
        </div>
      </div>
    </header>
    <div class="container flex justify-center mb-24">
      <div class="flex flex-col items-center">
        <div class="relative mb-2 z-10">
          <a
            id="download-btn"
            href="#"
            class="inline-block text-2xl font-serif font-bold tracking-wider uppercase px-5 py-3 border-2 border-gr border-gr-gold bg-gradient-to-t from-gray-900 to-gray-800 hover:from-gray-700"
          >Descargar el Instalador</a>
        </div>
        <!-- <img src="@/assets/img/wings.png" alt class="absolute top-0 inset-x-auto" /> -->
        <p class="text-sm text-gray-600">Sólo disponible para Windows</p>
      </div>
    </div>
    <section class="container grid grid-cols-2 gap-8">
      <form @submit.prevent="registerAccount" class="flex flex-col gap-y-4">
        <h3 class="text-2xl text-gr gr-gold mb-4">¡Creá tu cuenta!</h3>

        <div class="grid grid-cols-2 gap-8 mb-4">
          <div class="flex flex-col gap-y-2">
            <label for="name">Nombre de cuenta</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              v-model="$v.name.$model"
              class="text-input"
              :class="{ 'input-error': $v.name.$error }"
            />
            <div class="text-sm text-red-500">
              <p
                v-if="!$v.name.minLength"
              >El nombre debe tener un mínimo de {{ $v.name.$params.minLength.min }} caracteres.</p>
              <p
                v-if="!$v.name.maxLength"
              >El nombre debe tener un máximo de {{ $v.name.$params.maxLength.max }} caracteres.</p>
              <p v-if="!$v.name.alphaNumWithSpaces">El nombre sólo puede contener letras y números.</p>
              <p
                v-if="!$v.name.noBeginningOrEndSpaces"
              >El nombre no puede tener espacios al comienzo o al final.</p>
            </div>
          </div>

          <div class="flex flex-col gap-y-2">
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

          <div class="flex flex-col gap-y-2">
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

          <div class="flex flex-col gap-y-2">
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
            <div
              class="text-sm text-red-500"
              v-if="password != repeatedPassword"
            >Las contraseñas deben coincidir.</div>
          </div>
        </div>

        <div class="flex justify-between items-start">
          <button
            class="btn btn-silver self-start"
            :disabled="registerStatus == 'PENDING'"
          >Crear cuenta</button>
          <NuxtLink to="/recuperar" class="text-silver underline text-sm">¿Olvidaste tu contraseña?</NuxtLink>
        </div>
        <!-- <Btn :disabled="registerStatus == 'PENDING'" class="self-start">Crear Cuenta</Btn> -->

        <div
          class="p-4 border flex items-start gap-x-2"
          :class="{
            'border-green-400 bg-green-200 text-green-800': registerStatus == 'OK',
            'border-red-400 bg-red-200 text-red-800': registerStatus == 'ERROR',
            'border-blue-400 bg-blue-200 text-blue-800': registerStatus == 'PENDING',
          }"
          v-show="registerStatus != null"
        >
          <div class="lds-dual-ring" v-if="registerStatus == 'PENDING'"></div>
          <i class="fal fa-check-circle fa-lg" v-else-if="registerStatus == 'OK'"></i>
          <i class="fal fa-times-circle fa-lg" v-else-if="registerStatus == 'ERROR'"></i>
          <div>
            <p v-html="registerMessage" class="-mt-1"></p>
          </div>
        </div>
      </form>
    </section>
    <!-- <div v-if="validatedMail" class="py-4 bg-green-200 text-green-700">
      <div class="container">
        <p>Se ha validado el mail correctamente</p>
      </div>
    </div>-->
  </main>
</template>

<script>
import { required, minLength, maxLength, email, alphaNum, helpers } from "vuelidate/lib/validators";

function sleep(ms, value) {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
}

const alphaNumWithSpaces = (value) => !helpers.req(value) || /^[a-z0-9 ]+$/i.test(value);
const noBeginningOrEndSpaces = (value) => !helpers.req(value) || value == value.trim();

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
      validatedMail: false,
      resendEmailTime: 60,
    };
  },
  validations: {
    name: {
      required,
      alphaNumWithSpaces,
      noBeginningOrEndSpaces,
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
  mounted() {
    const validatedMailParam = this.$route.query.validated;

    if (validatedMailParam == "true") {
      this.validatedMail = true;

      setTimeout(() => {
        this.validatedMail = false;
      }, 3000);
    }
  },
  methods: {
    async registerAccount() {
      this.registerStatus = "PENDING";
      this.registerMessage = "Creando tu cuenta...";

      const { name, password, repeatedPassword, email } = this;

      try {
        await sleep(750);

        await this.$axios.post("/api/accounts", {
          name,
          password,
          repeatedPassword,
          email,
        });

        this.registerStatus = "OK";
        this.registerMessage = `¡Éxito! Te enviamos un correo a <strong>${email}</strong> para que valides tu cuenta.`;

        setInterval(() => {
          this.resendEmailTime -= 1;
        }, 1000);
      } catch (e) {
        this.registerStatus = "ERROR";

        if (e.response) {
          const data = e.response.data;

          if (data.error == "account_exists") {
            // TODO: Poner olvidaste contraseña o reenviar código de activación
            this.registerMessage = "Esa cuenta ya existe.";
          } else if (data.error == "email_exists") {
            // TODO: Poner olvidaste contraseña o reenviar código de activación
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
header {
  background-image: url("/assets/img/game.png");
  @apply bg-cover bg-center;
}

#download-btn {
  transition: all 150ms ease-out;
  box-shadow: 0 0 20px rgba(199, 131, 0, 0.4);
}

#download-btn::before {
  @apply absolute top-0;
  content: url("/assets/img/wings.png");
  left: 50%;
  transform: translateY(-99px) translateX(-50%);
  z-index: -1;
}

#download-btn:hover {
  box-shadow: 0 0 40px rgba(199, 131, 0, 0.7), inset 0 0 35px -10px rgba(0, 0, 0, 0.75);
}

/* #download-btn:active {
  box-shadow: inset 0 0;
} */
</style>
