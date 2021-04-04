<template>
  <form @submit.prevent="registerAccount" class="flex flex-col gap-y-4">
    <h3 class="text-center font-sans text-3xl mb-2 md:mb-4 normal-case">Creá tu cuenta</h3>

    <div class="grid grid-cols-1 gap-4 md:gap-8 mb-4">
      <div class="flex flex-col gap-y-2">
        <label for="email">Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          v-model="$v.email.$model"
          class=""
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
          class=""
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
          v-model="$v.repeatedPassword.$model"
          class=""
          :class="{ 'input-error': $v.repeatedPassword.$error }"
        />
        <div class="text-sm text-red-500" v-if="!$v.repeatedPassword.sameAsPassword">
          Las contraseñas deben coincidir.
        </div>
      </div>

      <label class="flex items-center gap-x-2">
        <input type="checkbox" required v-model="$v.agreeRules.$model" />
        <span>
          Leí y acepto

          <NuxtLink to="/reglamento" class="text-primary hover:underline"> el reglamento de juego </NuxtLink>
        </span>
      </label>
    </div>

    <div class="flex flex-col lg:flex-row gap-y-4 justify-between items-start">
      <button
        type="submit"
        class="text-lg btn btn-silver self-start"
        :disabled="registerStatus == 'PENDING' || $v.$invalid"
      >
        Crear cuenta
      </button>
      <NuxtLink to="/recuperar" class="text-primary underline text-sm">¿Olvidaste tu contraseña?</NuxtLink>
    </div>

    <MessageBox :status="registerStatus" :message="registerMessage" />
  </form>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      password: "",
      repeatedPassword: "",
      email: "",
      agreeRules: false,
      registerStatus: null,
      recaptchaToken: "",
      registerMessage: "",
      validatedMail: false,
      resendEmailTime: 60,
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    repeatedPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
    agreeRules: {
      required,
      // Solución hacky para que tome el checkbox como validación
      sameAs: sameAs(() => true),
    },
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy();
  },
  methods: {
    async registerAccount() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.recoveryStatus = "ERROR";
        this.recoveryMessage = "Corrija el formulario antes de enviarlo.";
        return;
      }

      this.registerStatus = "PENDING";
      this.registerMessage = "Creando tu cuenta...";

      try {
        this.recaptchaToken = await this.$recaptcha.execute("createAccount");
      } catch (error) {
        return (this.registerMessage = "No se pudo validar el reCAPTCHA.");
      }

      const { password, email, recaptchaToken } = this;

      try {
        // await sleep(750);

        await this.$axios.post("/accounts", {
          email,
          password,
          recaptchaToken,
        });

        this.registerStatus = "OK";
        this.registerMessage = `¡Éxito! Te enviamos un correo a <strong>${email}</strong> para que valides tu cuenta.`;

        this.email = "";
        this.password = "";
        this.repeatedPassword = "";

        this.$v.$reset();

        setInterval(() => {
          this.resendEmailTime -= 1;
        }, 1000);
      } catch (e) {
        this.registerStatus = "ERROR";

        if (e.response) {
          const data = e.response.data;
          this.registerMessage = data.message;

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
