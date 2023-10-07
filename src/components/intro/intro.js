import React from "react";
import "./intro.css";
import headshot from "../../img/headshot1.png";


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="welcome">Hello,</span>
                <span className="introText">I'm <span className="introName">Harrison Miner</span><br/>Full-Stack Web Developer</span>
                <p className="introPara">Welcome to my digital realm! I'm a passionate Full Stack Web Developer with<br/> a knack
                for crafting elegant solutions in the vast world of the web.</p>
            </div>
            <img src={headshot} alt="headshot" className="headshot"/>
        </section> 
    )
}

export default Intro;