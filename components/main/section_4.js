import { connect } from "react-redux";

const section_4 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-advice pb-0 ov-h"
          : "section section-l bg-light section-advice pb-0 ov-h"
      }
      id="prevention"
    >
      <div className="container">
        <div className={["section-head text-center wide-lg"].join(" ")}>
          <h5 className="subtitle">Como protegerte?</h5>
          <h2 className="title">
            Prevención <br className="d-sm-none" />y Consejo
          </h2>
          <p>
            En estos momentos no existe una vacuna para prevenir la enfermedad 
            del coronavirus 2019 (COVID-19).{" "}
            <strong>
              La mejor manera de prevenir la enfermedad es evitar la exposición a este virus
            </strong>{" "}
              ,esté al tanto de la información más reciente sobre el brote de COVID-19, 
              disponible en el sitio web de la OMS y a través de su autoridad de salud 
              pública nacional y local.
          </p>
        </div>
        <div className="section-content">
          <div className={["row g-gs gy-sm-m"].join(" ")}>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-a.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Lava tus manos frecuentemente</h5>
                  <p>
                    Lávese las manos con frecuencia con agua y jabón por al menos 20 segundos,
                    especialmente después de haber estado en un lugar público, o después de sonarse
                    la nariz, toser o estornudar
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-b.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Distanciamiento social</h5>
                  <p>
                    Evite el contacto cercano con personas que están enfermas, 
                    incluso dentro de su casa. De ser posible, mantenga una distancia 
                    de 6 pies entre la persona enferma y otros miembros de su hogar.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-c.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Evita tocarte la cara</h5>
                  <p>
                    Limpie Y desinfecte diariamente las superficies que se tocan con frecuencia.
                    Esto incluye las mesas, las manijas de las puertas, los interruptores de luz,
                    los mesones, las barandas, los escritorios, los teléfonos, los teclados, 
                    los inodoros, los grifos, los lavamanos y los lavaplatos.
                  </p>
                </div>
              </div>
            </div>
            <div className={["col-lg-3 col-sm-6"].join(" ")}>
              <div className="box3">
                <div className="box3-gfx">
                  {" "}
                  <img src="/gfx/advice-d.png" alt="" />
                </div>
                <div className="box3-content">
                  <h5 className="title">Higiene respiratoria</h5>
                  <p>
                    Si usted está rodeado de personas y no lleva puesta una cubierta de tela para
                    la cara, recuerde siempre cubrirse la boca y la nariz con un pañuelo desechable
                    cuando tosa o estornude o cúbrase con la parte interna del codo y no escupa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="section-actions">
            <li>
              <a href="#handwash" className={["btn scrollto"].join(" ")}>
                <span>Guía para lavarse las manos</span>
                <em className={["icon ni ni-arrow-long-right"].join(" ")}></em>
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={["btn btn-transparent scrollto"].join(" ")}
              >
                <span>Preguntas frecuentes</span>
                <em className={["icon ni ni-arrow-long-right"].join(" ")}></em>
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

export default connect(mapStateToProps)(section_4);
