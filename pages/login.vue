<template>
  <section class="container max-w-screen-md flex flex-col items-center pt-48 gap-y-4">
    <p class="font-serif text-2xl mb-6">Accede a tu cuenta</p>
    <form @submit.prevent="login" class="flex flex-col items-center gap-y-4 w-full" id="login-form">
      <div class="flex flex-col items-center gap-y-2 w-full">
        <label for="email">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          v-model="$v.email.$model"
          class="text-input text-3xl w-full"
          :class="{ 'input-error': $v.email.$error }"
        />

        <label for="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          v-model="$v.password.$model"
          class="text-input text-3xl w-full"
          :class="{ 'input-error': $v.password.$error }"
        />
        <div class="text-red-500" v-if="$v.email.$error">Ingrese un email válido.</div>
        <div class="text-red-500" v-if="!$v.password.minLength">
          La contraseña debe tener un mínimo de
          {{ $v.password.$params.minLength.min }} caracteres.
        </div>
      </div>
      <button class="btn btn-silver" :disabled="loginMessage == 'PENDING' || $v.$invalid">Entrar</button>

      <MessageBox :status="loginStatus" :message="loginMessage" />
    </form>
  </section>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  head: {
    title: "Iniciar Sesión",
  },
  layout: "no-footer",
  data() {
    return {
      email: "",
      password: "",
      loginStatus: null,
      loginMessage: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    async login() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.loginStatus = "ERROR";
        this.loginMessage = "Corrija el formulario antes de enviarlo.";
        return;
      }
      this.loginStatus = "PENDING";
      this.loginMessage = "Iniciando sesión...";
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.loginStatus = "OK";
        this.loginMessage = "¡Listo! Espera un momento...";
        this.$router.push("/cuenta");

      } catch (e) {
        this.loginStatus = "ERROR";
        if (e.response) {
          const data = e.response.data;
          this.loginMessage = data.message;
          if (data.errors) {
            this.loginMessage = data.errors[0].msg;
          }
        } else {
          this.loginMessage = "Hubo un error desconocido. Por favor, contactanos por otro medio para pedir asistencia.";
        }
      }
      setTimeout(() => {
        this.loginStatus = null;
      }, 5000);
    },
  },
};
</script>

<style></style>
