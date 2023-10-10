import React from "react";
import "./about.css"
import aboutPic from "../../img/turtle-pic.png"
import messageIcon from "../../img/message-50.png"
import githubIcon from "../../img/github-96.png"
import linkedin from "../../img/linkedin-96.png"

const About = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="row align-items-center justify-content-around flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3 className="dark-color text-center">About Me</h3>
                            <p>
                                I'm a budding full-stack web developer who recently graduated from a rigorous coding boot camp. 
                                Though I embarked on my coding journey just this year, I've immersed myself in a vast array of technologies, 
                                honing my skills to craft intuitive and engaging digital experiences. With a foundation in JavaScript, React, 
                                Node.js, Express, MySQL, and MongoDB, I'm fervently passionate about continuous learning and am driven by the 
                                thrill of problem-solving. I'm eager to collaborate and bring innovative visions to life. I'm excited to be a 
                                part of the ever-evolving tech world and look forward to partnering with you on your next project!
                            </p>
                            <div className="btn-bar text-center">
                                <a className="px-btn theme" href="#Contact"><img src={messageIcon} className="icon" alt="icon"></img>Contact</a>
                                <a className="px-btn theme" href="https://github.com/DrBubblez"><img src={githubIcon} className="icon" alt="icon"></img>GitHub</a>
                                <a className="px-btn theme" href="https://www.linkedin.com/in/harrison-miner-7a60351b8/"><img src={linkedin} className="icon" alt="icon"></img>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={aboutPic} alt="myself"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;