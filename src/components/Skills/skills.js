import React from 'react';
import './skills.css';
import UIDesign from '../../asstes/ui-design.png';
import DataBase from '../../asstes/SQL.png';
import AppDevelop from '../../asstes/CSharp.png';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">Service </span>
            <span className="skillDesc"> I am a skilled Software Developer with experience
            in creating programming. I have a strong understanding of programming design on app development.</span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>The goal of user experience (UX) design is to create easy, efficient, and pleasant experiences with a brand or business</p>
                </div>
                </div>
                <div className="skillBar">
                <img src={DataBase} alt="DataBase" className="skillBarImg" />
                <div className="skillBarText">
                <h2>DataBase</h2>
                <p> Database design can be defined as a set of procedures or collection of tasks involving various steps taken to implement a database.</p>
                </div>
                </div>
                <div className="skillBar">
                <img src={AppDevelop} alt="AppDevelop" className="skillBarImg" />
                <div className="skillBarText">
                <h2>AppDevelop</h2>
                <p>Mobile application development is the process of designing and building software for use on mobile devices.</p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;