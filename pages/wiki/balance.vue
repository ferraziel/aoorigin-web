<template>
  <div class="container">
    <div
      v-if="balance"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h1>Experiencia necesaria por nivel</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">1: {{balance.EXP[1]}}</td>
            <td class="text-right">2: {{balance.EXP[2]}}</td>
            <td class="text-right">3: {{balance.EXP[3]}}</td>
            <td class="text-right">4: {{balance.EXP[4]}}</td>
            <td class="text-right">5: {{balance.EXP[5]}}</td>
            <td class="text-right">6: {{balance.EXP[6]}}</td>
            <td class="text-right">7: {{balance.EXP[7]}}</td>
            <td class="text-right">8: {{balance.EXP[8]}}</td>
            <td class="text-right">9: {{balance.EXP[9]}}</td>
            <td class="text-right">10: {{balance.EXP[10]}}</td>
            <td class="text-right">11: {{balance.EXP[11]}}</td>
            <td class="text-right">12: {{balance.EXP[12]}}</td>
            <td class="text-right">13: {{balance.EXP[13]}}</td>
            <td class="text-right">14: {{balance.EXP[14]}}</td>
            <td class="text-right">15: {{balance.EXP[15]}}</td>
            <td class="text-right">16: {{balance.EXP[16]}}</td>
            <td class="text-right">17: {{balance.EXP[17]}}</td>
            <td class="text-right">18: {{balance.EXP[18]}}</td>
            <td class="text-right">19: {{balance.EXP[19]}}</td>
            <td class="text-right">20: {{balance.EXP[20]}}</td>
            <td class="text-right">21: {{balance.EXP[21]}}</td>
            <td class="text-right">22: {{balance.EXP[22]}}</td>
            <td class="text-right">23: {{balance.EXP[23]}}</td>
            <td class="text-right">24: {{balance.EXP[24]}}</td>
            <td class="text-right">25: {{balance.EXP[25]}}</td>
            <td class="text-right">26: {{balance.EXP[26]}}</td>
            <td class="text-right">27: {{balance.EXP[27]}}</td>
            <td class="text-right">28: {{balance.EXP[28]}}</td>
            <td class="text-right">29: {{balance.EXP[29]}}</td>
            <td class="text-right">30: {{balance.EXP[30]}}</td>
            <td class="text-right">31: {{balance.EXP[31]}}</td>
            <td class="text-right">32: {{balance.EXP[32]}}</td>
            <td class="text-right">33: {{balance.EXP[33]}}</td>
            <td class="text-right">34: {{balance.EXP[34]}}</td>
            <td class="text-right">35: {{balance.EXP[35]}}</td>
            <td class="text-right">36: {{balance.EXP[36]}}</td>
            <td class="text-right">37: {{balance.EXP[37]}}</td>
            <td class="text-right">38: {{balance.EXP[38]}}</td>
            <td class="text-right">39: {{balance.EXP[39]}}</td>
            <td class="text-right">40: {{balance.EXP[40]}}</td>
            <td class="text-right">41: {{balance.EXP[41]}}</td>
            <td class="text-right">42: {{balance.EXP[42]}}</td>
            <td class="text-right">43: {{balance.EXP[43]}}</td>
            <td class="text-right">44: {{balance.EXP[44]}}</td>
            <td class="text-right">45: {{balance.EXP[45]}}</td>
            <td class="text-right">46: {{balance.EXP[46]}}</td>
          </tbody>
        </table>
      </div>

      Skills por nivel:
      <img src="@/assets/img/wiki/skills.png">


      <h1>Promedio vida y mana</h1>
      <div>
        <h2>Mago</h2>
        <img src="@/assets/img/wiki/mago.png">
      </div>

      <div>
        <h2>Druida</h2>
        <img src="@/assets/img/wiki/druida.png">
      </div>

      <div>
        <h2>Paladin</h2>
        <img src="@/assets/img/wiki/paladin.png">
      </div>

      <div>
        <h2>Bardo</h2>
        <img src="@/assets/img/wiki/bardo.png">
      </div>

      <div>
        <h2>Ladron</h2>
        <img src="@/assets/img/wiki/ladron.png">
      </div>

      <div>
        <h2>Pirata</h2>
        <img src="@/assets/img/wiki/pirata.png">
      </div>

      <div>
        <h2>Trabajador</h2>
        <img src="@/assets/img/wiki/trabajador.png">
      </div>

      <div>
        <h2>Asesino</h2>
        <img src="@/assets/img/wiki/asesino.png">
      </div>

      <div>
        <h2>Bandido</h2>
        <img src="@/assets/img/wiki/bandido.png">
      </div>

      <div>
        <h2>Clerigo</h2>
        <img src="@/assets/img/wiki/clerigo.png">
      </div>

      <div>
        <h2>Guerrero</h2>
        <img src="@/assets/img/wiki/guerrero.png">
      </div>

      <div>
        <h2>Cazador</h2>
        <img src="@/assets/img/wiki/cazador.png">
      </div>

      <h1>Modificadores de Raza</h1>
      <br>

      <span>Humano</span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">Fuerza: {{balance.MODRAZA.HUMANOFUERZA}}</td>
            <td class="text-right">Agilidad: {{balance.MODRAZA.HUMANOAGILIDAD}}</td>
            <td class="text-right">Inteligencia: {{balance.MODRAZA.HUMANOINTELIGENCIA}}</td>
            <td class="text-right">Carisma: {{balance.MODRAZA.HUMANOCARISMA}}</td>
            <td class="text-right">Constitucion: {{balance.MODRAZA.HUMANOCONSTITUCION}}</td>
          </tbody>
        </table>
      </div>

      <span>Elfo</span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">Fuerza: {{balance.MODRAZA.ELFOFUERZA}}</td>
            <td class="text-right">Agilidad: {{balance.MODRAZA.ELFOAGILIDAD}}</td>
            <td class="text-right">Inteligencia: {{balance.MODRAZA.ELFOINTELIGENCIA}}</td>
            <td class="text-right">Carisma: {{balance.MODRAZA.ELFOCARISMA}}</td>
            <td class="text-right">Constitucion: {{balance.MODRAZA.ELFOCONSTITUCION}}</td>
          </tbody>
        </table>
      </div>

      <span>Elfo Oscuro</span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">Fuerza: {{balance.MODRAZA.ELFOOSCUROFUERZA}}</td>
            <td class="text-right">Agilidad: {{balance.MODRAZA.ELFOOSCUROAGILIDAD}}</td>
            <td class="text-right">Inteligencia: {{balance.MODRAZA.ELFOOSCUROINTELIGENCIA}}</td>
            <td class="text-right">Carisma: {{balance.MODRAZA.ELFOOSCUROCARISMA}}</td>
            <td class="text-right">Constitucion: {{balance.MODRAZA.ELFOOSCUROCONSTITUCION}}</td>
          </tbody>
        </table>
      </div>

      <span>Enano</span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">Fuerza: {{balance.MODRAZA.ENANOFUERZA}}</td>
            <td class="text-right">Agilidad: {{balance.MODRAZA.ENANOAGILIDAD}}</td>
            <td class="text-right">Inteligencia: {{balance.MODRAZA.ENANOINTELIGENCIA}}</td>
            <td class="text-right">Carisma: {{balance.MODRAZA.ENANOCARISMA}}</td>
            <td class="text-right">Constitucion: {{balance.MODRAZA.ENANOCONSTITUCION}}</td>
          </tbody>
        </table>
      </div>

      <span>Gnomo</span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">Fuerza: {{balance.MODRAZA.GNOMOFUERZA}}</td>
            <td class="text-right">Agilidad: {{balance.MODRAZA.GNOMOAGILIDAD}}</td>
            <td class="text-right">Inteligencia: {{balance.MODRAZA.GNOMOINTELIGENCIA}}</td>
            <td class="text-right">Carisma: {{balance.MODRAZA.GNOMOCARISMA}}</td>
            <td class="text-right">Constitucion: {{balance.MODRAZA.GNOMOCONSTITUCION}}</td>
          </tbody>
        </table>
      </div>

      <span>Orco</span>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">Fuerza: {{balance.MODRAZA.ORCOFUERZA}}</td>
            <td class="text-right">Agilidad: {{balance.MODRAZA.ORCOAGILIDAD}}</td>
            <td class="text-right">Inteligencia: {{balance.MODRAZA.ORCOINTELIGENCIA}}</td>
            <td class="text-right">Carisma: {{balance.MODRAZA.ORCOCARISMA}}</td>
            <td class="text-right">Constitucion: {{balance.MODRAZA.ORCOCONSTITUCION}}</td>
          </tbody>
        </table>
      </div>

      <h1>Atributos por Raza</h1>
      <img src="@/assets/img/wiki/atributos.png">

      <h1>Evasion</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODEVASION.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODEVASION.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODEVASION.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODEVASION.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODEVASION.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODEVASION.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODEVASION.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODEVASION.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODEVASION.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODEVASION.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODEVASION.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODEVASION.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Resistencia Magica</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODRESISTENCIAMAGICA.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODRESISTENCIAMAGICA.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODRESISTENCIAMAGICA.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODRESISTENCIAMAGICA.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODRESISTENCIAMAGICA.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODRESISTENCIAMAGICA.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODRESISTENCIAMAGICA.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODRESISTENCIAMAGICA.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODRESISTENCIAMAGICA.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODRESISTENCIAMAGICA.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODRESISTENCIAMAGICA.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODRESISTENCIAMAGICA.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Ataque con Armas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODATAQUEARMAS.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODATAQUEARMAS.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODATAQUEARMAS.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODATAQUEARMAS.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODATAQUEARMAS.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODATAQUEARMAS.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODATAQUEARMAS.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODATAQUEARMAS.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODATAQUEARMAS.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODATAQUEARMAS.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODATAQUEARMAS.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODATAQUEARMAS.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Apuñalar</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODAPUNALAR.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODAPUNALAR.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODAPUNALAR.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODAPUNALAR.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODAPUNALAR.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODAPUNALAR.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODAPUNALAR.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODAPUNALAR.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODAPUNALAR.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODAPUNALAR.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODAPUNALAR.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODAPUNALAR.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Ataque con Proyectiles</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODATAQUEPROYECTILES.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODATAQUEPROYECTILES.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODATAQUEPROYECTILES.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODATAQUEPROYECTILES.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODATAQUEPROYECTILES.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODATAQUEPROYECTILES.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODATAQUEPROYECTILES.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODATAQUEPROYECTILES.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODATAQUEPROYECTILES.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODATAQUEPROYECTILES.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODATAQUEPROYECTILES.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODATAQUEPROYECTILES.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Daño con Armas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODDANOARMAS.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODDANOARMAS.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODDANOARMAS.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODDANOARMAS.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODDANOARMAS.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODDANOARMAS.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODDANOARMAS.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODDANOARMAS.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODDANOARMAS.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODDANOARMAS.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODDANOARMAS.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODDANOARMAS.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Daño con Armas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODDANOPROYECTILES.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODDANOPROYECTILES.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODDANOPROYECTILES.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODDANOPROYECTILES.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODDANOPROYECTILES.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODDANOPROYECTILES.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODDANOPROYECTILES.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODDANOPROYECTILES.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODDANOPROYECTILES.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODDANOPROYECTILES.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODDANOPROYECTILES.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODDANOPROYECTILES.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Wrestling / Pegar sin armas</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODDANOWRESTLING.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODDANOWRESTLING.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODDANOWRESTLING.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODDANOWRESTLING.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODDANOWRESTLING.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODDANOWRESTLING.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODDANOWRESTLING.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODDANOWRESTLING.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODDANOWRESTLING.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODDANOWRESTLING.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODDANOWRESTLING.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODDANOWRESTLING.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Modificador de Escudo</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODESCUDO.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODESCUDO.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODESCUDO.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODESCUDO.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODESCUDO.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODESCUDO.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODESCUDO.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODESCUDO.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODESCUDO.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODESCUDO.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODESCUDO.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODESCUDO.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Modificador de Vida</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MODVIDA.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MODVIDA.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MODVIDA.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MODVIDA.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MODVIDA.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MODVIDA.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MODVIDA.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MODVIDA.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MODVIDA.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MODVIDA.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MODVIDA.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MODVIDA.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Mana Inicial</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.MANA_INICIAL.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.MANA_INICIAL.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.MANA_INICIAL.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.MANA_INICIAL.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.MANA_INICIAL.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.MANA_INICIAL.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.MANA_INICIAL.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.MANA_INICIAL.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.MANA_INICIAL.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.MANA_INICIAL.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.MANA_INICIAL.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.MANA_INICIAL.TRABAJADOR}}</td>
          </tbody>
        </table>

        <span>Todo esto se multiplica por la cantidad de puntos en inteligencia que tiene el personaje. Por ejemplo: Druida Elfo tiene 20 puntos en inteligencia lo que te dará 40 puntos de mana al subir cada nivel y 50 puntos de mana iniciales.</span>
      </div>

      <h1>Aumento Stamina</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.AUMENTO_STA.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.AUMENTO_STA.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.AUMENTO_STA.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.AUMENTO_STA.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.AUMENTO_STA.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.AUMENTO_STA.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.AUMENTO_STA.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.AUMENTO_STA.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.AUMENTO_STA.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.AUMENTO_STA.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.AUMENTO_STA.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.AUMENTO_STA.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Golpe al subir de nivel Pre 36</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.GOLPE_PRE_36.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.GOLPE_PRE_36.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.GOLPE_PRE_36.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.GOLPE_PRE_36.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.GOLPE_PRE_36.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.GOLPE_PRE_36.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.GOLPE_PRE_36.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.GOLPE_PRE_36.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.GOLPE_PRE_36.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.GOLPE_PRE_36.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.GOLPE_PRE_36.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.GOLPE_PRE_36.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

      <h1>Golpe al subir de nivel Post 36</h1>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <tbody>
            <td class="text-right">GUERRERO: {{balance.GOLPE_POST_36.GUERRERO}}</td>
            <td class="text-right">CAZADOR: {{balance.GOLPE_POST_36.CAZADOR}}</td>
            <td class="text-right">PALADIN: {{balance.GOLPE_POST_36.PALADIN}}</td>
            <td class="text-right">BANDIDO: {{balance.GOLPE_POST_36.BANDIDO}}</td>
            <td class="text-right">ASESINO: {{balance.GOLPE_POST_36.ASESINO}}</td>
            <td class="text-right">PIRATA: {{balance.GOLPE_POST_36.PIRATA}}</td>
            <td class="text-right">LADRON: {{balance.GOLPE_POST_36.LADRON}}</td>
            <td class="text-right">CLERIGO: {{balance.GOLPE_POST_36.CLERIGO}}</td>
            <td class="text-right">BARDO: {{balance.GOLPE_POST_36.BARDO}}</td>
            <td class="text-right">MAGO: {{balance.GOLPE_POST_36.MAGO}}</td>
            <td class="text-right">DRUIDA: {{balance.GOLPE_POST_36.DRUIDA}}</td>
            <td class="text-right">TRABAJADOR: {{balance.GOLPE_POST_36.TRABAJADOR}}</td>
          </tbody>
        </table>
      </div>

    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando balance.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: {},
    };
  },
  async fetch() {
    this.balance = await this.$axios.$get("/dats/getBalance");
  },
  head() {
    return {
      title: "Wiki - Balance",
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

td {
  @apply bg-gray-900 p-4 border border-gray-200;
}

</style>
