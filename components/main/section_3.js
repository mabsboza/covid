import { connect } from "react-redux";

const section_3 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-symptom"
          : "section section-l bg-white section-symptom"
      }
      id="symptoms"
    >
      <div className="container">
        <div className={["section-head text-center wide-lg"].join(" ")}>
          <h5 className="subtitle">Cúales son los síntomas del COVID-19?</h5>
          <h2 className="title">Síntomas </h2>
          <p align='justify'>
            Los síntomas notificados por personas con COVID-19 varían desde aquellos que presentan síntomas leves 
            hasta quienes se enferman gravemente. Los síntomas pueden aparecer 2 a 14 días después de la exposición al virus.
          </p>
        </div>
        <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box2 bg-dark" : "box2"}>
                <div className="box2-gfx">
                  {" "}
                  <img src="/gfx/symptom-a.png" alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Fiebre</h5>
                  <p>
                    <strong>Fiebre alta</strong> – esto significa que siente calor al tocar 
                    su pecho o espalda (no necesita medir su temperatura). Es un signo común y 
                    también puede aparecer en 2-10 días si se ve afectado.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box2 bg-dark" : "box2"}>
                <div className="box2-gfx">
                  {" "}
                  <img src="/gfx/symptom-b.png" alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Tos</h5>
                  <p>
                    <strong>Tos continua</strong> – esto significa toser
                    mucho por más de una hora, o 3 o más episodios de tos en
                    24 horas (si generalmente tiene tos, puede ser peor que
                    usual).
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              <div className={props.darkTheme ? "box2 bg-dark" : "box2"}>
                <div className="box2-gfx">
                  {" "}
                  <img src="/gfx/symptom-c.png" alt="" />
                </div>
                <div className="box2-content">
                  <h5 className="title">Dificultades para respirar</h5>
                  <p>
                    <strong>Dificultades para respirar</strong> – Alrededor de 1 de
                    cada 6 personas que contraen COVID-19 se enferman gravemente y
                    desarrolla dificultad para respirar o falta de aliento.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <div className={["row g-gs justify-content-center"].join(" ")}>
              <div
                className={["col-sm-10 col-md-8 col-lg-7 col-xl-8"].join(" ")}
              >
                <div className="notes">
                  <em className={["icon ni ni-alert-fill-c"].join(" ")}></em>
                  <p>
                    <strong>Llama a tu doctor:</strong> Si tu
                    cree que ha estado expuesto a COVID-19 y desarrolla fiebre
                    y cualquier síntoma, como tos o dificultad para respirar,
                    llame a su proveedor de atención médica lo antes posible para
                    Consejo médico.
                  </p>
                </div>
              </div>
              <div
                className={["col-sm-10 col-md-8 col-lg-5 col-xl-4"].join(" ")}
              >
                <div
                  className={[
                    "d-flex justify-content-lg-end ml-sm-5 ml-4 pl-3 ml-lg-0 pl-lg-0",
                  ].join(" ")}
                >
                  {" "}
                  <a href="#faq" className={["btn scrollto"].join(" ")}>
                    <em className={["icon ni ni-question"].join(" ")}></em>
                    <span>Preguntas frecuentes</span>
                  </a>
                </div>
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

export default connect(mapStateToProps)(section_3);
