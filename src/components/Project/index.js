import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div id="project" className="card text-center">
            <img className="card-img-top" src={props.image} alt={props.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.discription}</p>
            <a id="repo" href={props.repo} target="_blank" class="btn btn-primary">Repository</a>
            <a id="liveURL" href={props.liveURL} target="_blank" class="btn btn-primary">Live URL</a>
            </div>
         </div>
    )
}

export default Project;