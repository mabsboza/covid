import { connect } from "react-redux";

const section_6 = (props) => {
  return (
    <section
      className={
        props.darkTheme
          ? "section section-l bg-dark tc-light section-handwash"
          : "section section-l bg-light section-handwash"
      }
      id="handwash"
    >
      <div className={["container mt-n4"].join(" ")}>
        <div className={["section-subhead text-center"].join(" ")}>
          <h4 className="title">
            Pasos para <br className="d-sm-none" /> lavarse las manos
          </h4>
        </div>
        <div className="section-content">
          <div className={["row g-gs justify-content-center"].join(" ")}>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-a.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Jabón de manos</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-b.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Palma con palma</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-c.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Entre los dedos</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-d.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Parte trasera de la mano</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-e.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Enjuaga con agua</h6>
                </div>
              </div>
            </div>
            <div className={["col-6 col-mb-5 col-sm-4 col-lg-2"].join(" ")}>
              <div className="box4">
                <div className="box4-gfx">
                  {" "}
                  <img src="/gfx/hand-f.png" alt="" />
                </div>
                <div className="box4-content">
                  <h6 className="title">Seca bien</h6>
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

export default connect(mapStateToProps)(section_6);
