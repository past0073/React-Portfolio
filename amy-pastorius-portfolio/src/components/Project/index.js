import React from "react";

function Project(props) {
    return (
        <div className="card text-center" style={{width: 16 + 'rem'}}>
            <img className="card-img-top" src={props.image} alt={props.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.discription}</p>
            <a href={props.repo} target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
            <a href={props.liveURL} target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
            </div>
         </div>
    )
}

export default Project;