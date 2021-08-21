<template>
  <footer class="mt-16 bg-gray-1000 md:mt-24 lg:mt-32">
    <div class="divider2"></div>
    <div class="py-8">
      <div class="container">
        <section class="grid grid-cols-1 mb-16 md:grid-cols-6 lg:grid-cols-12">
          <ul class="col-span-3 underline">
            <li><a href="https://elmesonhostigado.com/foro" target="_blank">Foro</a></li>
            <li>
              <NuxtLink to="/staff">Staff</NuxtLink>
            </li>
          </ul>
        </section>

        <section class="text-center">
          <p class="mb-4 text-sm tracking-wide text-gray-500 uppercase">
            Copyright &copy; {{ new Date().getFullYear() }} Noland Studios. Todos los derechos reservados.
          </p>
          <p class="text-xs text-gray-600">
            Este sitio está protegido por reCAPTCHA. Las
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="underline"
              >Políticas de Privacidad</a
            >
            y
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener" class="underline"
              >Términos del Servicio</a
            >
            de Google aplican.
          </p>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
