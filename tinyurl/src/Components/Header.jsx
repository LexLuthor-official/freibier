import React from 'react'
import Image from '../Images/0a47fb66c37c2c6c341b600931482c1b.jpg';
import Logo from '../Images/fb-logo_white.png';

function Header() {
    return (
            <div className="headerbox">
                <img className="logo" src={Logo} alt="Freibier"/>
                    <ul class="navbar">
                        <li><a href="https://www.gesundheitsstadt-berlin.de/fileadmin/_processed_/a/4/csm_bier-hopfen_ffd20a7929.jpg" target="_blank" rel="noreferrer" >Bier</a></li>
                        <li><a href="http://www.biersekte.de/" target="_blank" rel="noreferrer" >Mehr Bier</a></li>
                        <li><a href="https://www.youtube.com/watch?v=l7DCHLaNWcA" target="_blank" rel="noreferrer" >Sauflieder</a></li>
                    </ul>
                    <a href={Image} target="_blank" rel="noreferrer" ><button className="btn">Promille zählen</button></a>
            </div>
    )
}

export default Header
