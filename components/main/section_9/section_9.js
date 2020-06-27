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
      title: "What is a novel coronavirus?",
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
              The patient is free from fever without the use of fever-reducing
              medications.
            </li>
            <li>The patient is no longer showing symptoms, including cough.</li>
            <li>
              The patient has tested negative on at least two consecutive
              respiratory specimens collected at least 24 hours apart.
            </li>
          </ul>
          <p>
            Someone who has been released from isolation is not considered to
            pose a risk of infection to others.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Will warm weather stop the outbreak of COVID-19?",
      body: (
        <React.Fragment>
          <p>
            It is not yet known whether weather and temperature impact the
            spread of COVID-19. Some other viruses, like the common cold and
            flu, spread more during cold weather months but that does not mean
            it is impossible to become sick with these viruses during other
            months. At this time, it is not known whether the spread of COVID-19
            will decrease when weather becomes warmer. There is much more to
            learn about the transmissibility, severity, and other features
            associated with COVID-19 and investigations are ongoing.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "Can the virus that causes COVID-19 be spread through food, including refrigerated or frozen food?",
      body: (
        <React.Fragment>
          <p>
            Coronaviruses are generally thought to be spread from
            person-to-person through respiratory droplets. Currently there is no
            evidence to support transmission of COVID-19 associated with food.
            Before preparing or eating food it is important to always wash your
            hands with soap and water for 20 seconds for general food safety.
            Throughout the day wash your hands after blowing your nose, coughing
            or sneezing, or going to the bathroom.
          </p>
          <p>
            It may be possible that a person can get COVID-19 by touching a
            surface or object that has the virus on it and then touching their
            own mouth, nose, or possibly their eyes, but this is not thought to
            be the main way the virus spreads.
          </p>
          <p>
            In general, because of poor survivability of these coronaviruses on
            surfaces, there is likely very low risk of spread from food products
            or packaging that are shipped over a period of days or weeks at
            ambient, refrigerated, or frozen temperatures.
          </p>
          <p>
            Learn what is known about the
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
              target="_blank"
            >
              spread of COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "What is community spread?",
      body: (
        <React.Fragment>
          <p>
            Community spread means people have been infected with the virus in
            an area, including some who are not sure how or where they became
            infected.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title:
        "What can I do to protect myself and prevent the spread of disease?",
      body: (
        <React.Fragment>
          <h5>Protection measures for everyone</h5>
          <p>
            Stay aware of the latest information on the COVID-19 outbreak,
            available on the WHO website and through your national and local
            public health authority. Many countries around the world have seen
            cases of COVID-19 and several have seen outbreaks. Authorities in
            China and some other countries have succeeded in slowing or stopping
            their outbreaks. However, the situation is unpredictable so check
            regularly for the latest news.
          </p>
          <p>
            You can reduce your chances of being infected or spreading COVID-19
            by taking some simple precautions:
          </p>
          <ul className="list-dot">
            <li>
              Regularly and thoroughly clean your hands with an alcohol-based
              hand rub or wash them with soap and water. <br />
              <strong>Why?</strong>
              Washing your hands with soap and water or using alcohol-based hand
              rub kills viruses that may be on your hands.
            </li>
            <li>
              Maintain at least 1 metre (3 feet) distance between yourself and
              anyone who is coughing or sneezing. <br />
              <strong>Why?</strong> When someone coughs or sneezes they spray
              small liquid droplets from their nose or mouth which may contain
              virus. If you are too close, you can breathe in the droplets,
              including the COVID-19 virus if the person coughing has the
              disease.
            </li>
            <li>
              Avoid touching eyes, nose and mouth. <br />
              <strong>Why?</strong> Hands touch many surfaces and can pick up
              viruses. Once contaminated, hands can transfer the virus to your
              eyes, nose or mouth. From there, the virus can enter your body and
              can make you sick.
            </li>
            <li>
              Make sure you, and the people around you, follow good respiratory
              hygiene. This means covering your mouth and nose with your bent
              elbow or tissue when you cough or sneeze. Then dispose of the used
              tissue immediately. <br />
              <strong>Why?</strong> Droplets spread virus. By following good
              respiratory hygiene you protect the people around you from viruses
              such as cold, flu and COVID-19.
            </li>
            <li>
              Stay home if you feel unwell. If you have a fever, cough and
              difficulty breathing, seek medical attention and call in advance.
              Follow the directions of your local health authority. <br />
              <strong>Why?</strong>
              National and local authorities will have the most up to date
              information on the situation in your area. Calling in advance will
              allow your health care provider to quickly direct you to the right
              health facility. This will also protect you and help prevent
              spread of viruses and other infections.
            </li>
            <li>
              Keep up to date on the latest COVID-19 hotspots (cities or local
              areas where COVID-19 is spreading widely). If possible, avoid
              traveling to places – especially if you are an older person or
              have diabetes, heart or lung disease. <br />
              <strong>Why?</strong> You have a higher chance of catching
              COVID-19 in one of these areas.
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title:
        "What should I do if I had close contact with someone who has COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Household members, intimate partners, and caregivers in a
            nonhealthcare setting may have close contact2 with a person with
            symptomatic, laboratory-confirmed COVID-19 or a person under
            investigation. Close contacts should monitor their health; they
            should call their healthcare provider right away if they develop
            symptoms suggestive of COVID-19 (e.g., fever, cough, shortness of
            breath)
          </p>
          <p>Close contacts should also follow these recommendations:</p>
          <ul className="list-dot">
            <li>
              Make sure that you understand and can help the patient follow
              their healthcare provider’s instructions for medication(s) and
              care. You should help the patient with basic needs in the home and
              provide support for getting groceries, prescriptions, and other
              personal needs.
            </li>
            <li>
              Monitor the patient’s symptoms. If the patient is getting sicker,
              call his or her healthcare provider and tell them that the patient
              has laboratory-confirmed COVID-19. This will help the healthcare
              provider’s office take steps to keep other people in the office or
              waiting room from getting infected. Ask the healthcare provider to
              call the local or state health department for additional guidance.
              If the patient has a medical emergency and you need to call 911,
              notify the dispatch personnel that the patient has, or is being
              evaluated for COVID-19.
            </li>
            <li>
              Household members should stay in another room or be separated from
              the patient as much as possible. Household members should use a
              separate bedroom and bathroom, if available.
            </li>
            <li>
              Prohibit visitors who do not have an essential need to be in the
              home.
            </li>
            <li>
              Household members should care for any pets in the home. Do not
              handle pets or other animals while sick.&nbsp; For more
              information, see
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html/#2019-nCoV-and-animals"
                target="_blank"
              >
                COVID-19 and Animals
              </a>
              .
            </li>
            <li>
              Make sure that shared spaces in the home have good air flow, such
              as by an air conditioner or an opened window, weather permitting.
            </li>
            <li>
              Perform hand hygiene frequently. Wash your hands often with soap
              and water for at least 20 seconds or use an alcohol-based hand
              sanitizer that contains 60 to 95% alcohol, covering all surfaces
              of your hands and rubbing them together until they feel dry. Soap
              and water should be used preferentially if hands are visibly
              dirty.
            </li>
            <li>
              Avoid touching your eyes, nose, and mouth with unwashed hands.
            </li>
            <li>
              The patient should wear a facemask when you are around other
              people. If the patient is not able to wear a facemask (for
              example, because it causes trouble breathing), you, as the
              caregiver, should wear a mask when you are in the same room as the
              patient.
            </li>
            <li>
              Wear a disposable facemask and gloves when you touch or have
              contact with the patient’s blood, stool, or body fluids, such as
              saliva, sputum, nasal mucus, vomit, urine.
              <ul>
                <li>
                  Throw out disposable facemasks and gloves after using them. Do
                  not reuse.
                </li>
                <li>
                  When removing personal protective equipment, first remove and
                  dispose of gloves. Then, immediately clean your hands with
                  soap and water or alcohol-based hand sanitizer. Next, remove
                  and dispose of facemask, and immediately clean your hands
                  again with soap and water or alcohol-based hand sanitizer.
                </li>
              </ul>
            </li>
            <li>
              Avoid sharing household items with the patient. You should not
              share dishes, drinking glasses, cups, eating utensils, towels,
              bedding, or other items. After the patient uses these items, you
              should wash them thoroughly (see below “Wash laundry thoroughly”).
            </li>
            <li>
              Clean all “high-touch” surfaces, such as counters, tabletops,
              doorknobs, bathroom fixtures, toilets, phones, keyboards, tablets,
              and bedside tables, every day. Also, clean any surfaces that may
              have blood, stool, or body fluids on them.
              <ul>
                <li>
                  Use a household cleaning spray or wipe, according to the label
                  instructions. Labels contain instructions for safe and
                  effective use of the cleaning product including precautions
                  you should take when applying the product, such as wearing
                  gloves and making sure you have good ventilation during use of
                  the product.
                </li>
              </ul>
            </li>
            <li>
              Wash laundry thoroughly.
              <ul>
                <li>
                  Immediately remove and wash clothes or bedding that have
                  blood, stool, or body fluids on them.
                </li>
                <li>
                  Wear disposable gloves while handling soiled items and keep
                  soiled items away from your body. Clean your hands (with soap
                  and water or an alcohol-based hand sanitizer) immediately
                  after removing your gloves.
                </li>
                <li>
                  Read and follow directions on labels of laundry or clothing
                  items and detergent. In general, using a normal laundry
                  detergent according to washing machine instructions and dry
                  thoroughly using the warmest temperatures recommended on the
                  clothing label.
                </li>
              </ul>
            </li>
            <li>
              Place all used disposable gloves, facemasks, and other
              contaminated items in a lined container before disposing of them
              with other household waste. Clean your hands (with soap and water
              or an alcohol-based hand sanitizer) immediately after handling
              these items. Soap and water should be used preferentially if hands
              are visibly dirty.
            </li>
            <li>
              Discuss any additional questions with your state or local health
              department or healthcare provider. Check available hours when
              contacting your local health department.
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
              Older adults and people of any age who have serious underlying
              medical conditions
            </strong>
            may be at higher risk for more serious complications from COVID-19.
            These people who may be at higher risk of getting very sick from
            this illness, includes:
          </p>
          <ul className="list-dot">
            <li>
              <strong>Older adults</strong>
            </li>
            <li>
              <strong>
                People who have serious underlying medical conditions
              </strong>
              like:
              <ul>
                <li>Heart disease</li>
                <li>Diabetes</li>
                <li>Lung disease</li>
              </ul>
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title:
        "What should people at higher risk of serious illness with COVID-19 do?",
      body: (
        <React.Fragment>
          <p>
            If you are at higher risk of getting very sick from COVID-19, you
            should: stock up on supplies; take everyday precautions to keep
            space between yourself and others; when you go out in public, keep
            away from others who are sick; limit close contact and wash your
            hands often; and avoid crowds, cruise travel, and non-essential
            travel. If there is an outbreak in your community, stay home as much
            as possible. Watch for symptoms and emergency signs. If you get
            sick, stay home and call your doctor. More information on how to
            prepare, what to do if you get sick, and how communities and
            caregivers can support those at higher risk is available on
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html"
              target="_blank"
            >
              People at Risk for Serious Illness from COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Should I wear a mask to protect myself?",
      body: (
        <React.Fragment>
          <p>
            Only wear a mask if you are ill with COVID-19 symptoms (especially
            coughing) or looking after someone who may have COVID-19. Disposable
            face mask can only be used once. If you are not ill or looking after
            someone who is ill then you are wasting a mask. There is a
            world-wide shortage of masks, so WHO urges people to use masks
            wisely.
          </p>
          <p>
            WHO advises rational use of medical masks to avoid unnecessary
            wastage of precious resources and mis-use of masks (
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
              target="_blank"
            >
              see Advice on the use of masks
            </a>
            ).
          </p>
          <p>
            The most effective ways to protect yourself and others against
            COVID-19 are to frequently clean your hands, cover your cough with
            the bend of elbow or tissue and maintain a distance of at least 1
            meter (3 feet) from people who are coughing or sneezing. See basic
            protective measures against the new coronavirus for more
            information.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title: "What are the symptoms of COVID-19?",
      body: (
        <React.Fragment>
          <p>
            The most common symptoms of COVID-19 are fever, tiredness, and dry
            cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild
            and begin gradually. Some people become infected but don’t develop
            any symptoms and don't feel unwell. Most people (about 80%) recover
            from the disease without needing special treatment. Around 1 out of
            every 6 people who gets COVID-19 becomes seriously ill and develops
            difficulty breathing. Older people, and those with underlying
            medical problems like high blood pressure, heart problems or
            diabetes, are more likely to develop serious illness. People with
            fever, cough and difficulty breathing should seek medical attention.
          </p>
          <p>
            Read about
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
              target="_blank"
            >
              COVID-19 Symptoms from CDC.gov
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
            Not everyone needs to be tested for COVID-19. For information about
            testing, see
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html"
              target="_blank"
            >
              Testing for COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Where can I get tested for COVID-19?",
      body: (
        <React.Fragment>
          <p>
            The process and locations for testing vary from place to place.
            Contact your state, local, tribal, or territorial department for
            more information, or reach out to a medical provider. State and
            local public health departments have received tests from CDC while
            medical providers are getting tests developed by commercial
            manufacturers. While supplies of these tests are increasing, it may
            still be difficult to find someplace to get tested.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Can a person test negative and later test positive for COVID-19?",
      body: (
        <React.Fragment>
          <p>
            Using the CDC-developed diagnostic test, a negative result means
            that the virus that causes COVID-19 was not found in the person’s
            sample. In the early stages of infection, it is possible the virus
            will not be detected.
          </p>
          <p>
            For COVID-19, a negative test result for a sample collected while a
            person has symptoms likely means that the COVID-19 virus is not
            causing their current illness.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title: "What should I do if there is an outbreak in my community?",
      body: (
        <React.Fragment>
          <p>
            During an outbreak, stay calm and put your preparedness plan to
            work. Follow the steps below:
          </p>
          <p>
            <strong>
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/about/prevention-treatment.html"
                target="_blank"
              >
                Protect yourself and others
              </a>
              .
            </strong>
          </p>
          <ul className="list-dot">
            <li>
              Stay home if you are sick. Keep away from people who are sick.
              Limit close contact with others as much as possible (about 6
              feet).
            </li>
          </ul>
          <p>
            <strong>Put your household plan into action. </strong>
          </p>
          <ul className="list-dot">
            <li>
              <strong>Stay informed about the local COVID-19 situation</strong>.
              Be aware of temporary school dismissals in your area, as this may
              affect your household’s daily routine.
            </li>
          </ul>
          <ul className="list-dot">
            <li>
              <strong>Continue practicing everyday preventive actions. </strong>
              Cover coughs and sneezes with a tissue and wash your hands often
              with soap and water for at least 20 seconds. If soap and water are
              not available, use a hand sanitizer that contains 60% alcohol.
              Clean frequently touched surfaces and objects daily using a
              regular household detergent and water.
            </li>
            <li>
              <strong>
                Notify your workplace as soon as possible if your regular work
                schedule changes.
              </strong>
              Ask to work from home or take leave if you or someone in your
              household gets sick with
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html"
                target="_blank"
              >
                COVID-19 symptoms
              </a>
              , or if your child’s school is dismissed temporarily.
              <a
                href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/guidance-business-response.html"
                target="_blank"
              >
                Learn how businesses and employers can plan for and respond to
                COVID-19.
              </a>
            </li>
            <li>
              <strong>Stay in touch with others by phone or email. </strong>If
              you have a chronic medical condition and live alone, ask family,
              friends, and health care providers to check on you during an
              outbreak. Stay in touch with family and friends, especially those
              at increased risk of developing severe illness, such as older
              adults and people with severe chronic medical conditions.
            </li>
          </ul>
        </React.Fragment>
      ),
    },
    {
      title:
        "How do I prepare my children in case of COVID-19 outbreak in our community?",
      body: (
        <React.Fragment>
          <p>
            Outbreaks can be stressful for adults and children. Talk with your
            children about the outbreak, try to stay calm, and reassure them
            that they are safe. If appropriate, explain to them that most
            illness from COVID-19 seems to be mild.
          </p>
          <p>
            <a
              href="https://www.cdc.gov/childrenindisasters/helping-children-cope.html"
              target="_blank"
            >
              Children respond differently to stressful situations than adults
            </a>
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "What steps should parents take to protect children during a community outbreak?",
      body: (
        <React.Fragment>
          <p>
            This is a new virus and we are still learning about it, but so far,
            there does not seem to be a lot of illness in children. Most
            illness, including serious illness, is happening in adults of
            working age and older adults. If there cases of COVID-19 that impact
            your child’s school, the school may dismiss students. Keep track of
            school dismissals in your community. Read or watch local media
            sources that report school dismissals. If schools are dismissed
            temporarily, use alternative childcare arrangements, if needed.
          </p>
          <p>
            If your child/children become sick with COVID-19, notify their
            childcare facility or school. Talk with teachers about classroom
            assignments and activities they can do from home to keep up with
            their schoolwork.
          </p>
          <p>
            Discourage children and teens from gathering in other public places
            while school is dismissed to help slow the spread of COVID-19 in the
            community.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "Will schools be dismissed if there is an outbreak in my community?",
      body: (
        <React.Fragment>
          <p>
            Depending on the situation, public health officials may recommend
            community actions to reduce exposures to COVID-19, such as school
            dismissals. Read or watch local media sources that report school
            dismissals or and watch for communication from your child’s school.
            If schools are dismissed temporarily, discourage students and staff
            from gathering or socializing anywhere, like at a friend’s house, a
            favorite restaurant, or the local shopping mall.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "Can the virus that causes COVID-19 be spread through food, including refrigerated or frozen food?",
      body: (
        <React.Fragment>
          <p>
            Coronaviruses are generally thought to be spread from
            person-to-person through respiratory droplets. Currently there is no
            evidence to support transmission of COVID-19 associated with food.
            Before preparing or eating food it is important to always wash your
            hands with soap and water for 20 seconds for general food safety.
            Throughout the day wash your hands after blowing your nose, coughing
            or sneezing, or going to the bathroom.
          </p>
          <p>
            It may be possible that a person can get COVID-19 by touching a
            surface or object that has the virus on it and then touching their
            own mouth, nose, or possibly their eyes, but this is not thought to
            be the main way the virus spreads.
          </p>
          <p>
            In general, because of poor survivability of these coronaviruses on
            surfaces, there is likely very low risk of spread from food products
            or packaging that are shipped over a period of days or weeks at
            ambient, refrigerated, or frozen temperatures.
          </p>
          <p>
            Learn what is known about the
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html"
              target="_blank"
            >
              spread of COVID-19
            </a>
            .
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Should I go to work if there is an outbreak in my community?",
      body: (
        <React.Fragment>
          <p>
            Follow the advice of your local health officials. Stay home if you
            can. Talk to your employer to discuss working from home, taking
            leave if you or someone in your household gets sick with
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html"
              target="_blank"
            >
              COVID-19 symptoms
            </a>
            , or if your child’s school is dismissed temporarily. Employers
            should be aware that more employees may need to stay at home to care
            for sick children or other sick family members than is usual in case
            of a community outbreak.
          </p>
        </React.Fragment>
      ),
    },
  ],
  [
    {
      title:
        "COVID-19 virus can be transmitted in areas with hot and humid climates?",
      body: (
        <React.Fragment>
          <p>
            From the evidence so far, the COVID-19 virus can be transmitted in
            ALL AREAS, including areas with hot and humid weather. Regardless of
            climate, adopt protective measures if you live in, or travel to an
            area reporting COVID-19. The best way to protect yourself against
            COVID-19 is by frequently cleaning your hands. By doing this you
            eliminate viruses that may be on your hands and avoid infection that
            could occur by then touching your eyes, mouth, and nose.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Cold weather and snow CANNOT kill the new coronavirus",
      body: (
        <React.Fragment>
          <p>
            There is no reason to believe that cold weather can kill the new
            coronavirus or other diseases. The normal human body temperature
            remains around 36.5°C to 37°C, regardless of the external
            temperature or weather. The most effective way to protect yourself
            against the new coronavirus is by frequently cleaning your hands
            with alcohol-based hand rub or washing them with soap and water.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Taking a hot bath does not prevent the new coronavirus disease",
      body: (
        <React.Fragment>
          <p>
            Taking a hot bath will not prevent you from catching COVID-19. Your
            normal body temperature remains around 36.5°C to 37°C, regardless of
            the temperature of your bath or shower. Actually, taking a hot bath
            with extremely hot water can be harmful, as it can burn you. The
            best way to protect yourself against COVID-19 is by frequently
            cleaning your hands. By doing this you eliminate viruses that may be
            on your hands and avoid infection that could occur by then touching
            your eyes, mouth, and nose.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "The new coronavirus CANNOT be transmitted through mosquito bites.",
      body: (
        <React.Fragment>
          <p>
            To date there has been no information nor evidence to suggest that
            the new coronavirus could be transmitted by mosquitoes. The new
            coronavirus is a respiratory virus which spreads primarily through
            droplets generated when an infected person coughs or sneezes, or
            through droplets of saliva or discharge from the nose. To protect
            yourself, clean your hands frequently with an alcohol-based hand rub
            or wash them with soap and water. Also, avoid close contact with
            anyone who is coughing and sneezing.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Are hand dryers effective in killing the new coronavirus?",
      body: (
        <React.Fragment>
          <p>
            No. Hand dryers are not effective in killing the 2019-nCoV. To
            protect yourself against the new coronavirus, you should frequently
            clean your hands with an alcohol-based hand rub or wash them with
            soap and water. Once your hands are cleaned, you should dry them
            thoroughly by using paper towels or a warm air dryer.
          </p>
        </React.Fragment>
      ),
    },
    {
      title: "Can an ultraviolet disinfection lamp kill the new coronavirus?",
      body: (
        <React.Fragment>
          <p>
            UV lamps should not be used to sterilize hands or other areas of
            skin as UV radiation can cause skin irritation.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "How effective are thermal scanners in detecting people infected with the new coronavirus?",
      body: (
        <React.Fragment>
          <p>
            Thermal scanners are effective in detecting people who have
            developed a fever (i.e. have a higher than normal body temperature)
            because of infection with the new coronavirus.
          </p>
          <p>
            However, they cannot detect people who are infected but are not yet
            sick with fever. This is because it takes between 2 and 10 days
            before people who are infected become sick and develop a fever.
          </p>
        </React.Fragment>
      ),
    },
    {
      title:
        "Do vaccines against pneumonia protect you against the new coronavirus?",
      body: (
        <React.Fragment>
          <p>
            No. Vaccines against pneumonia, such as pneumococcal vaccine and
            Haemophilus influenza type B (Hib) vaccine, do not provide
            protection against the new coronavirus.
          </p>
          <p>
            The virus is so new and different that it needs its own vaccine.
            Researchers are trying to develop a vaccine against 2019-nCoV, and
            WHO is supporting their efforts.
          </p>
          <p>
            Although these vaccines are not effective against 2019-nCoV,
            vaccination against respiratory illnesses is highly recommended to
            protect your health.
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
          <h5 className="subtitle">Frequently Asked Questions</h5>
          <h2 className="title">
            Common Question <br className="d-sm-none" /> &amp; Answer
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
