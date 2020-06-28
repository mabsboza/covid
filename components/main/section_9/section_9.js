import { useState } from "react";
import Tab from "./tab/tab";
import Items from "./items/items";
import { connect } from "react-redux";

const tabs = [
  "Fundamentos del coronavirus 2019",
  "Cómo se extiende",
  "Como auto protegerse",
  "Síntomas y prueba",
  "Brote en su comunidad",
  "Mitos",
];

const items = [
  [
    {
      title: "¿Qué es un nuevo coronavirus?",
      body: (
        <React.Fragment>
          <p>
            El 11 de febrero de 2020, la Organización Mundial de la Salud anunció un
            nombre oficial de la enfermedad que está causando la novela de 2019
            brote de coronavirus, identificado por primera vez en Wuhan China. El nuevo nombre
            de esta enfermedad es la enfermedad por coronavirus 2019, abreviada como
            COVID-19. En COVID-19, "CO" significa "corona", "VI" para "virus"
            y "D" para la enfermedad. Anteriormente, esta enfermedad se denominaba "2019
            nuevo coronavirus "o" 2019-nCoV ".
          </p>
          <p>
            Un nuevo coronavirus es un nuevo coronavirus que no ha sido
            previamente identificado El virus que causa la enfermedad por coronavirus 2019
            (COVID-19), no es lo mismo que el{" "}
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
              target="_blank"
            >
            coronavirus que circulan comúnmente entre humanos
            </a>{" "}
            y causar enfermedades leves, como el resfriado común.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Por qué la enfermedad se llama enfermedad por coronavirus 2019, COVID-19?",
      body: (
        <React.Fragment>
          <p>
            El 11 de febrero de 2020, la Organización Mundial de la Salud anunció un
            nombre oficial de la enfermedad que está causando la novela de 2019
            brote de coronavirus, identificado por primera vez en Wuhan China. El nuevo nombre
            de esta enfermedad es la enfermedad por coronavirus 2019, abreviada como
            COVID-19. En COVID-19, "CO" significa "corona", "VI" para "virus"
            y "D" para la enfermedad. Anteriormente, esta enfermedad se denominaba "2019
            nuevo coronavirus "o" 2019-nCoV ".
          </p>
          <p>
            Son{" "}
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
              target="_blank"
            >
              muchos tipos
            </a>{" "}
            de coronavirus humanos, incluidos algunos que comúnmente causan leves
            enfermedades del tracto respiratorio superior. COVID-19 es una enfermedad nueva, causada
            ser un coronavirus nuevo (o nuevo) que no se haya visto previamente en
            humanos El nombre de esta enfermedad fue seleccionado siguiendo el Mundo
            Las mejores prácticas de la Organización de la Salud (OMS) icono externo para nombrar
            Nuevas enfermedades infecciosas humanas.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Cómo pueden las personas ayudar a detener el estigma relacionado con COVID-19?",
      body: (
        <React.Fragment>
          <p>
           Las personas pueden luchar contra el estigma y ayudar, no lastimar, a otros proporcionando
            apoyo social. Contrarresta el estigma aprendiendo y compartiendo hechos.
            Comunicar los hechos de que los virus no se dirigen a razas específicas
            o grupos étnicos y cómo COVID-19 se propaga realmente puede ayudar a detener
            estigma.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Por qué alguien puede culpar o evitar a individuos y grupos?",
      body: (
        <React.Fragment>
          <p>
            Las personas en los Estados Unidos pueden estar preocupadas o ansiosas por amigos y
            parientes que viven o visitan áreas donde está COVID-19
            extensión. Algunas personas están preocupadas por la enfermedad. Miedo y
            la ansiedad puede conducir al estigma social, por ejemplo, hacia los chinos o
            otros asiáticos americanos o personas que estaban en cuarentena.
          </p>
          <p>
            El estigma es la discriminación contra un grupo identificable de personas, un
            lugar o una nación. El estigma se asocia con una falta de conocimiento.
            sobre cómo se propaga COVID-19, la necesidad de culpar a alguien, teme
            enfermedad y muerte, y chismes que difunden rumores y mitos.
          </p>
          <p>
            El estigma lastima a todos al crear más miedo o ira hacia
            personas comunes en lugar de la enfermedad que está causando el problema.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title: "¿Cuál es la fuente del virus?",
      body: (
        <React.Fragment>
          <p>
            Los coronavirus son una gran familia de virus. Algunos causan enfermedades en
            personas y otros, como coronavirus caninos y felinos, solo
            infectar animales. En raras ocasiones, los coronavirus animales que infectan a los animales.
            han surgido para infectar a las personas y pueden propagarse entre las personas. Esto es
            sospechoso de haber ocurrido por el virus que causa COVID-19.
            Síndrome Respiratorio del Medio Oriente (MERS) y Respiratorio Agudo Severo
            Síndrome (SARS) son otros dos ejemplos de coronavirus que
            se originó a partir de animales y luego se extendió a las personas. Más información
            sobre el origen y la difusión de COVID-19 está disponible en el
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/summary.html"
              target="_blank"
            >
              Resumen de la situación: origen y propagación del virus
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Cómo se propaga el virus?",
      body: (
        <React.Fragment>
          <p>
            Este virus se detectó por primera vez en la ciudad de Wuhan, provincia de Hubei, China.
            Las primeras infecciones estaban vinculadas a un mercado de animales vivos, pero el
            El virus ahora se está propagando de persona a persona. Es importante tener en cuenta
            esa propagación de persona a persona puede suceder en un continuo. Algunos virus
            son altamente contagiosas (como el sarampión), mientras que otros virus son menos
            entonces.
          </p>
          <p>
            El virus que causa COVID-19 parece propagarse fácilmente y
            de manera sostenible en la comunidad ("difusión comunitaria") en
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
              target="_blank"
            >
              algunas áreas geográficas afectadas
            </a>
            . La propagación comunitaria significa que las personas han sido infectadas con el virus en
            un área, incluidos algunos que no están seguros de cómo o dónde se convirtieron
            infectado.
          </p>
          <p>
            Aprenda lo que se sabe sobre el
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html"
              target="_blank"
            >
              diseminación de coronavirus recién emergidos
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Alguien que haya tenido COVID-19 puede transmitir la enfermedad a otros?",
      body: (
        <React.Fragment>
          <p>
            El virus que causa COVID-19 es
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
              target="_blank"
            >
              propagarse de persona a persona
            </a>
            . Alguien que está activamente enfermo con COVID-19 puede transmitir la enfermedad.
            a otros. Es por eso que los CDC recomiendan que estos pacientes sean
            aislado en el hospital o en el hogar (dependiendo de qué tan enfermo
            lo son) hasta que estén mejor y ya no representen un riesgo de
            infectando a otros.
          </p>
          <p>
            El tiempo que una persona está enferma puede variar, por lo que la decisión sobre cuándo
            liberar a alguien del aislamiento se hace caso por caso en
            consulta con médicos, expertos en prevención y control de infecciones,
            y funcionarios de salud pública e implica considerar detalles de
            cada situación, incluida la gravedad de la enfermedad, los signos de la enfermedad y
            síntomas y resultados de pruebas de laboratorio para ese paciente.
          </p>
          <p>
            Actual
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/disposition-hospitalized-patients.html"
              target="_blank"
            >
              Guía de los CDC para cuándo está bien liberar a alguien del aislamiento
            </a>
            &nbsp;se realiza caso por caso e incluye la reunión de todos
            Los siguientes requisitos:
          </p>
          <ul>
            <li>
              El paciente no tiene fiebre sin el uso de medicamentos para reducir la fiebre.
              medicamentos
            </li>
            <li>El paciente ya no muestra síntomas, como tos.</li>
            <li>
              El paciente ha dado negativo en al menos dos veces consecutivas.
              muestras respiratorias recolectadas con al menos 24 horas de diferencia.
            </li>
          </ul>
          <p>
            Alguien que ha sido liberado del aislamiento no se considera
            plantean un riesgo de infección a los demás.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿El clima cálido detendrá el brote de COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Todavía no se sabe si el clima y la temperatura afectan el
            propagación de COVID-19. Algunos otros virus, como el resfriado común y
            gripe, se propaga más durante los meses de clima frío, pero eso no significa
            es imposible enfermarse con estos virus durante otros
            meses. En este momento, no se sabe si la propagación de COVID-19
            disminuirá cuando el clima se vuelva más cálido. Hay mucho más para
            aprender sobre la transmisibilidad, la gravedad y otras características
            asociado con COVID-19 y las investigaciones están en curso.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Se puede transmitir el virus que causa COVID-19 a través de los alimentos, incluidos los alimentos refrigerados o congelados?",
      body: (
        <React.Fragment>
          <p>
            Generalmente se cree que los coronavirus se transmiten de
            persona a persona a través de gotitas respiratorias. Actualmente no hay
            evidencia para apoyar la transmisión de COVID-19 asociado con alimentos.
            Antes de preparar o comer alimentos, es importante lavar siempre
            manos con agua y jabón durante 20 segundos para la seguridad alimentaria general.
            Durante todo el día, lávese las manos después de sonarse la nariz, toser
            o estornudar, o ir al baño.
          </p>
          <p>
            Es posible que una persona pueda obtener COVID-19 tocando un
            superficie u objeto que tiene el virus y luego toca su
            propia boca, nariz o posiblemente sus ojos, pero no se cree que esto
            ser la principal forma en que se propaga el virus.
          </p>
          <p>
            En general, debido a la poca capacidad de supervivencia de estos coronavirus en
            superficies, existe un riesgo muy bajo de propagación de los productos alimenticios
            o embalaje que se envía durante un período de días o semanas a
            temperatura ambiente, refrigerada o congelada.
          </p>
          <p>
            Aprenda lo que se sabe sobre el
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
              target="_blank"
            >
            propagación de COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Qué es la difusión comunitaria?",
      body: (
        <React.Fragment>
          <p>
            La propagación comunitaria significa que las personas han sido infectadas con el virus en
            un área, incluidos algunos que no están seguros de cómo o dónde se convirtieron
            infectado.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title:
        "¿Qué puedo hacer para protegerme y prevenir la propagación de la enfermedad?",
      body: (
        <React.Fragment>
          <h5>Medidas de protección para todos</h5>
          <p>
            Manténgase al tanto de la información más reciente sobre el brote de COVID-19,
            disponible en el sitio web de la OMS y a través de su red nacional y local
            autoridad de salud pública. Muchos países alrededor del mundo han visto
            casos de COVID-19 y varios han visto brotes. Autoridades en
            China y algunos otros países han logrado frenar o detenerse
            sus brotes Sin embargo, la situación es impredecible, así que verifique
            regularmente para las últimas noticias.
          </p>
          <p>
            Puede reducir sus posibilidades de infectarse o propagar COVID-19
            tomando algunas precauciones simples:
          </p>
          <ul className="list-dot">
            <li>
              Limpie sus manos regularmente y a fondo con un alcohol
              frótelos a mano o lávelos con agua y jabón. <br />
              <strong>Por que?</strong>
              Lavarse las manos con agua y jabón o usar alcohol a mano.
              frotar mata los virus que pueden estar en tus manos.
            </li>
            <li>
              Mantenga al menos 1 metro (3 pies) de distancia entre usted y
              cualquiera que esté tosiendo o estornudando. <br />
              <strong>Por que?</strong> Cuando alguien tose o estornuda, rocía
              Pequeñas gotas de líquido de la nariz o la boca que pueden contener
              virus. Si estás demasiado cerca, puedes respirar las gotas,
              incluido el virus COVID-19 si la persona que tose tiene la
              enfermedad.
            </li>
            <li>
              Evite tocarse los ojos, la nariz y la boca. <br />
              <strong>Por que?</strong> Las manos tocan muchas superficies y pueden levantar
              virus Una vez contaminadas, las manos pueden transferir el virus a su
              ojos, nariz o boca. A partir de ahí, el virus puede ingresar a su cuerpo y
              puede enfermarte
            </li>
            <li>
              Asegúrate de que tú y las personas que te rodean sigan una buena respiración
              higiene. Esto significa cubrirse la boca y la nariz con la inclinación.
              codo o tejido cuando tose o estornuda. Luego deseche el usado
              tejido de inmediato. <br />
              <strong>Por que?</strong> Las gotas propagan el virus. Siguiendo bien
              higiene respiratoria protege a las personas a su alrededor de virus
              como resfriado, gripe y COVID-19.
            </li>
            <li>
              Quédese en casa si no se siente bien. Si tiene fiebre, tos y
              dificultad para respirar, busque atención médica y llame con anticipación.
              Siga las instrucciones de su autoridad de salud local. <br />
              <strong>Por que?</strong>
              Las autoridades nacionales y locales tendrán la información más actualizada.
              información sobre la situación en su área. Llamar por adelantado lo hará
              permita que su proveedor de atención médica lo dirija rápidamente a la derecha
              facilidad de salud. Esto también lo protegerá y ayudará a prevenir
              propagación de virus y otras infecciones.
            </li>
            <li>
              Manténgase actualizado sobre los últimos puntos de acceso COVID-19 (ciudades o locales
              áreas donde COVID-19 se está extendiendo ampliamente). Si es posible, evite
              viajar a lugares, especialmente si usted es una persona mayor o
              tiene diabetes, enfermedad cardíaca o pulmonar. <br />
              <strong>Por que?</strong> Tienes una mayor probabilidad de atrapar
              COVID-19 en una de estas áreas.
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Qué debo hacer si tuve contacto cercano con alguien que tiene COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Miembros del hogar, parejas íntimas y cuidadores en un
            el entorno no sanitario puede tener contacto cercano2 con una persona con
            COVID-19 sintomático confirmado por laboratorio o una persona menor de
            investigación. Los contactos cercanos deben controlar su salud; ellos
            debe llamar a su proveedor de atención médica de inmediato si desarrollan
            síntomas sugestivos de COVID-19 (p. ej., fiebre, tos, falta de
            respiración)
          </p>
          <p>Los contactos cercanos también deben seguir estas recomendaciones:</p>
          <ul className="list-dot">
            <li>
              Asegúrese de comprender y ayudar al paciente a seguir
              las instrucciones de su proveedor de atención médica para los medicamentos y
              cuidado. Debe ayudar al paciente con necesidades básicas en el hogar y
              Brindar apoyo para comprar alimentos, recetas y otros
              Necesidades personales.
            </li>
            <li>
              Monitoree los síntomas del paciente. Si el paciente se enferma,
              llame a su proveedor de atención médica y dígales que el paciente
              tiene COVID-19 confirmado por laboratorio. Esto ayudará a la asistencia sanitaria.
              el consultorio del proveedor toma medidas para mantener a otras personas en el consultorio o
              sala de espera de infectarse. Pídale al proveedor de atención médica que
              llame al departamento de salud local o estatal para obtener orientación adicional.
              Si el paciente tiene una emergencia médica y necesita llamar al 911,
              notificar al personal de despacho que el paciente tiene o está siendo
              evaluado para COVID-19.
            </li>
            <li>
              Los miembros del hogar deben permanecer en otra habitación o estar separados de
              El paciente tanto como sea posible. Los miembros del hogar deben usar un
              Dormitorio y baño separados, si están disponibles.
            </li>
            <li>
              Prohibir a los visitantes que no tienen una necesidad esencial estar en el
              hogar.
            </li>
            <li>
              Los miembros del hogar deben cuidar a cualquier mascota en el hogar. No haga
              manejar mascotas u otros animales mientras está enfermo. & nbsp; Para más
              información, ver
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html/#2019-nCoV-and-animals"
                target="_blank"
              >
              COVID-19 y Animales
              </a>
              .
            </li>
            <li>
              Asegúrese de que los espacios compartidos en el hogar tengan un buen flujo de aire, como
              como por un aire acondicionado o una ventana abierta, si el clima lo permite.
            </li>
            <li>
              Realizar higiene de manos con frecuencia. Lávese las manos con frecuencia con jabón.
              y agua durante al menos 20 segundos o use una mano a base de alcohol
              desinfectante que contiene 60 a 95% de alcohol, que cubre todas las superficies
              de tus manos y frotarlas hasta que se sientan secas. Jabón
              y el agua debe usarse preferentemente si las manos están visiblemente
              sucio.
            </li>
            <li>
              Evite tocarse los ojos, la nariz y la boca con las manos sin lavar.
            </li>
            <li>
              El paciente debe usar una máscara facial cuando esté cerca de otra persona.
              personas. Si el paciente no puede usar una máscara facial (por
              ejemplo, porque causa problemas para respirar), usted, como el
              cuidador, debe usar una máscara cuando esté en la misma habitación que el
              paciente.
            </li>
            <li>
              Use una mascarilla desechable y guantes cuando toque o tenga
              contacto con la sangre, las heces o los fluidos corporales del paciente, como
              saliva, esputo, mucosidad nasal, vómito, orina
              <ul>
                <li>
                  Tire las mascarillas y guantes desechables después de usarlos. Hacer
                  No reutilizar.
                </li>
                <li>
                  Al retirar el equipo de protección personal, primero retire y
                  deshacerse de los guantes. Luego, inmediatamente lávese las manos con
                  jabón y agua o desinfectante para manos a base de alcohol. A continuación, elimine
                  y desecha la mascarilla e inmediatamente lávate las manos
                  nuevamente con agua y jabón o desinfectante para manos a base de alcohol.
                </li>
              </ul>
            </li>
            <li>
              Evite compartir artículos del hogar con el paciente. Usted no debe
              compartir platos, vasos, vasos, utensilios para comer, toallas,
              ropa de cama u otros artículos. Después de que el paciente usa estos artículos, usted
              debe lavarlos a fondo (ver abajo "Lavar bien la ropa").
            </li>
            <li>
              Limpie todas las superficies "de alto contacto", como mostradores, mesas,
              pomos de las puertas, accesorios de baño, inodoros, teléfonos, teclados, tabletas,
              y mesitas de noche, todos los días. Además, limpie cualquier superficie que pueda
              tiene sangre, heces o fluidos corporales.
              <ul>
                <li>
                  Use un espray o una toallita de limpieza doméstica, de acuerdo con la etiqueta
                  instrucciones. Las etiquetas contienen instrucciones de seguridad y
                  uso efectivo del producto de limpieza incluyendo precauciones
                  que debe tomar al aplicar el producto, como usar
                  guantes y asegurarse de tener buena ventilación durante el uso de
                  el producto.
                </li>
              </ul>
            </li>
            <li>
              Lave bien la ropa.
              <ul>
                <li>
                  Quítese y lave inmediatamente la ropa o ropa de cama que tenga
                  sangre, heces o fluidos corporales en ellos.
                </li>
                <li>
                  Use guantes desechables mientras maneja artículos sucios y manténgalo
                  Artículos sucios lejos de su cuerpo. Lávate las manos (con jabón
                  y agua o un desinfectante para manos a base de alcohol) inmediatamente
                  después de quitarte los guantes.
                </li>
                <li>
                  Lea y siga las instrucciones en las etiquetas de la ropa o ropa
                  artículos y detergente. En general, usar una ropa normal
                  detergente según las instrucciones de la lavadora y secar
                  utilizando a fondo las temperaturas más cálidas recomendadas en el
                  etiqueta de ropa.
                </li>
              </ul>
            </li>
            <li>
              Coloque todos los guantes desechables usados, mascarillas y otros
              artículos contaminados en un recipiente forrado antes de desecharlos
              con otros residuos domésticos. Lávese las manos (con agua y jabón).
              o un desinfectante para manos a base de alcohol) inmediatamente después de manipularlo
              estos artículos. El jabón y el agua deben usarse preferentemente si las manos
              están visiblemente sucias
            </li>
            <li>
              Discuta cualquier pregunta adicional con su salud estatal o local
              departamento o proveedor de atención médica. Consultar horarios disponibles cuando
              contactando a su departamento de salud local.
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title: "Who is at higher risk for serious illness from COVID-19?",
      body: (
        <React.Fragment>
          <p>
            <strong>
              Adultos mayores y personas de cualquier edad que tienen antecedentes graves
              condiciones médicas
            </strong>
            puede estar en mayor riesgo de complicaciones más graves por COVID-19.
            Estas personas que pueden estar en mayor riesgo de enfermarse gravemente por
            Esta enfermedad incluye:
          </p>
          <ul className="list-dot">
            <li>
              <strong>Adultos mayores</strong>
            </li>
            <li>
              <strong>
                Las personas que tienen afecciones médicas subyacentes graves.
              </strong>
              like:
              <ul>
                <li>Enfermedad del corazón</li>
                <li>Diabetes</li>
                <li>Enfermedad pulmonar</li>
              </ul>
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Qué deben hacer las personas con mayor riesgo de enfermedad grave con COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Si tiene un mayor riesgo de enfermarse gravemente con COVID-19, usted
            debería: abastecerse de suministros; tomar precauciones diarias para mantener
            espacio entre usted y los demás; cuando salgas en público, sigue
            lejos de otros que están enfermos; limite el contacto cercano y lave su
            manos a menudo; y evitar multitudes, viajes en crucero y no esenciales
            viaje. Si hay un brote en su comunidad, quédese tanto en casa
            como sea posible. Esté atento a los síntomas y signos de emergencia. Si lo consigues
            enfermo, quédese en casa y llame a su médico. Más información sobre cómo
            prepararse, qué hacer si se enferma y cómo las comunidades y
            los cuidadores pueden apoyar a aquellos con mayor riesgo está disponible en
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html"
              target="_blank"
            >
              Personas en riesgo de enfermedades graves por COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Debo usar una máscara para protegerme?",
      body: (
        <React.Fragment>
          <p>
            Solo use una máscara si está enfermo con síntomas de COVID-19 (especialmente
            tos) o cuidar a alguien que pueda tener COVID-19. Desechable
            la mascarilla solo se puede usar una vez. Si no está enfermo o cuidando
            alguien que está enfermo, entonces estás desperdiciando una máscara. Hay un
            escasez mundial de máscaras, por lo que la OMS insta a las personas a usar máscaras
            sabiamente
          </p>
          <p>
            La OMS aconseja el uso racional de máscaras médicas para evitar innecesarios
            desperdicio de recursos preciosos y mal uso de máscaras (
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
              target="_blank"
            >
            ver consejos sobre el uso de máscaras
            </a>
            ).
          </p>
          <p>
            Las formas más efectivas para protegerse y proteger a otros contra
            COVID-19 es para lavarse las manos con frecuencia, cubrirse la tos con
            la curva del codo o tejido y mantener una distancia de al menos 1
            metro (3 pies) de personas que están tosiendo o estornudando. Ver básico
            medidas de protección contra el nuevo coronavirus para más
            información.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title: "¿Cuáles son los síntomas de COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Los síntomas más comunes de COVID-19 son fiebre, cansancio y sequedad.
            tos. Algunos pacientes pueden tener dolores y molestias, congestión nasal,
            secreción nasal, dolor de garganta o diarrea. Estos síntomas suelen ser leves
            y comenzar gradualmente Algunas personas se infectan pero no se desarrollan
            cualquier síntoma y no se siente mal. La mayoría de las personas (alrededor del 80%) se recuperan
            de la enfermedad sin necesidad de un tratamiento especial. Alrededor de 1 de
            cada 6 personas que contraen COVID-19 se enferman gravemente y se desarrollan
            respiración dificultosa. Las personas mayores y las personas con
            problemas médicos como presión arterial alta, problemas cardíacos o
            diabetes, son más propensos a desarrollar enfermedades graves. Personas con
            fiebre, tos y dificultad para respirar deben buscar atención médica.
          </p>
          <p>
            Leer acerca de
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
              target="_blank"
            >
              COVID-19 síntomas
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Should I be tested for COVID-19?",
      body: (
        <React.Fragment>
          <p>
            No todos necesitan hacerse la prueba de COVID-19. Para información sobre
            prueba, ver
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"
              target="_blank"
            >
            Prueba para COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Dónde puedo hacerme la prueba de COVID-19?",
      body: (
        <React.Fragment>
          <p>
            El proceso y las ubicaciones para las pruebas varían de un lugar a otro.
            Póngase en contacto con su departamento estatal, local, tribal o territorial para
            más información o comuníquese con un proveedor médico. Estado y
            los departamentos locales de salud pública han recibido pruebas de los CDC mientras
            proveedores médicos están recibiendo pruebas desarrolladas por comerciales
            fabricantes. Si bien los suministros de estas pruebas están aumentando, puede
            aún será difícil encontrar un lugar para hacerse la prueba.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Puede una persona dar negativo y luego dar positivo por COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Usando la prueba de diagnóstico desarrollada por los CDC, un resultado negativo significa
            que el virus que causa COVID-19 no se encontró en la persona
            muestra. En las primeras etapas de la infección, es posible que el virus
            No será detectado.
          </p>
          <p>
            Para COVID-19, un resultado de prueba negativo para una muestra recolectada mientras
            la persona tiene síntomas probablemente significa que el virus COVID-19 no es
            causando su enfermedad actual.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title: "¿Qué debo hacer si hay un brote en mi comunidad?",
      body: (
        <React.Fragment>
          <p>
            Durante un brote, mantén la calma y pon tu plan de preparación a
            trabajo. Siga los pasos a continuación:
          </p>
          <p>
            <strong>
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/about/prevention-treatment.html"
                target="_blank"
              >
              Protégete y a los demás(
              </a>
              .
            </strong>
          </p>
          <ul className="list-dot">
            <li>
              Quédate en casa si estás enfermo. Manténgase alejado de las personas que están enfermas.
              Limite el contacto cercano con otros tanto como sea posible (aproximadamente 6
              pies)
            </li>
          </ul>
          <p>
            <strong>Ponga en práctica su plan familiar. </strong>
          </p>
          <ul className="list-dot">
            <li>
              <strong>Manténgase informado sobre la situación local de COVID-19</strong>.
              Tenga en cuenta los despidos temporales de la escuela en su área, ya que esto puede
              afectar la rutina diaria de su hogar.
            </li>
          </ul>
          <ul className="list-dot">
            <li>
              <strong>Continúa practicando acciones preventivas cotidianas. </strong>
              Cubra la tos y los estornudos con un pañuelo desechable y lávese las manos con frecuencia.
              con agua y jabón durante al menos 20 segundos. Si hay agua y jabón
              no disponible, use un desinfectante para manos que contenga 60% de alcohol.
              Limpie diariamente las superficies y objetos que se tocan con frecuencia usando un
              detergente doméstico regular y agua.
            </li>
            <li>
              <strong>
                Notifique a su lugar de trabajo lo antes posible si su trabajo habitual
                Cambios de horario.
              </strong>
              Solicite trabajar desde casa o tome un permiso si usted o alguien en su
              el hogar se enferma con
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html"
                target="_blank"
              >
                COVID-19 síntomas
              </a>
              , o si la escuela de su hijo se cierra temporalmente.
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/guidance-business-response.html"
                target="_blank"
              >
              Aprenda cómo las empresas y los empleadores pueden planificar y responder a
              COVID-19.
              </a>
            </li>
            <li>
              <strong>Póngase en contacto con otras personas por teléfono o correo electrónico. </strong>If
              tiene una condición médica crónica y vive solo, pregunte a su familia,
              amigos y proveedores de atención médica para controlarlo durante un
              brote. Manténgase en contacto con familiares y amigos, especialmente aquellos
              con mayor riesgo de desarrollar enfermedades graves, como las de mayor edad
              adultos y personas con afecciones médicas crónicas graves.
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Cómo preparo a mis hijos en caso de brote de COVID-19 en nuestra comunidad??",
      body: (
        <React.Fragment>
          <p>
            Los brotes pueden ser estresantes para adultos y niños. Habla con tu
            niños sobre el brote, trate de mantener la calma y tranquilizarlos
            Que están a salvo. Si corresponde, explíqueles que la mayoría
            La enfermedad de COVID-19 parece ser leve.
          </p>
          <p>
            <a
              href="https://www.cdc.gov/childrenindisasters/helping-children-cope.html"
              target="_blank"
            >
             Los niños responden de manera diferente a situaciones estresantes que los adultos.
            </a>
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
      "¿Qué medidas deben tomar los padres para proteger a los niños durante un brote en la comunidad?",
      body: (
        <React.Fragment>
          <p>
            Este es un virus nuevo y todavía estamos aprendiendo sobre él, pero hasta ahora,
            No parece haber mucha enfermedad en los niños. Más
            enfermedad, incluida enfermedad grave, está ocurriendo en adultos de
            edad laboral y adultos mayores. Si hay casos de COVID-19 que impactan
            la escuela de su hijo, la escuela puede despedir a los estudiantes. Seguir
            despidos escolares en su comunidad. Lee o mira medios locales
            fuentes que informan los despidos escolares. Si las escuelas se cierran
            temporalmente, use arreglos alternativos de cuidado de niños, si es necesario.
          </p>
          <p>
            Si su hijo / hijos se enferman con COVID-19, notifique a su
            guardería o escuela. Hable con los maestros sobre el aula.
            tareas y actividades que pueden hacer desde casa para mantenerse al día
            su trabajo escolar
          </p>
          <p>
            Disuadir a los niños y adolescentes de reunirse en otros lugares públicos.
            mientras se cierra la escuela para ayudar a frenar la propagación de COVID-19 en el
            comunidad.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Se cerrarán las escuelas si hay un brote en mi comunidad??",
      body: (
        <React.Fragment>
          <p>
            Dependiendo de la situación, los funcionarios de salud pública pueden recomendar
            acciones comunitarias para reducir las exposiciones a COVID-19, como la escuela
            despidos. Lee o mira fuentes de medios locales que informan sobre la escuela
            despidos o vigile la comunicación de la escuela de su hijo.
            Si las escuelas se cierran temporalmente, desanime a los estudiantes y al personal
            desde reunirse o socializar en cualquier lugar, como en la casa de un amigo, un
            restaurante favorito, o el centro comercial local.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Se puede transmitir el virus que causa COVID-19 a través de los alimentos, incluidos los alimentos refrigerados o congelados?",
      body: (
        <React.Fragment>
          <p>
            Generalmente se cree que los coronavirus se transmiten de
            persona a persona a través de gotitas respiratorias. Actualmente no hay
            evidencia para apoyar la transmisión de COVID-19 asociado con alimentos.
            Antes de preparar o comer alimentos, es importante lavar siempre
            manos con agua y jabón durante 20 segundos para la seguridad alimentaria general.
            Durante todo el día, lávese las manos después de sonarse la nariz, toser
            o estornudar, o ir al baño.
          </p>
          <p>
            Es posible que una persona pueda obtener COVID-19 tocando un
            superficie u objeto que tiene el virus y luego toca su
            propia boca, nariz o posiblemente sus ojos, pero no se cree que esto
            ser la principal forma en que se propaga el virus.
          </p>
          <p>
            En general, debido a la poca capacidad de supervivencia de estos coronavirus en
            superficies, existe un riesgo muy bajo de propagación de los productos alimenticios
            o embalaje que se envía durante un período de días o semanas a
            temperatura ambiente, refrigerada o congelada.
          </p>
          <p>
            Aprenda lo que se sabe sobre el
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
              target="_blank"
            >
              Esparcimiento del COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Debo ir a trabajar si hay un brote en mi comunidad?",
      body: (
        <React.Fragment>
          <p>
            Siga los consejos de sus funcionarios de salud locales. Quédate en casa si
            lata. Hable con su empleador para hablar sobre trabajar desde casa, tomar
            irse si usted o alguien en su hogar se enferma
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html"
              target="_blank"
            >
             Síntomas COVID-19
            </a>
            , o si la escuela de su hijo se cierra temporalmente. Empleadores
            debe tener en cuenta que es posible que más empleados deban quedarse en casa para cuidar
            para niños enfermos u otros miembros de la familia enfermos de lo habitual en caso
            de un brote comunitario.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title:
        "¿El virus COVID-19 puede transmitirse en áreas con climas cálidos y húmedos?",
      body: (
        <React.Fragment>
          <p>
            De la evidencia hasta ahora, el virus COVID-19 puede transmitirse en
            TODAS LAS ÁREAS, incluidas las zonas con clima cálido y húmedo. A pesar de
            clima, adopte medidas de protección si vive o viaja a un
            área de informes COVID-19. La mejor manera de protegerte contra
            COVID-19 se limpia frecuentemente las manos. Al hacer esto, usted
            eliminar virus que puedan estar en sus manos y evitar infecciones que
            podría ocurrir al tocarse los ojos, la boca y la nariz.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "El clima frío y la nieve NO PUEDEN matar al nuevo coronavirus",
      body: (
        <React.Fragment>
          <p>
            No hay razón para creer que el clima frío puede matar al nuevo
            coronavirus u otras enfermedades. La temperatura normal del cuerpo humano.
            permanece alrededor de 36.5 ° C a 37 ° C, independientemente del exterior
            temperatura o clima. La forma más efectiva de protegerte
            contra el nuevo coronavirus se limpia frecuentemente las manos
            con un desinfectante para manos a base de alcohol o lavándolos con agua y jabón.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Tomar un baño caliente no previene la nueva enfermedad por coronavirus",
      body: (
        <React.Fragment>
          <p>
            Tomar un baño caliente no le impedirá atrapar COVID-19. Tu
            la temperatura corporal normal permanece alrededor de 36.5 ° C a 37 ° C, independientemente de
            La temperatura de su baño o ducha. En realidad, tomando un baño caliente
            con agua extremadamente caliente puede ser dañino, ya que puede quemarte. los
            La mejor manera de protegerse contra COVID-19 es con frecuencia
            limpiando tus manos Al hacer esto, elimina los virus que pueden ser
            en sus manos y evite la infección que podría ocurrir al tocar
            tus ojos, boca y nariz.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "El nuevo coronavirus NO PUEDE transmitirse a través de las picaduras de mosquitos.",
      body: (
        <React.Fragment>
          <p>
            Hasta la fecha no ha habido información ni evidencia que sugiera que
            El nuevo coronavirus podría ser transmitido por mosquitos. El nuevo
            El coronavirus es un virus respiratorio que se propaga principalmente a través de
            gotas generadas cuando una persona infectada tose o estornuda, o
            a través de gotas de saliva o secreción de la nariz. Proteger
            usted mismo, limpie sus manos frecuentemente con un desinfectante para manos a base de alcohol
            o lávelos con agua y jabón. Además, evite el contacto cercano con
            cualquiera que esté tosiendo y estornudando.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Los secadores de manos son efectivos para matar el nuevo coronavirus?",
      body: (
        <React.Fragment>
          <p>
           No. Los secadores de manos no son efectivos para matar el 2019-nCoV. A
            protégete contra el nuevo coronavirus, debes
            lávese las manos con un desinfectante para manos a base de alcohol o láveselas con
            Jabón y agua. Una vez que te limpies las manos, debes secarlas
            completamente usando toallas de papel o un secador de aire caliente.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "¿Puede una lámpara de desinfección ultravioleta matar el nuevo coronavirus?",
      body: (
        <React.Fragment>
          <p>
            Las lámparas UV no deben usarse para esterilizar las manos u otras áreas de
            piel ya que la radiación UV puede causar irritación de la piel.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:"¿Qué tan efectivos son los escáneres térmicos en la detección de personas infectadas con el nuevo coronavirus?",
      body: (
        <React.Fragment>
          <p>
            Los escáneres térmicos son efectivos para detectar personas que tienen
            desarrolló fiebre (es decir, tiene una temperatura corporal más alta de lo normal)
            por infección con el nuevo coronavirus.
          </p>
          <p>
            Sin embargo, no pueden detectar personas que están infectadas pero que aún no lo están
            enfermo de fiebre Esto se debe a que toma entre 2 y 10 días.
            antes de que las personas infectadas se enfermen y desarrollen fiebre.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "¿Las vacunas contra la neumonía lo protegen contra el nuevo coronavirus?",
      body: (
        <React.Fragment>
          <p>
            No. Vacunas contra la neumonía, como la vacuna antineumocócica y
            Vacuna contra la influenza Haemophilus tipo B (Hib), no proporcione
            protección contra el nuevo coronavirus.
          </p>
          <p>
            El virus es tan nuevo y diferente que necesita su propia vacuna.
            Los investigadores están tratando de desarrollar una vacuna contra 2019-nCoV, y
            La OMS está apoyando sus esfuerzos.
          </p>
          <p>
            Aunque estas vacunas no son efectivas contra 2019-nCoV,
            la vacunación contra enfermedades respiratorias es muy recomendable para
            Protege tu salud.
          </p>
        </React.Fragment>
      ),
    },
  ],
];

const section_9 = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const itemClickHandler = (index) => {
    setSelectedTab(index);
  };

  const tabList = tabs.map((title, index) => (
    <Tab
      key={index}
      title={title}
      selected={selectedTab === index}
      clicked={() => itemClickHandler(index)}
    />
  ));

  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-faq"
          : "section section-l bg-white section-faq"
      }
      id="faq"
    >
      <div className="container">
        <div className={["section-head text-center"].join(" ")}>
          <h5 className="subtitle">preguntas frecuentes</h5>
          <h2 className="title">
            Pregunta <br className="d-sm-none" /> &amp; Respuesta
          </h2>
        </div>
        <div className="section-content">
          <div className={["row g-gs"].join(" ")}>
            <div className="col-lg-4">
              <ul
                className={
                  props.darkTheme
                    ? "nav nav-tabs nav-tabs-vr nav-tabs-btns dark"
                    : "nav nav-tabs nav-tabs-vr nav-tabs-btns"
                }
              >
                {tabList}
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="tab-content">
                {<Items sections={items[selectedTab]} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(section_9);
