<template>
  <div class="container">
    <PagePadding />

    <header class="text-center flex flex-col items-center gap-y-6 mb-12">
      <h2 class="section-title tracking-tight">Reglamento de Juego</h2>

      <p class="text-lg md:text-xl leading-tight">
        Por favor lea atentamente el reglamento antes de descargar el cliente o crear una cuenta mediante el formulario
        de registro.
      </p>

      <hr class="opacity-20 self-stretch" />
    </header>

    <main>
      <ol class="max-w-screen-lg mx-auto">
        <RuleItem v-for="item in rules" :key="item.label" :item="item" :level="0" />
      </ol>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Reglamento",
    };
  },
  data() {
    return {
      rules: [
        {
          label: "Acerca del Reglamento",
          subItems: [
            {
              label: "Validez del reglamento",
              subItems: [
                {
                  label:
                    "Este reglamento posee validez desde su publicación y hasta nuevo aviso, revocando cualquier reglamento anterior",
                },
                {
                  label:
                    "Por el solo hecho de conectarse a ArgentumOrigin o descargarse nuestro software, el usuario acepta el deber de dar cumplimiento a las cláusulas contenidas en el presente.",
                },
              ],
            },
            {
              label: "Reglas y sus actualizaciones",
              subItems: [
                {
                  label:
                    "El staff de ArgentumOrigin se reserva el derecho de suprimir, agregar o modificar cláusulas del presente reglamento, según lo crea conveniente, sin necesidad de previo aviso.",
                },
                {
                  label:
                    "El desconocimiento de las reglas aquí contenidas o de sus actualizaciones, no podrá ser invocado, de ningún modo, como justificación frente a un incumplimiento de las mismas.",
                },
                {
                  label:
                    'Cuando el reglamento sea actualizado, esto será anunciado en la página web. Bastarán las simples palabras "Reglamento Actualizado". Es obligación del usuario chequear la página web antes de entrar al juego para confirmar la existencia de modificaciones al presente.',
                },
              ],
            },
          ],
        },
        {
          label: "Reglamentación de los usuarios",
          subItems: [
            {
              label: "Creación de personajes",
              subItems: [
                {
                  label:
                    "Los nombres para los personajes del juego pueden surgir de la imaginación del usuario o bien ser tomados de la historia o la mitología, pero siempre manteniendo una cierta ambientación temporal, y dentro de la temática del Juego. A continuación se hace un pequeño listado, meramente enunciativo, de los tipos de nombres que no serán aceptados por el Staff, a los fines de servir de guía al usuario al momento de crear su personaje:",
                },
                {
                  label:
                    "Estarán prohibidos los nombres que contengan alusiones raciales de tono discriminatorio, o que hagan referencia a estados físicos o mentales insultantes hacia el propio dueño y/o su personaje, o para con otros dueño y/o personajes.",
                },
                {
                  label:
                    "Estarán prohibidos, además, los nombres que por su similitud a los de los miembros del Staff pueden prestar a confusiones, o que puedan ser entendidos como una burla hacia los mismos.",
                },
                {
                  label: "Estas mismas reglas rigen también para los nombres que se les asignen a los CLANES.",
                },
                {
                  label:
                    "Cualquier usuario con un personaje de nombre inadecuado será obligado a cambiar su nombre y penado.",
                },
                {
                  label:
                    "Sin prejuicio de lo expuesto anteriormente, se recuerda que el Staff se reserva el derecho de admitir, o no, personajes en el servidor.",
                },
                {
                  label:
                    "Creación de personajes con fines ajenos al juego: Los personajes sobre los que se puede deducir que han sido creados con fines ajenos al juego, o entorpecedores del desarrollo del mismo, - tales como realización de piquetes, publicidad de otros servidores, insultos hacia el Staff o el juego, usar el mismo como medio de acercar guardias a personajes criminales, etc.- podrán, además de ser baneados sin previo aviso, ser castigados con la respectiva pena a su personaje principal, el baneo del mismo, o si lo amerita, el bloqueo de la IP.",
                },
              ],
            },
            {
              label: "Explotación de bugs y uso de programas externos y/o hardware no autorizados",
              subItems: [
                {
                  label:
                    "Queda terminantemente prohibida la explotación de cualquier tipo de bug o utilización de software y/o hardware externo no autorizado, como ser macros, clientes editados, aceleradores, etc.",
                  subItems: [
                    {
                      label: "De acuerdo a la gravedad del hecho se podrán aplicar tres tipos de penas:",
                    },
                    {
                      label:
                        'Los GMs deberán aplicar las penas de acuerdo a lo establecido por el "Sistema de Penas" vigente, a menos que exista contraorden de una autoridad superior; puesto que los Directivos del Staff podrán aplicar penas especiales de acuerdo a lo que ellos entiendan necesario.',
                    },
                  ],
                },
                {
                  label:
                    'La explotación de un bug por parte de un usuario debe ser reportada al Staff. El hecho de NO reportar un bug es una violación directa a la participación como "betatester", y puede ser causa de la expulsión inmediata y permanente del usuario en la comunidad.',
                },
                {
                  label:
                    "Quienes oculten información referente a cualquiera de estos puntos serán considerados cómplices y se les podrá aplicar la misma pena que al autor del hecho.",
                },
                {
                  label:
                    "El uso de software externo, no publicado por el Staff en la página oficial, es responsabilidad de los usuarios. Quienes descarguen software, aplicaciones o cualquier otro archivo publicado dentro del juego o foro, por otros usuarios, se expone a riesgos bajo su propia responsabilidad. El Staff no tiene relación con dichas publicaciones y no se hará responsable de las mismas.",
                },
              ],
            },
            {
              label: "Sistema de Trabajo",
              subItems: [
                {
                  label:
                    "El sistema de trabajo (Modo trabajando) podrá utilizarse sólo de manera asistida, esto quiere decir que el usuario debe estar frente a la PC durante la utilización del mismo.",
                },
                {
                  label:
                    "El caso de una imposibilidad especial que no permita responder al usuario ante la presencia del Centinela o un Game Master no será excusa para evadir la sanción.",
                },
                {
                  label:
                    "SANCIÓN: La inasistencia durante la ejecución del Modo Trabajando está penado con baneo definitivo del personaje.",
                },
              ],
            },
            {
              label: "Actos Sancionables",
              subItems: [
                {
                  label: "Bloqueos a la libre circulación.-",
                  subItems: [
                    {
                      label:
                        "Está terminantemente prohibido bloquear la libre circulación de otro usuario por cualquier sector público del juego.",
                    },
                    {
                      label:
                        "El bloqueo entre usuarios está permitido solamente si la víctima pueda defenderse del encierro. Encerrar a un personaje en una situación tal que éste no se pueda defender así como también bloquear su paso con elementales y mascotas siendo de la misma alineación, haría que fuese sancionable; tampoco se puede bloquear entradas, tapar teleports, etc. En resumen:",
                    },
                    {
                      label:
                        "Dentro de esta prohibición se encuentran comprendidas las siguientes circunstancias: Los encierros en lugares cerrados para pedir objetos; el encierro de un ciudadano con otro(s) ciudadano(s) para que lo ataque un criminal; los realizados por personajes que no pueden ser atacados (por ej. porque sean de la misma facción, porque el personaje atrapado no está en condiciones de pelear, sea zona segura, el encerrado sea ciudadano y el infractor también, etc).",
                    },
                    {
                      label:
                        "La utilización maliciosa de mascotas para bloquear a otro personaje, lo mismo que para bloquear un acceso, un camino, o ítems en el piso será permitida como mecánicas del juego mientras existan caminos alternativos.",
                    },
                    {
                      label:
                        "La utilización de personajes muertos para bloquear el paso de una criatura con la finalidad de que otro personaje entrene atacándola, será considerado Bloqueo.",
                    },
                    {
                      label:
                        "Aquellos personajes muertos que estén en su barca, no podrán bloquear ningún tipo de item/oro que esté tirado en el suelo, en caso de hacerlo es considerado bloqueo.",
                    },
                    {
                      label:
                        "Los GMs pueden bloquear a usuarios según les sea necesario para conducir investigaciones, resolver conflictos o aplicar penas.",
                    },
                    {
                      label:
                        'SANCIÓN: Las actitudes previstas en los apartados anteriores serán castigadas, en primera instancia, con una pena hacia el personaje infractor. En caso de que el usuario reincida en la violación de estas reglas se lo podrá sancionar con el baneo, temporal o definitivo según la gravedad del hecho, en el modo que lo determine el "Sistema de Penas" vigente.',
                    },
                  ],
                },
              ],
            },
            {
              label: "Acusaciones infundadas hacia un miembro del Staff",
              subItems: [
                {
                  label:
                    'Aquel usuario que realice públicamente acusaciones hacia un miembro del Staff, siendo éstas infundadas (sin basarse en hechos concretos), o de mero carácter injurioso, lo mismo que aquél que realice insinuaciones y suspicacias incriminatorias hacia aquellos, será pasible de graves sanciones por parte del Staff que pueden llegar hasta el baneo de todos los personajes, y la aplicación de "Tolerancia Cero".',
                },
              ],
            },
            {
              label: "Comportamiento inadecuado en el Foro Oficial del servidor y sus redes sociales.",
              subItems: [
                {
                  label:
                    "Aquel usuario que a través del Foro Oficial del servidor o las redes sociales de ArgentumOrigin, tenga una conducta temeraria con el Staff y con los demás miembros de la comunidad, utilizando ese lugar para el insulto sistemático, como para la acusación falsa o injuriosa, como así también cualquier modo de falta de respeto y vejación hacia el Proyecto, será pasible de graves sanciones por parte del Staff que pueden llegar hasta la “Tolerancia Cero” dentro del Foro, las redes sociales y el mismo juego.",
                },
              ],
            },
            {
              label: "Sanciones extraordinarias a usuarios",
              subItems: [
                {
                  label:
                    "Los Directivos del Staff de ArgentumOrigin, a su criterio, podrán aplicar sanciones especiales, a los usuarios que, tanto en el juego como en la comunidad, demuestren un comportamiento y una actitud injustificadamente hostil para con el juego, sus autoridades o su comunidad; como así también aquellos usuarios que -sin llegar a violar expresamente este reglamento- a través de sus actos y sus dichos, tanto dentro como fuera del juego, perjudiquen el normal desenvolvimiento de los jugadores, atenten contra la armonía de la comunidad, o menoscaben el desarrollo del juego y agravien a su Staff.",
                },
                {
                  label:
                    'En los supuestos mencionados en el apartado anterior, las sanciones serán determinadas según las circunstancias del caso, y como el objetivo de la medida es apartar a esta gente totalmente del juego, se podrá aplicar sobre ellos la "Tolerancia Cero".',
                },
              ],
            },
            {
              label: "Interferencias con el trabajo del Staff",
              subItems: [
                {
                  label:
                    "Mientras los GMs y Consejeros se encuentren dentro del juego realizando sus tareas, los usuarios no podrán interferir, de ningún modo, el libre desarrollo de las mismas.",
                },
                {
                  label:
                    "Se encuentra prohibido atacar, bajo ninguna circunstancia, al usuario que se encuentra en consulta con un GM o Consejero.",
                },
                {
                  label:
                    "También está prohibido interrumpir al GM/Consejero o al usuario que está en consulta, durante la misma.",
                },
                {
                  label:
                    "Se prohibe, asimismo, llamar un GM para pedirle objetos, lo suban de nivel, que lo lleve a determinado lugar, o que le diga dónde se encuentra determinado personaje.",
                },
                {
                  label:
                    "La utilización incorrecta de los comandos que los personajes tienen para tomar contacto con los GMS y/o Consejeros (como ser el /GM y el /DENUNCIAR) que provoque una molestia para el desempeño de los mismos, también será sancionada. Es necesario recordar que el comando /GM debe utilizarse para consultas sobre el juego y /DENUNCIAR para realizar denuncias acerca de actitudes antirreglamentarias por parte de otros usuarios y tratamiento de temas de importancia.",
                },
                {
                  label:
                    'SANCIÓN: Las actitudes previstas en los apartados anteriores serán castigadas, en primera instancia, con una pena hacia el personaje infractor. En caso de que el usuario reincida en la violación de estas reglas se lo podrá sancionar con el baneo, temporal o definitivo según la gravedad del hecho, en el modo que lo determine el "Sistema de Penas" vigente.',
                },
              ],
            },
            {
              label: "Respeto entre usuarios",
              subItems: [
                {
                  label:
                    'Está prohibida la utilización de insultos y otros términos insultantes o agresivos entre los usuarios, como así también las faltas de respeto y las actitudes discriminatorias. Estas actitudes se sancionarán con una pena hacia el personaje insultante, y en caso de que el usuario reincida en la violación de esta regla se lo podrá sancionar con el baneo, temporal o definitivo según la gravedad del hecho, en el modo que lo determine el "Sistema de Penas" vigente.',
                },
              ],
            },
            {
              label: "Doble Cliente",
              subItems: [
                {
                  label:
                    'Al usuario que fuera detectado utilizando dos clientes a la vez desde una misma PC o diferentes PCs, es decir una misma y sola persona con dos o más personajes conectados al mismo tiempo, se le aplicará la pena de baneo temporal o permanente según las circunstancias del caso y lo previsto en el "Sistema de Penas" vigente, sobre todos los personajes que tuviera logueados simultáneamente en el momento del hecho.',
                },
              ],
            },
            {
              label: "Objetos de GMs e intercambios de objetos",
              subItems: [
                {
                  label:
                    "Los objetos que posean los GMs, que puedan caer de manera accidental o que puedan estar en un intercambio con la presencia e intervención de un GM no pueden ser tomado por un usuario no involucrado en el intercambio.",
                },
                {
                  label:
                    "Si alguien los tomase por confusión, ante la indicación del GM deben ser devueltos de inmediato, bajo apercibimiento, en última instancia, del baneo permanente del personaje.",
                },
              ],
            },
            {
              label: "Robo de recompensa de entrenamiento",
              subItems: [
                {
                  label:
                    'Entre personajes que no posean el status "Criminal" estará prohibido robarse la recompensa de las criaturas. Es decir que, los personajes de status "Ciudadano" no pueden robar la recompensa de la criatura que otro "Ciudadano" ha matado. Estas actitudes se penarán convirtiendo en criminal al personaje infractor.',
                },
              ],
            },
            {
              label: "Ubicación ilegal de Criaturas",
              subItems: [
                {
                  label:
                    'Estará prohibido el acomodar las criaturas existentes de modo tal que éstas bloqueen una salida, paso o entrada, o bien ataquen de modo inmediato a quien entra a un mapa. Estas actitudes se penarán en el modo que lo determine el "Sistema de Penas" vigente.',
                },
              ],
            },
            {
              label: "Revelación de la Identidad del Staff",
              subItems: [
                {
                  label:
                    'Aquellos usuarios que revelasen maliciosamente la identidad de un GM que posea identidad reservada, como así también aquellos usuarios que intentasen hacerlo por más que la identidad revelada sea incorrecta, tanto mediante el juego o el foro oficial del servidor, como de modo personal a otros usuarios, será pasible de graves sanciones por parte del Staff, que pueden llegar hasta el baneo de todos los personajes, y la aplicación de "Tolerancia Cero".',
                },
              ],
            },
            {
              label: "Comportamiento Faccionario",
              subItems: [
                {
                  label:
                    "Las faltas por antifacción, enlistamiento fraudulento, colaboración de miembros del ejército o legión con criminales o ciudadanos según corresponda, robo de recompensa entre miembros de una misma facción y cualquier otra falta a los reglamentos de las cúpulas faccionarias llevaran la sanción que las cúpulas dispongan para ello, sin que lleven los personajes sanción por parte de los Game Master.",
                },
              ],
            },
            {
              label: "Discrepancias con decisiones del Staff de ArgentumOrigin",
              subItems: [
                {
                  label:
                    "Frente a una discrepancia con el actuar del Staff, los usuarios tendrán derecho a presentar su opinión o descargo, pero lo harán de manera totalmente respetuosa. La utilización de lenguaje, vulgar, callejero, ofensivo, o en caso de actitud descalificativa hacia los miembros del Staff, hará que el usuario pierda tal derecho de manera inmediata.",
                },
                {
                  label:
                    "Si un usuario coloca un descargo en un canal no estipulado, como ser el foro, pierde todo derecho a formular cualquier descargo válido.",
                },
                {
                  label:
                    "En el caso de que el usuario utilice un medio público, como ser el Foro, con el fin de que se disminuya una pena ya aplicada o bien como modo de presión para el miembro del Staff que lo sancionó, será considerado una falta grave y podrá ser sancionado con la prolongación de la pena, o bien con la perpetuidad de la misma, según las circunstancias del caso.",
                },
                {
                  label:
                    "Los descargos de los usuarios deben referirse específicamente a la pena que se les aplicó. En virtud de lo dispuesto en el apartado 2.18.3 del presente, los descargos que se refieran a otros usuarios y a la aplicación o no aplicación de penas, a éstos, como argumento para evitar la propia sanción, son inválidos. El usuario DEBE REFERIRSE A SUS PROPIOS ACTOS CON SU PROPIO PERSONAJE, no a los de terceros.",
                },
                {
                  label:
                    "En caso de hacerse mención a una falta al procedimiento por parte de un GM o miembro del Staff, la misma debe estar correctamente acreditada y detallada indicando la hora y fecha del hecho; el usuario también debe especificar las reglas quebrantadas por parte del GM o miembro del Staff.",
                },
                {
                  label:
                    "Los canales de contacto con el Staff de GMs son únicamente el sistema de /GM Ayuda en el juego y el sistema de soporte. Cualquier otro contacto por foros, mensajería privada, chat, etc.- no tendrá carácter oficial ni relevancia alguna. El Staff podrá establecer cualquier otro canal según lo crean necesario.",
                },
                {
                  label:
                    "Los descargos en el juego, a través del /GM Ayuda, no podrán contener temas tratables por soporte, en tal caso, el usuario deberá realizar su descargo mediante éste sistema.",
                  subItems: [
                    {
                      label:
                        'La información respecto de los motivos de las sanciones se puede encontrar en el juego mismo, a través de la utilización del comando "/penas ".',
                    },
                  ],
                },
                {
                  label:
                    "Cualquier queja o descargo deberá realizarse teniendo en cuenta que el Staff se reserva, de modo absoluto, los derechos de admisión y permanencia, razón por lo cual el usuario no tendrá derecho a plantear ninguna exigencia.",
                },
              ],
            },
            {
              label: "Expulsiones y Sanciones",
              subItems: [
                {
                  label:
                    "La sanciones ser harán de acuerdo al reglamento y sistema de penas, siempre y cuando el Staff no decida lo contrario.",
                },
                {
                  label:
                    "Los Directores, por su cargo, poseen la facultad de aplicar sanciones especiales, según su criterio.",
                },
                {
                  label:
                    "El Staff no está obligado a sancionar sistemáticamente y de manera inmediata a todos los usuarios que cometen una falta, si no que lo harán de acuerdo a su tiempo, su convencimiento y disponibilidad para verificar los hechos y aplicar la sanción, pudiendo, además, valorar en cada caso concreto las circunstancias especiales que contenga. Por ello podrá ocurrir que un personaje sea sancionado por un hecho que cometió tiempo atrás, sin que tenga por ello derecho a queja.",
                },
                {
                  label:
                    "Los descargos y excusas referentes a sanciones se realizan de acuerdo a los puntos contenidos en la regla 2.17.",
                },
                {
                  label:
                    "El Staff de GMs no aceptará capturas de imágenes o videos personales como pruebas útiles para aplicar sanciones, sino simplemente como herramientas de denuncia tendientes a reforzar la vigilancia sobre el denunciado.",
                },
                {
                  label:
                    '"Tolerancia Cero": Las consecuencias de la aplicación de esta pena sobre un usuario son las siguientes:',
                  subItems: [
                    {
                      label: "Baneo definitivo de todos personajes que se puedan determinar que son de su propiedad.",
                    },
                    {
                      label:
                        "Baneo definitivo de todos los personajes que están creados con las casillas e-mail que se le conozcan.",
                    },
                    {
                      label: "Baneo definitivo de los personajes cuyo último I.P. sea el del usuario sancionado.",
                    },
                    {
                      label: "Inhabilitación de la IP del infractor para ingresar al juego.",
                    },
                    {
                      label:
                        "En lo sucesivo se baneará cualquier personaje que, creado con posterioridad a la sanción, se pueda determinar que es del usuario en cuestión.",
                    },
                    {
                      label:
                        "Baneo definitivo del personaje que se encuentre siendo usado por el usuario sancionado, sin importar a quién pertenezca el mismo.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Reglamentación de GMs y miembros del Staff",
          subItems: [
            {
              label: "Admisión y permanencia",
              subItems: [
                {
                  label:
                    "Los DSGMs (Directores Staff de GMs) decidirán, según su criterio, la admisión y permanencia de los GMs, Consejeros y Rolemasters.",
                },
                {
                  label:
                    "Ningún miembro del Staff, GM, Consejero o Rolemaster, tiene derecho a reclamar por su permanencia en el Staff, ni a pedir pruebas o razones por las cuales se determinó su exclusión.",
                },
              ],
            },
            {
              label: "Manual de procedimientos",
              subItems: [
                {
                  label:
                    'La forma en que los GMs y Consejeros actúen será determinada por un reglamento, llamado "Manual de Procedimientos", en el cual se determinarán qué procedimientos deberán seguirse frente a determinados sucesos o hechos. Contendrá, también, aclaraciones a este reglamento, por lo cual debe considerarse parte integrante del mismo, y ser respetado como tal.',
                },
                {
                  label: "Los Rolemasters también tendrán su propio manual de procedimientos.",
                },
              ],
            },
            {
              label: "Comportamiento adecuado",
              subItems: [
                {
                  label:
                    "Los GMs, Consejeros y Rolemasters deben ser los primeros en respetar las reglas de convivencia; deben utilizar un lenguaje acorde a las situaciones y en ningún momento podrán insultar, ni utilizar lenguaje vulgar.",
                },
              ],
            },
            {
              label: "Relaciones del Staff de Gms, Consejeros y Rolemasters",
              subItems: [
                {
                  label:
                    "Los GMs, Consejeros y Rolemasters no pueden mantener, desde su posición, relaciones personales con otros usuarios, ni pertenencias a clanes expuestas públicamente.",
                },
              ],
            },
            {
              label: "Frecuencia de entrada",
              subItems: [
                {
                  label:
                    "La misma será determinada por el DSGMS, y estará expuesta en el Manual de procedimientos respectivo.",
                },
              ],
            },
            {
              label: "Confidencialidad",
              subItems: [
                {
                  label:
                    "Los GMs, Consejeros y Rolemasters se comprometen a mantener en confidencialidad la información a la que accedieran en virtud de su puesto, y que por su naturaleza no debe ser divulgada públicamente.",
                },
                {
                  label:
                    "Tanto los GMs como los Consejeros podrán mantener su identidad en secreto, siendo responsabilidad de éstos, que la misma se mantenga de ese modo.",
                },
              ],
            },
            {
              label: "Discusiones internas",
              subItems: [
                {
                  label:
                    "La aparición de cualquier tipo de discusión interna, que dificulte el trabajo de compañeros o el desarrollo normal de las actividades de los mismos, podrá será penada con la automática remoción de los miembros del Staff involucrados en la disputa.",
                },
              ],
            },
            {
              label: "Falta a procedimientos y reglamentos",
              subItems: [
                {
                  label:
                    "Los GMs, Consejeros y Rolemasters deberán informar toda falta a cualquier procedimiento o al reglamento por parte de un compañero, o será considerado encubrimiento. Pero de ninguna manera deberán marcar esa falta por cuenta propia, la misma simplemente deberá ser reportada a los DSGMS.",
                },
              ],
            },
          ],
        },
        {
          label: "Aclaraciones Importantes",
          subItems: [
            {
              label:
                "El Staff de ArgentumOrigin, se reserva el derecho de admisión y permanencia de los usuarios en la comunidad.",
              notHeader: true,
            },
            {
              notHeader: true,
              label:
                "El Staff de ArgentumOrigin, no es responsable de las actitudes o accionares de los usuarios, si no que cada usuario es responsable de sus propias acciones y actitudes.",
            },
            {
              notHeader: true,
              label:
                "El Staff de ArgentumOrigin, no se hace responsable por cualquier daño ocasionado por nuestro software, el mismo es instalado en todo caso bajo propio riesgo del usuario.",
            },
            {
              notHeader: true,
              label:
                "Los GMs, Consejeros y personal del Staff, no son empleados nuestros ni se encuentran en posición remunerativa, y por ende el Staff de ArgentumOrigin no es responsable por su accionar.",
            },
            {
              notHeader: true,
              label:
                "El Staff de ArgentumOrigin, no está obligado a responder por fallas en el servicio, caídas del mismo o interrupciones sin previo aviso, así como cualquier mal funcionamiento en el extremo del lado del servidor o del cliente.",
            },
            {
              notHeader: true,
              label:
                "El Staff de ArgentumOrigin, no está obligado a responder por la violación del reglamento por parte de terceros o personas que cooperen con el Staf de manera externa, como es el ejemplo del grupo de GMs.",
            },
            {
              notHeader: true,
              label:
                "El Staff de ArgentumOrigin, deja constancia de que si los encargados del juego lo entienden pertinente, a los efectos de proteger el juego, de la utilización de programas externos por parte de los usuarios, se podrá hacer uso de los medios necesarios para conocer los programas que éstos ejecuten simultáneamente con el juego.",
            },
            {
              notHeader: true,
              label:
                "Todos los servicios prestados por el servidor de ArgentumOrigin, son totalmente gratuitos, por lo tanto el usuario no tiene derecho a crear demandas, exigencias o reclamos. Estas demandas y reclamos sólo serán atendidos de acuerdo a la buena voluntad, disponibilidad y posibilidades de Argentum Origin Staff. En caso de no estar de acuerdo con el funcionamiento del servicio, las actitudes de otros usuarios, así como la de nuestros personales, sus decisiones tomadas, medidas aplicadas, el funcionamiento de los servicios, administración y dirección de los mismos, como también respecto de la administración y dirección de nuestro personal y la manera de actuar de las personas que colaboran en este proyecto, el usuario sólo deberá abandonar nuestro servicio y borrar el software instalado en su PC, sin posibilidad a ninguna otra acción, o reclamo, a causa del desacuerdo.",
              subItems: [
                {
                  label:
                    "Las donaciones mediante Cafecito.app, Patreon o cualquier otro servicio de donación, no representan una obligación de contraprestación de un servicio por parte del Staff sino que son solo un aporte voluntario al desarrollo del proyecto.",
                },
              ],
            },
            {
              notHeader: true,
              label:
                "El cuidado de los personajes, se hace mediante encriptación de claves, y mediante un sistema de recuperar contraseña y borrado de personajes utilizando el e-mail QUE EL USUARIO ELIGE.",
              subItems: [
                {
                  label:
                    "El Staff no tiene ninguna relación / obligación / responsabilidad, con respecto a problemas de seguridad que pueda tener el usuario. La seguridad de la PC del usuario corresponderá a los dueños de la misma, así como la de la cuenta de e-mail corresponderá a los dueños de la mencionada cuenta y los proveedores de la misma.",
                },
                {
                  label:
                    "En caso de robo de e-mail, el usuario deberá tratar el problema con la empresa proveedora del mismo. El Staff de ArgentumOrigin no tiene relación en absoluto con dichas empresas, y por lo tanto no tiene razón por la cual tomar acción alguna al respecto.",
                },
                {
                  label:
                    "El cuidado de la seguridad del personaje, corre por cuenta exclusiva de su dueño, por lo que el Staff de ArgentumOrigin, no se hace cargo los daños ocasionados ya sea por robo de e-mail o robo del personaje.",
                },
              ],
            },
          ],
        },
        {
          label: "MAO: Venta de personajes entre la comunidad",
          subItems: [

            {
              notHeader: true,
              label:
                "MAO es un sistema que permite la compra / venta de personajes del juego de forma segura, brindandole proteccion tanto al vendedor como al comprador.",
            },
            {
              notHeader: true,
              label:
                "AO20 obtendra una comision del 10% del total de la transaccion, el vendedor obtendra el valor total de la venta menos la comision de AO20 y gastos por servicios de terceros.",
            },
            {
              notHeader: true,
              label:
                `¿Como hago para vender items con MAO? MAO es fundamentalmente una herramienta para vender personajes. Recomendamos que los items los incorpores al PJ a vender y le des el valor extra que quieras al precio final del PJ teniendo en cuenta los items o el oro que dejes en el mismo. El PJ se vende completamente con todo lo que tiene tanto en inventario como en Bóveda.`,
            },
            {
              notHeader: true,
              label:
                `¿Si me arrepiento de publicar un personaje puedo cancelar la venta del mismo? En la seccion Mi Cuenta-> Mis Personajes, buscas el PJ y clickear el boton "Sacar personaje de Mercado AO". El proceso va a requerir que cierres el cliente, desloguees y esperes unos minutos para que se complete la sincronización del PJ retirado y tu cuenta.`,
            },
            {
              notHeader: true,
              label:
                `Queda totalmente prohibida la comercializacion de personajes e items por dinero por fuera del sistema.`,
            }
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
