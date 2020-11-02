<template>
  <form @submit.prevent="registerAccount" class="flex flex-col gap-y-4">
    <h3 class="text-2xl text-gr gr-gold mb-4">¡Creá tu cuenta!</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-4">
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
        <div class="text-sm text-red-500" v-if="password != repeatedPassword">Las contraseñas deben coincidir.</div>
      </div>

      <div class="flex flex-col lg:col-span-2 gap-y-2">
        <label for="whitelist-code">Código BETA</label>
        <input
          type="text"
          name="whitelist-code"
          id="whitelist-code"
          required
          v-model="whitelistCode"
          class="text-input"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-y-4 justify-between items-start">
      <button type="submit" class="btn btn-silver self-start" :disabled="registerStatus == 'PENDING'">
        Crear cuenta
      </button>
      <NuxtLink to="/recuperar" class="text-gray-400 hover:text-gray-500 underline text-sm"
        >¿Olvidaste tu contraseña?</NuxtLink
      >
    </div>
    <!-- <Btn :disabled="registerStatus == 'PENDING'" class="self-start">Crear Cuenta</Btn> -->

    <MessageBox :status="registerStatus" :message="registerMessage" />
  </form>
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
      whitelistCode: "",
      registerStatus: null,
      recaptchaToken: "",
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
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async registerAccount() {
      this.registerStatus = "PENDING";
      this.registerMessage = "Creando tu cuenta...";

      try {
        this.recaptchaToken = await this.$recaptcha.execute("createAccount");
      } catch (error) {
        return (this.registerMessage = "No se pudo validar el reCAPTCHA.");
      }

      const { password, repeatedPassword, email, whitelistCode, recaptchaToken } = this;

      try {
        // await sleep(750);

        await this.$axios.post("/accounts", {
          email,
          password,
          whitelistCode,
          recaptchaToken,
        });

        this.registerStatus = "OK";
        this.registerMessage = `¡Éxito! Te enviamos un correo a <strong>${email}</strong> para que valides tu cuenta.`;

        this.email = "";
        this.password = "";
        this.repeatedPassword = "";
        this.whitelistCode = "";

        this.$v.$reset();

        setInterval(() => {
          this.resendEmailTime -= 1;
        }, 1000);
      } catch (e) {
        this.registerStatus = "ERROR";

        if (e.response) {
          const data = e.response.data;
          this.registerMessage = data.msg;

          if (data.errors) {
            this.registerMessage = data.errors[0].msg;
          }
        } else {
          this.registerMessage =
            "Hubo un error desconocido. Por favor, contactanos por otro medio para pedir asistencia. ¡Respondemos rápido!";
        }
      }
    },
  },
};
</script>

<style></style>
