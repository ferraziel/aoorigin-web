<template>
  <div class="container">
    <br />
    <br />
    <h2 class="section-title text-center mb-4 uppercase">No me abre el Juego, Soluciones</h2>

    <p>
      Ejecuto el juego y no me abre, aparece como que esta ejecutandose pero no da ninguna imagen. En el caso que les
      pase esta situacion intenten hacer lo siguiente:
    </p>

    <img src="@/assets/img/wiki/soporte-a.png" />
    <span>Entren a steam</span>
    <ul>
      <li>Vayan a la parte de biblioteca y busquen el Argentum Online</li>
      <li>Click derecho sobre Argentum Online</li>
      <li>Seleccionamos Administrar y Luego "Ver archivos locales"</li>
    </ul>

    <img src="@/assets/img/wiki/soporte-b.png" />
    <span>
      Esto nos llevara directamente a la carpeta donde esta instalada el juego llama "Argentum20" Entramos en esta
      carpeta haciendo doble click y luego entramos a la carpeta "Cliente". Nos aparecera la siguiente carpeta:
    </span>
    <ul>
      <li>Seleccionamos el archivo Argentum.exe y hacemos click derecho</li>
      <li>Marcamos en "Propiedades"</li>
    </ul>

    <img src="@/assets/img/wiki/soporte-c.png" />
    <span>Se los abrira la siguiente ventana en donde tendremos que hacer estos pasos.</span>

    <ul>
      <li>Vamos hacia la solapa "Compatibilidad".</li>
      <li>Seleccionamos "Ejecutar este programa como administrador"</li>
      <li>Le damos a Aplicas y luego Aceptar</li>
    </ul>

    <p>
      Una vez que terminamos de hacer esto ejecutamos nuevamente el Argentum.exe desde la carpeta, si nos pregunta si
      queremos ejecutarlo como administrador le vamos que si. Ya deberia estas ejecutando el juego normalmente. En tal
      caso que no lo haga pueden hacer un reinicio de la computadora para luego ejecutar el juego o finalizar el proceso
      del juego por "Administrador de tareas".
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
