import { connect } from "react-redux";

const section_2 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-spread"
          : "section section-l bg-light section-spread"
      }
      id="spread"
    >
      <div className="container">
        <div className={["section-head text-center wide-md"].join(" ")}>
          <h5 className="subtitle">Propagación</h5>
          <h2 className="title">
            Transmisión del <br className="d-sm-none" /> COVID-19
          </h2>
          <p align='justify'>
            Se cree que el COVID-19 se propaga principalmente a través del contacto cercano de persona a persona.
            Algunas personas que no presentan síntomas pueden propagar el virus. Todavía seguimos aprendiendo acerca
            de cómo se propaga el virus y sobre la gravedad de la enfermedad que causa.
          </p>
        </div>
        <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box bg-dark" : "box"}>
                <div className="box-gfx">
                  {" "}
                  <img src="/gfx/spread-a.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Persona a Persona
                  </h4>
                  <p>
                    Entre personas que están en contacto cercano (a una distancia de hasta aproximadamente 6 pies)
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box bg-dark" : "box"}>
                <div className="box-gfx">
                  {" "}
                  <img src="/gfx/spread-b.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Contacto con objetos o superficies contaminadas
                  </h4>
                  <p align='justify'>
                    Podría ser posible que una persona se infecte por el COVID-19 al tocar una superficie u objeto 
                    que tenga el virus y luego se toque la boca, la nariz o los ojos. No se cree que esta sea la principal forma de propagación del virus, 
                    pero aún estamos aprendiendo acerca de cómo se propaga el virus.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box bg-dark" : "box"}>
                <div className="box-gfx">
                  {" "}
                  <img src="/gfx/spread-c.png" alt="" />
                </div>
                <div className="box-content">
                  <h4 className="title">
                    Gotitas respiratorias
                  </h4>
                  <p>
                    Se cree que el coronavirus se propaga principalmente de una persona a otra.
                    persona. Esto puede suceder entre personas cercanas
                    contacto el uno con el otro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="section-actions">
            <li>
              <a href="#faq" className={["btn scrollto"].join(" ")}>
                <em className={["icon ni ni-question"].join(" ")}></em>
                <span>Mas preguntas</span>
              </a>
            </li>
          </ul>
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

export default connect(mapStateToProps)(section_2);
