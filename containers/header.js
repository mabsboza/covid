import Home from '../components/header/home'
import NavBar from '../components/header/navbar'
import { connect } from "react-redux";

const header = (props) => {
  return (
    <header
      className={
        props.darkTheme
          ? "nk-header bg-dark tc-light has-overlay"
          : "nk-header bg-light has-overlay"
      }
      id="home"
      >
      <div></div>
      <Home />
      <NavBar />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(header);
