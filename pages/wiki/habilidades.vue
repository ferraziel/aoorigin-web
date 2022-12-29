<template>
  <div class="container">
    <br>
    <br>
    <div>
      <h2 class="section-title text-center mb-4 uppercase">Habilidades</h2>
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

    <div>
      <p>Los skills o puntos de habilidad. Son los que van a determinar nuestro poder de ataque o defensar en todos los tipos de habilidades que tenemos. Ejemplo Combate con Armas, Combate sin Armas, Escudos, Tacticas.</p>

      <p>Tambien tenemos skills como Magia que dependiendo la cantidad que tengamos podremos usar hechizos mas o menos poderosos. Ya que cada hechizo nos va pedir una cantidad necesaria de Skills.</p>

      <p>Otra Habilidad es la del Trabajo, depende a que cual nos dediquemos (Sastreria, Carpinteria, Talar, Mineria, Herreria, ect) Tendremos la oportunidad de extraer mas del material en caso que sea una habilidad de extraccion o tambien de crear mejores objetos, como es en Carpinteria, Herreria y Sastreria.</p>

      <h6>Tenemos 2 maneras de ganas skills en Argentum20.</h6>

      <p>La primera manera es la "Natural". Nuestro personaje por cada nivel que subimos va tener la oportunidad de subir una cantidad "X" de skills. Estos subiran mientras nosotros hagamos la tarea que queremos subir, Ejemplo: Si quiero subir combate con armas, pegandole a NPCS o a otros usuarios vamos a poder subirlo.</p>
      <p>De la misma manera sirve con todos los demas skills, para subir por ejemplo "Carpinteria" nosotros tendremos que fabricar objetos con un carpintero y repetir esta accion indefinidamente hasta que suba el skill o habilidad en esa accion.</p>

      <p>Luego existen los "Skills Libres", nuestro personaje aparte de poder subir una X cantidad de skills por nivel. Nos otorgaran skills cada vez que pasamos de nivel. Estos nos serviran a futuro para poder fullear un skill. Ya que en el caso del combate y las magias son necesarios para tirar mas hechizos o tener mas habilidad.</p>
      <p>Por lo cual ambos skilles son muy importantes, pero sobre todo los "LIBRES" ya que tenemos que saber como usarlos y cuando. NO TENEMOS que agregar skills asi porque si. Cada Clase tiene su manera de skillear.</p>

      <p>A continuacion les dejo 2 imagenes, En la primera encontraremos la lista de los skills NATURALES que podemos tener por Nivel y tambien los skills libres que se van a ir acumulando por cada nivel.</p>
      <p>En cuanto a Skills Libres, En Nivel 1 arrancaremos con 10 skills libres y luego por cada nivel nos otorgaran 5 mas.</p>
      <img src="@/assets/img/wiki/habilidades-a.png"/>
      <img src="@/assets/img/wiki/habilidades-b.png"/>

      <p>En esta imagen podemos ver marcados varios puntos, en la parte de arriba a la derecha en el simbolo de + es donde tendremos que hacer click nosotros para poder ver los skills que tenemos subidos naturales por cada habilidad y arriba de todo nos aparecera los Skills libres que disponemos. Para subir o bajar skills tenemos en cada una de las habilidades una fecha para la izquierda y otra para la derecha. Para subir nuestros puntos deberemos seleccionar la habilidad que queremos agregar y tickear en la flechita para la derecha.</p>

      <span style="color:green">Una vez que ya tenemos todo agregado como nosotros queremos ponemos "ACEPTAR"</span>
      <br>
      <span style="color:red">OJO TEMA IMPORTANTE, Una vez que aceptamos esto no podremos volver atras.</span>

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
