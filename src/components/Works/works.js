import React from 'react'
import './works.css';
import Portfolio1 from '../../asstes/Portfolio-1.png';
import Portfolio2 from '../../asstes/Portfolio-2.png';
import Portfolio3 from '../../asstes/Portfolio-3.png';
const Works =() => {
    return(
        <section id='works'>
        <h2 className="worksTitle">My Projects</h2>
            <span className="workDesc">Here is my portfolio about the web design and projects</span>
            <div className="workImgs">
                <div className="workItem">
                    <img src={Portfolio1} alt="Project 1" className="worksImg" />
                    <p className="projectDesc">This group project is a SPA website designed for a relaxation spa center, focusing on providing detailed service descriptions and booking options.</p>
                </div>
                <div className="workItem">
                    <img src={Portfolio2} alt="Project 2" className="worksImg" />
                    <p className="projectDesc">This is a car sales webpage showcasing the Tesla Model 3, including detailed specifications, pricing, and an option to add to the cart.</p>
                </div>
                <div className="workItem">
                    <img src={Portfolio3} alt="Project 3" className="worksImg" />
                    <p className="projectDesc">This is an informational website about climate change issues, highlighting key environmental challenges and educational resources.</p>
                </div>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;