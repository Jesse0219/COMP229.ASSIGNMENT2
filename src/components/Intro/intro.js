import React from 'react';
import './intro.css';
import bg from '../../asstes/bg.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Jesse</span> <br />Software Developer</span>
                <p className="introPara">I am a skilled Software Developer with experience <br /> in creating programming.</p>
                <p className="introPara">To inspire others to live their best life through my work and actions.</p>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;