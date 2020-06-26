import Home from '../components/header/home'
import NavBar from '../components/header/navbar'

const header = () => {
  return (
    <header id='home' className='nk-header bg-dark tc-light has-overlay'>
      <div className={["overlay shape shape-a"].join(" ")}></div>
      <Home />
      <NavBar />
    </header>
  );
};

export default header;
