import { connect } from "react-redux";

const section_7 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-accent-dark tc-light section-treatment has-overlay"
          : "section section-l bg-accent-light tc-light section-treatment has-overlay"
      }
      id="treatment"
    >
      <div className={["overlay shape shape-b"].join(" ")}></div>
      <div className="container">
        <div className="section-content">
          <div
            className={[
              "row g-gs gy-sm-m justify-content-between align-items-center",
            ].join(" ")}
          >
            <div className={["col-lg-7 col-xl-6"].join(" ")}>
              <div className="text-block">
                <h5 className="subtitle">Ten cuidado y mantente seguro</h5>
                <h2 className="title">Tratamiento para Covid19</h2>
                <p>
                  {" "}
                  <strong>
                    Hasta la fecha, no hay vacuna ni antivirales específicos.
                    medicina para prevenir o tratar COVID-2019.{" "}
                  </strong>{" "}
                  Sin embargo, los afectados deben recibir atención para aliviar
                  síntomas Las personas con enfermedades graves deben ser hospitalizadas.
                  La mayoría de los pacientes se recuperan gracias a la atención de apoyo.
                </p>
                <p>
                  Los antibióticos no ayudan, ya que no funcionan contra los virus.
                  El tratamiento tiene como objetivo aliviar los síntomas mientras tu cuerpo lucha
                  la enfermedad. Tendrá que permanecer aislado, alejado de otros
                  gente, hasta que te hayas recuperado.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={["box5 bg-accent-dark"].join(" ")}>
                <h6 className="title">Autocuido</h6>
                <p>
                  Si tiene síntomas leves, quédese en casa hasta que haya
                  recuperado. Puede aliviar sus síntomas si usted:
                </p>
                <ul className="list-arrow">
                  <li>Descansa y duerme</li>
                  <li>Mantente cálido</li>
                  <li>Hidrátate</li>
                  <li>
                    Use un humidificador de ambiente o tome una ducha caliente para ayudar a aliviar
                    dolor de garganta y tos
                  </li>
                </ul>
                <h6 className="title">Tratamiento médico</h6>
                <p>
                  Si desarrolla fiebre, tos y tiene dificultad para respirar,
                  Busque atención médica de inmediato. Llame con anticipación y dígale a su
                  proveedor de salud de cualquier viaje reciente o contacto reciente con
                  viajeros.
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

export default connect(mapStateToProps)(section_7);
