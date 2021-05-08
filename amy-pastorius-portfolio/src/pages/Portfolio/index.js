import React from "react";
import Reeds from "../../assets/images/reeds.JPG";
import "./style.css";

function Portfolio () {
    return (
        <div>
        <div className="bg" style={{ backgroundImage: `url(${Reeds})` }}>
  <section className="container" style={{padding: 50 + 'px'}}>
    <div className="card w-75">
      <div className="card-body">
        <h1 className="card-title">Portfolio</h1>
          <hr />
                <div className="card text-center" style={{width: 16 + 'rem'}}>
                  <img className="card-img-top" src="https://user-images.githubusercontent.com/74335621/113530687-3e699900-958c-11eb-8a3e-e894a2e2eb92.png" alt="Cup of Sugar app screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Cup of Sugar</h5>
                    <p className="card-text">Connecting good neighbors wherever they may be.</p>
                    <a href="https://github.com/past0073/Cup-of-Sugar" target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
                    <a href="https://cup-of-sugar-application.herokuapp.com/" target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
                  </div>
                </div>
                <div className="card text-center" style={{width: 16 + 'rem'}}>
                  <img className="card-img-top" src="https://user-images.githubusercontent.com/74335621/106691174-aace1900-6598-11eb-99b4-f45d4f942d7c.png" alt="ToonyMoodz app screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">ToonyMoodz</h5>
                    <p className="card-text">An app that provides current forecast data along with a song to suit the mood of the day.</p>
                    <a href="https://github.com/past0073/Team-Fresh-Prince-ToonyMoodz-App" target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
                    <a href="https://frank-merk.github.io/Team-Fresh-Prince-ToonyMoodz-App/" target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
                  </div>
                </div>
                <div className="card text-center" style={{width: 16 + 'rem'}}>
                  <img className="card-img-top" src="https://user-images.githubusercontent.com/74335621/103494160-fefba700-4dfa-11eb-9b44-76773d8393d1.png" alt="Password generator app screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">An app that takes in your password parameters and gives you a secure, random password.</p>
                    <a href="https://github.com/past0073/Random-Password-Generator" target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
                    <a href="https://past0073.github.io/Random-Password-Generator/" target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
                  </div>
                </div>
                <div className="card text-center" style={{width: 16 + 'rem'}}>
                  <img className="card-img-top" src="https://user-images.githubusercontent.com/74335621/105444421-6c00a080-5c33-11eb-9b88-5fbfaeb3b159.png" alt="Work day scheduler app screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Work Day Scheduler</h5>
                    <p className="card-text">An app that helps you visualize your work day by the hour with the ability to save and retreive notes throughout the day.</p>
                    <a href="https://github.com/past0073/Work-Day-Scheduler" target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
                    <a href="https://past0073.github.io/Work-Day-Scheduler/" target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
                  </div>
                </div>
                <div className="card text-center" style={{width: 16 + 'rem'}}>
                  <img className="card-img-top" src="https://user-images.githubusercontent.com/74335621/115117512-8f9e6300-9f64-11eb-81e9-4dc49b3c86e2.png" alt="Work day scheduler app screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Fitness Tracker</h5>
                    <p className="card-text">An app that helps you visualize and track your daily workout routine.</p>
                    <a href="https://github.com/past0073/Fitness-Tracker" target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
                    <a href="https://amys-fitness-tracker.herokuapp.com/" target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
                  </div>
                </div>
                <div className="card text-center" style={{width: 16 + 'rem'}}>
                  <img className="card-img-top" src="https://user-images.githubusercontent.com/74335621/115974033-6612a800-a51f-11eb-8acb-36c7ff5f7682.png" alt="Work day scheduler app screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Budget Tracker</h5>
                    <p className="card-text">A budgeting app that helps you manage your funds with our without internet connection.</p>
                    <a href="https://github.com/past0073/Budget-Tracker" target="_blank" style={{position: 'absolute', bottom: 10 + 'px', left: 65 + 'px'}} class="btn btn-primary">Repository</a>
                    <a href="https://budget-trapper-keeper.herokuapp.com/" target="_blank" style={{position: 'absolute', bottom: 50 + 'px', left: 74 + 'px'}} class="btn btn-primary">Live URL</a>
                  </div>
                </div>
                
            </div>
          </div>

  </section>
</div>
        </div>
    )
}

export default Portfolio;