import { connect } from "react-redux";

const section_1 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-about"
          : "section section-l bg-white section-about"
      }
      id="about"
    >
      <div className="container">
        <div className="section-content">
          <div className={["row g-gs justify-content-between"].join(" ")}>
          <div className={["col-lg-5 col-xl-4"].join(" ")}>
              <div
                className={
                  props.darkTheme
                    ? "wgs wgs-card mt-sm-2 mt-md-4 mt-lg-0 ml-lg-4 ml-xl-0 bg-dark"
                    : "wgs wgs-card mt-sm-2 mt-md-4 mt-lg-0 ml-lg-4 ml-xl-0"
                }
              >
                <div className="wgs-head">
                  <h4>Información Necesaria</h4>
                </div>
                <ul className="wgs-list">
                  <li>
                    <a className="scrollto" href="#spread">
                      Esparcimiento
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#symptoms">
                      Siíntomas
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#protect">
                      Prevención
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#treatment">
                      Tratamiento
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#faq">
                      Mitos
                    </a>
                  </li>
                  <li>
                    <a className="scrollto" href="#faq">
                      Preguntas y respuestas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text-block">
                <h5 className="subtitle">Información de la enfermedad</h5>
                <h2 className="title">
                  Coronavirus <br className="d-sm-none" />
                  (COVID-19)
                </h2>
                <p className="lead">
                  <strong>
                    La COVID-19 es la enfermedad infecciosa causada por el coronavirus que se ha descubierto más recientemente
                  </strong>{" "}
                    Ambos eran desconocidos antes de que estallara el brote en Wuhan (China) en diciembre de 2019.
                </p>
                <p>
                  El 31 de diciembre de 2019, la Organización Mundial de la Salud (OMS) recibió reportes de presencia de neumonía, 
                  de origen desconocido, en la ciudad de Wuhan, en China. Rápidamente, a principios de enero, las autoridades de este país
                  identificaron la causa como una nueva cepa de coronavirus. La enfermedad ha ido expandiéndose hacia otros continentes como Asia, Europa y América.
                </p>
                <p>
                  Hay casos confirmados de coronavirus en casi todo del mundo, incluyendo China, Europa (siendo en Italia y España los primeros focos),
                  Irán, Estados Unidos, África, Australia y LATAM. La Organización Mundial de la Salud (OMS) y la Organización Panamericana de la Salud (OPS)
                  han reconocido el estado de pandemia, que supone el desarrollo de esta enfermedad.
                </p>
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

export default connect(mapStateToProps)(section_1);