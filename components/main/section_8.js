import { connect } from "react-redux";

const section_8 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-protect"
          : "section section-l bg-light section-protect"
      }
      id="protect"
    >
      <div className="container">
        <div className={["section-head text-center wide-lg"].join(" ")}>
          <h5 className="subtitle">Guía básica</h5>
          <h2 className="title">Autocuido</h2>
          <p>
            Lo mejor que puede hacer ahora es planificar cómo puede adaptar su
            rutina diaria. Tome algunos pasos para protegerse como Limpie su
            manos a menudo, evite el contacto cercano, cubra la tos y los estornudos, limpie
            superficies de uso diario, etc. La mejor manera de prevenir enfermedades es evitar
            estar expuesto a este virus.
          </p>
        </div>
        <div className="section-content">
          <div
            className={["row g-gs justify-content-center flex-lg-nowrap"].join(
              " "
            )}
          >
            <div
              className={["col-md-8 col-lg-5 col-xl-6 align-self-end"].join(
                " "
              )}
            >
              <div className="protect-block-gfx">
                {" "}
                <img src="/gfx/sintomas4.jpg" alt="" />
              </div>
            </div>
            <div
              className={[
                "col-6 col-mb-5 col-sm-6 col-lg-4 col-xl-3 flex-grow-1 order-lg-first",
              ].join(" ")}
            >
              <div className={["protect-item negative"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/donts-a.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Evita el contacto</h5>
                </div>
              </div>
              <div className={["protect-item negative"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/donts-b.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">No te toques la cara</h5>
                </div>
              </div>
              <div className={["protect-item negative"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/donts-c.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Distanciamiento social</h5>
                </div>
              </div>
            </div>
            <div
              className={[
                "col-6 col-mb-5 col-sm-6 col-lg-4 col-xl-3 flex-grow-1 ",
              ].join(" ")}
            >
              <div className={["protect-item positive"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/dos-a.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Lava tus manos</h5>
                </div>
              </div>
              <div className={["protect-item positive"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/dos-b.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Bébe mucha agua</h5>
                </div>
              </div>
              <div className={["protect-item positive"].join(" ")}>
                <div className="protect-gfx">
                  {" "}
                  <img src="/gfx/dos-c.png" alt="" />
                </div>
                <div className="protect-text">
                  <h5 className="title">Usa mascatilla</h5>
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

export default connect(mapStateToProps)(section_8);
