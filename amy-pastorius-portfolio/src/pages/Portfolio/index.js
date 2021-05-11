import React from "react";
import { Component } from "react";
import Reeds from "../../assets/images/reeds.JPG";
import Project from "../../components/Project";
import projectData from "../../components/Project/data.json";
import "./style.css";

class Portfolio extends Component {
  state = {
    projectData
  };

  render() {
      return (
        <div>
          <div className="bg" style={{ backgroundImage: `url(${Reeds})` }}>
            <section className="container" style={{padding: 50 + 'px'}}>
              <div className="card w-75">
                <div className="card-body">
                  <h1 className="card-title">Portfolio</h1>
                    <hr />
                        {this.state.projectData.map(project => (
                          <div key={project.id}>
                            <Project
                            id={project.id}
                            name={project.name}
                            image={project.image}
                            alt={project.alt}
                            discription={project.discription}
                            liveURL={project.liveURL}
                            repo={project.repo}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
              </section>
          </div>
        </div>
      )
  }
}

export default Portfolio;