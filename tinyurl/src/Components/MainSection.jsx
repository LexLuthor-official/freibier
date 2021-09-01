import React from 'react'
import Gif1 from '../Images/200w.gif';
import Gif2 from '../Images/Screenshot 2021-08-30 095138.png';
import Gif3 from '../Images/großzuklein.jpg';
import Gif4 from '../Images/2042921733-besten-bier-weltrekorde.jpg';

function MainSection() {
    return (
        <div>
            <div className="shortener">
                <button className="shortBtn">N kurzen bitte!</button>
                <input type="text" name="shortener" id="shortener" placeholder="Url hier einfügen"/>
            </div>

        <h2>Wie kommt Freebier zu dir?</h2>
        <img className="gif" src={Gif1} alt=""/>
        <img className="screenshot" src={Gif2} alt=""/>
        <link rel="noreferrer" href="https://freibier-party.de/"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem quam eius odio reprehenderit ut dolor modi nihil distinctio esse architecto illum doloremque voluptates iure veniam aut, adipisci ipsa delectus.</p>      
    
        <h2>Von groß zu klein...</h2>
        <img className="screenshot" src={Gif3} alt=""/>
        <link rel="noreferrer" href="https://freibier-party.de/"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem quam eius odio reprehenderit ut dolor modi nihil distinctio esse architecto illum doloremque voluptates iure veniam aut, adipisci ipsa delectus.</p> 

        <h2>...zu ganz klein!</h2>
        <img className="screenshot" src={Gif4} alt=""/>
        <link rel="noreferrer" href="https://freibier-party.de/"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem quam eius odio reprehenderit ut dolor modi nihil distinctio esse architecto illum doloremque voluptates iure veniam aut, adipisci ipsa delectus.</p> 
        </div>
    )
}

export default MainSection
