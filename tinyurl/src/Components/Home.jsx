import React from 'react'
import Footer from '../Components/Footer.jsx';
import MainSection from '../Components/MainSection.jsx';
import Header from '../Components/Header.jsx';

function Home() {
    return (
        <div>
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
    )
}

export default Home
