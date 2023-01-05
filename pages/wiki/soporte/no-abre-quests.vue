<template>
  <div class="container">
    <br />
    <br />
    <h2 class="section-title text-center mb-4 uppercase">No me Funcionan las Quest ni el Mini Mapa</h2>
    <span>Este problema le pasa a diferentes personas, pueden ser por varios motivos</span>

    <p>
      Un error en el registro de librerias, esto sucede cuando al instalar el AO20 por algun tema de instalacion no registra las librerias necesarias para poder correr ciertas caracteristicas del juego. Para repara reste error tenemos que usar el <a href="https://www.gs-zone.org/recursos/aolibs-administrador-de-librerias-dinamico.12/">Administrador de Librerias</a> (La siguiente herramienta no es creada por nosotros y no es de codigo libre)
    </p>

    <img src="@/assets/img/wiki/admin-librerias.png" />

    <p>
      Otro error muy común es instalar el Argentum20 en un disco secundario y no en el primario, donde esta instalado Windows. Esto hace que no tome las librerías del cliente y genera el error en las quest y mini mapa. Para esto desinstalamos juego y volvemos a instalarlo, pero seleccionamos instalarlo en el disco principal (donde tenemos instalado windows).
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Wiki - No abre el juego",
    };
  },
};
</script>

<style>
</style>
