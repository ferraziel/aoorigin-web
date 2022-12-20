<template>
  <div class="container">
    <div>
      <h1>Lista de habilidades</h1>
      <table>
          <tr>
              <td>Habilidad</td>
              <td>Uso</td>
              <td>Requiere asignar skills</td>
          </tr>
          <tr>
              <td>Magia</td>
              <td>Aumentar los puntos en mágia nos va a permitir lanzar hechizos  diferentes. Con ellos podemos hacer daño al oponente o a los Npc a distancia o también invocar criaturas que nos colaboran en el entrenamiento.</td>
              <td>Sí, se puede iniciar asignando los skills necesarios para curar veneno y a partir de ahí subirlo lanzando hechizos.</td>
          </tr>
          <tr>
              <td>Robar</td>
              <td>Esta habilidad permite adueñarnos del oro y objetos del inventario del oponente. Todas las clases pueden robar oro, pero sólo los ladrones pueden robar también objetos.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Tácticas de combate</td>
              <td>Subir este spell permite aumentar nuestra vación ante ataques con armas. También subir los skills en esta habildad nos permite usar ropas/túnicas/armaduras que nos protegen más.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Combate con armas</td>
              <td>Aumenta las probabilidades de pegarle al enemigo con un arma. Se sube luchando cuerpo a cuerpo utilizando algún arma.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Apuñalar</td>
              <td>Aumenta el valor del daño realizado con dagas. </td>
              <td>Sí, requiere asignar 10 skills en todas las clases excepto Asesinos.</td>
          </tr>
          <tr>
              <td>Meditar</td>
              <td>Marca la cantidad de puntos de maná que recuperamos al meditar. Se sube meditando. Al aumentar está habilidad, aumentan la cantidad de puntos de maná recuperados.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Ocultarse</td>
              <td>Esta habilidad es la encargada de aumentar las posibilidades de ocultarse. Se sube tratando de ocultarse con la letra "O".</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Supervivencia</td>
              <td>"Permite ver el estado del Npc al cual se esta atacando, a medida que aumenta los skills, </td>
              <td></td>
          </tr>
          <tr>
              <td>aumenta el detalle de la vida que le resta al mismo."</td>
              <td>No, se sube matando Npcs.</td>
              <td></td>
          </tr>
          <tr>
              <td>Talar</td>
              <td>Aumenta la cantidad de madera extraída (aumenta únicamente en la profesión talador). Se sube talando.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Comercio</td>
              <td>Cuanto más skill en comerciar tengas, más baratos conseguirás los items. Sube tanto al comprar como al vender.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Defensa con escudos</td>
              <td>Aumenta las chances de defenderte con tu escudo y otorga la posibilidad de poder hacer uso de escudos con mejor defensa. Se sube rechazando golpes con el mismo.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Pescar</td>
              <td>Extrae mayor número de pescados (aumenta únicamente en la profesión pescador). Se sube pescando.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Minería</td>
              <td>Aumenta la cantidad de minerales extraídos (aumenta únicamente en la profesión minero). Se sube minando.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Carpintería</td>
              <td>Esta habilidad sirve para crear arcos, flechas, barcos y diversos materiales hechos a base de madera. Se sube haciendo objetos de carpintería.</td>
              <td>No, podes iniciar haciendo cucharas de madera para que suba.</td>
          </tr>
          <tr>
              <td>Herrería</td>
              <td>Esta habilidad sirve para crear armas, cascos, escudos y armaduras. Se sube haciendo objetos de herrería.</td>
              <td>No, podes iniciar haciendo dagas que requieren 0 skills para que suba naturalmente.</td>
          </tr>
          <tr>
              <td>Liderazgo</td>
              <td>Es la habilidad necesaria para crear un clan (ver Clanes) y también para realizar partyes (ver Party).</td>
              <td>Sí, debe asignarse por completo.</td>
          </tr>
          <tr>
              <td>Domar animales</td>
              <td>Es necesaria para domesticar animales y hacerlos tus mascota. Éstos te defenderán cuando alguien te ataque. Se sube domando animales.</td>
              <td>No</td>
          </tr>
          <tr>
              <td>Armas de Proyectiles</td>
              <td>Aumenta las probabilidades de pegarle al enemigo con un arma de rango. Se sube utilizando estos tipos de armas en la lucha.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Combate sin Armas.</td>
              <td>Aumenta las probabilidades de impactar al enemigo en la lucha sin armas. Se sube luchando cuerpo a cuerpo sin usar armas. También aumenta la probabilidad del golpe crítico en clases como Bandido.</td>
              <td>No.</td>
          </tr>
          <tr>
              <td>Navegación</td>
              <td>Necesaria para poder utilizar las distintas embarcaciones (ver Navegacion).</td>
              <td>Sí, debe asignarse por completo.</td>
          </tr>
          <tr>
              <td>Sastrería</td>
              <td>Esta habilidad sirve para crear ropas, túnicas y sombreros. Se sube al fabricarlas.</td>
              <td></td>
          </tr>
          <tr>
              <td>Resistencia Mágica</td>
              <td>A medida que aumentemos este skill estaremos mejor protegidos contra los ataques mágicos de los NPCs hostiles. Se sube recibiendo ataques mágicos.</td>
              <td>No.</td>
          </tr>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // balance: {},
    };
  },
  async fetch() {
    // this.balance = await this.$axios.$get("/dats/getBalance");
  },
  head() {
    return {
      title: "Wiki - Habilidades",
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
