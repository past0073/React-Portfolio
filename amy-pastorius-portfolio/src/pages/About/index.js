import React from "react";
import Headshot from "../../assets/images/headshot.jpg";
import Reeds from "../../assets/images/reeds.JPG";
import Resume from "../../assets/resume.pdf";
import Download from "../../assets/images/download.png";
import Github from "../../assets/images/github.png";
import Linkedin from "../../assets/images/linkedin.png";
import "./style.css";

function About () {
    return (
            <div>
                <div className="bg" style={{ backgroundImage: `url(${Reeds})` }}>
            <section className="container" style={{padding: 50}}>
            <div className="card w-75">
                <div className="card-body">
                <h1 className="card-title">About Me</h1>
            <hr />
            <img id="AmyP" src={Headshot} class="rounded float-start" alt="Photo of Amy" />
                <p className="card-text">
                    Hi there! I'm Amy. I graduated from the University of Minnesota with a degrees in Speech-Language-Hearing Sciences and Neuroscience. I'm enrolled in a full stack web development bootcamp, but currently I'm working as the Production Manager at a non-profit in Northeast Minneapolis that provides employment services to individuals with barriers to employment. In this role I lead the company's two assembly work floors as well as print production processes. I manage key accounts, and oversee the work floor coordinators to ensure the on-time delivery of high quality finished goods. While I enjoy all aspects of my job, my favorite part is seeing opportunities for process improvement, and being able to implement a change that will make our operation function more smoothly.
                </p>
                <p className="card-text">
                    It was actually this desire to seek out inefficiencies and create positive improvements that brought me to my interest in web development. It's exciting to me to find a problem or opportunity for improvement and implement a system that addresses that problem, which in my opinion, is the heart and soul of web development. I also enjoy the collaborative process that comes with communal brainstorming and finding creative solutions to problems.
                </p>
                <hr />
                <a href="https://www.linkedin.com/in/amy-pastorius-609324157/" target="_blank"><img id="icon" src={Linkedin} class="fab fa-linkedin" aria-hidden="true"></img></a>
                <a href="https://github.com/past0073" target="_blank"><img id="icon" src={Github} class="fab fa-github-square" aria-hidden="true"></img></a>
                <a href={Resume} target="_blank"  download><img id="icon" src={Download} class="fas fa-file-download"></img></a>
                </div>
            </div>
            </section>
            </div>
            </div>
    )
}

export default About;