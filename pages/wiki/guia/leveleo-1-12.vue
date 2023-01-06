<template>
  <div class="container">
    <br>
    <br>
    <h2 class="section-title text-center mb-4 uppercase">Leveleo 1 - 12</h2>
    <p>
      Bienvenido al mundo de Argentum20 y Bienvenido al Newbie Dungeon. Este va ser tu primer lugar de entrenamiento, el primer dungeon que vas a visitar. Aqui encontraras criatura de bajo nivel, pero no te confies que recien empiezas y puede costar en un principio controlar y derrotar las criaturas.
    </p>

    <p>
      Aqui tambien puedes encontrarte las primeras quest. En el mapa 37 en las coordenadas 75 - 80 (abajo a la derecha)
    </p>

    <p>
      Encontraras un NPC con un signo de exclamacion en la cabeza. Apreta doble click sobre el para interactual y que te brinde la informacion de las quest.
    </p>

    <img src="@/assets/img/wiki/leveleo1-12-a.png"/>
    <img src="@/assets/img/wiki/leveleo1-12-b.png"/>
    <img src="@/assets/img/wiki/leveleo1-12-c.png"/>

    <p>
      Mientras subimos de nivel matando LOBOS, SERPIENTES, MURCIELAGOS y ESCORPIONES. Podremos cumplir las misiones de este NPC hasta llegar al NIVEL 12 que esta la mision mas importante de todas. Donde nos dan de recomenza varios items que nos brindan una gran ayuda despues de dejar de ser NEWBIES. NO OLVIDEN esta quest porque es muy importante de hacer en nivel bajo.
    </p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  async fetch() {
  },
  head() {
    return {
      title: "Wiki - Leveleo 1-12"
    };
  },
};
</script>

<style>

select:required:invalid {
  color: gray;
}

option[value=""][disabled] {
  display: none;
}

</style>
