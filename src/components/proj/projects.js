import React from "react";
import './projects.css';

function Projects () {
    return (
        <div id="carouselExampleIndicators" className="project carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active quiz">
                    <h3>JavaScript Quiz</h3>
                    <a href="https://github.com/DrBubblez/javascript-quiz" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item scheduler">
                    <h3>Work Planner</h3>
                    <a href="https://github.com/DrBubblez/Work-Planner" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item readme">
                    <h3>README Generator</h3>
                    <a href="https://github.com/DrBubblez/README-generator" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item svg">
                    <h3>SVG Generator</h3>
                    <a href="https://github.com/DrBubblez/SVG-Logo-Maker" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item weather">
                    <h3>Weather Dashboard</h3>
                    <a href="https://github.com/DrBubblez/Weather-App" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item notes">
                    <h3>Note Taker</h3>
                    <a href="https://github.com/DrBubblez/Express-Notes-App" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item mysql">
                    <h3>MySQL Employee Tracker</h3>
                    <a href="https://github.com/DrBubblez/SQL-Employee-DB" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item orm">
                    <h3>ORM E-Commerce Backend</h3>
                    <a href="https://github.com/DrBubblez/ORM-Project" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item nosql">
                    <h3>NoSQL Social Network API</h3>
                    <a href="https://github.com/DrBubblez/NoSQL-APIs" className="btn btn-primary">View project</a>
                </div>
                <div className="carousel-item jate">
                    <h3>PWA Text Editor</h3>
                    <a href="https://github.com/DrBubblez/PWA-Project" className="btn btn-primary">View project</a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Projects;