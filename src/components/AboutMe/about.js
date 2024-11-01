import React from 'react';
import './about.css';
import Aboutme from '../../asstes/aboutme.jpg';
import ResumePDF from '../../asstes/Resume.pdf';
const AboutMe = () => {
    return (
        <section id='aboutme'>
            <div className="ResumeBars">
                <div className="Picofme">
                    <img src={Aboutme} alt="Aboutme" className="AboutmeImg" />
                </div>
                <div className="aboutText">
                    <span className="aboutmeTitle">About Me</span>
                    <span className="aboutDesc"> 
                        My name is Yuk Yu Chung, but you can call me Jesse. I am from Hong Kong and have worked in the banking industry for around 11 years. I have a business degree, and now I am studying for a Software Engineering Technician diploma at Centennial College in Canada. I chose this field because I believe the future is all about technology.
                    </span>
                    <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className="resumeLink">
                        <button className="resumeBtn">Download My Resume</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;