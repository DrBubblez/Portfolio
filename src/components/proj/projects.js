import React from "react";
import './projects.css';
import quiz from "./project-imgs/1_jsQuiz.png";
import scheduler from "./project-imgs/2_scheduler.png";
import readme from "./project-imgs/3_readme.png";
import svg from "./project-imgs/4_svg.png";
import weather from "./project-imgs/5_weatherApp.png";
import notes from "./project-imgs/6_note-app.png";
import mysql from "./project-imgs/7_mysql.png";
import orm from "./project-imgs/8_orm.png";
import nosql from "./project-imgs/9_nosql.png";
import jate from "./project-imgs/10_JATE.png";

function Projects () {
    return (
        <div id="carouselExampleIndicators" class="project carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active quiz">
                    <h3>JavaScript Quiz</h3>
                    <a href="https://github.com/DrBubblez/javascript-quiz" class="btn btn-primary">View project</a>
                </div>
                <div class="carousel-item">
                    <h3>Work Planner</h3>
                    <a href="https://github.com" class="btn btn-primary">View project</a>
                </div>
                <div class="carousel-item">
                    <h3>README Generator</h3>
                    <a href="https://github.com" class="btn btn-primary">View project</a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Projects;