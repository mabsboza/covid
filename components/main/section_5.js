import { connect } from "react-redux";

const section_5 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-steps pb-4"
          : "section section-l bg-light section-steps pb-4"
      }
      id="steps"
    >
      <div className="container">
        <div
          className={
            props.darkTheme
              ? "section-content section-content-boxed bg-dark"
              : "section-content section-content-boxed"
          }
        >
          <div
            className={[
              "row g-gs justify-content-center align-items-center",
            ].join(" ")}
          >
            <div className="col-lg-8">
              <div className={["list-block pr-lg-4"].join(" ")}>
                <h4 className="title">Pasos para proteger a otros</h4>
                <ul className="list-check">
                  <li>
                    <strong>Quedate en casa si estas enfermo</strong> – Excepto
                    si es a visita médica.
                  </li>
                  <li>
                    <strong>Cubre tu boca y nariz</strong> – Usa un pañuelo al
                    tose o estornudar (desechalo despues) o usa la parte interna
                    de tu codo para cubrirte.
                  </li>
                  <li>
                    <strong>Usa mascarilla</strong> – Debes usar una mascarilla cuando esté cerca 
                    de otras personas(por ejemplo, compartir una habitación o vehículo) y antes 
                    de ingresar a un proveedores de servicios de salud.
                  </li>
                  <li>
                    <strong>
                      Limpia y desinfecta diariamente.
                    </strong>{" "}
                    – Esto incluye teléfonos, mesas, interruptores de luz, pomos de puertas,
                    encimeras, manijas, escritorios, inodoros, grifos y lavabos.
                  </li>
                  <li>
                    <strong>
                      Mantengase informado
                    </strong>{" "}
                    – Pongase al dia con la actividad local del covid
                    desde <a href="https://www.facebook.com/ObservatorioCovidNi/" target="_blank">Sitios web oficiales.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={[" col-sm-10 col-md-8 col-lg-4"].join(" ")}>
              {" "}
              <img
                src="/protect3.jpg"
                className={["mb-2 mb-sm-0"].join(" ")}
                alt=""
              />
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

export default connect(mapStateToProps)(section_5);
