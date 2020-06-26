import Home from '../components/header/home'

const header = () => {
  return (
    <header id='home' className='nk-header bg-dark tc-light has-overlay'>
      <div className={["overlay shape shape-a"].join(" ")}></div>
      <Home />
    </header>
  );
};

export default header;
