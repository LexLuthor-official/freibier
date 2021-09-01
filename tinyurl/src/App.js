import './App.css';
import Footer from './Components/Footer.jsx';
import MainSection from './Components/MainSection.jsx';
import Header from './Components/Header.jsx';

function App() {
  return (
    <div className="app">
      <h1>Freibier</h1>
      <header className="headerbox">
          <Header/>   
      </header>
      <section>
          <MainSection/>
      </section>
      <footer className="liste">
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
