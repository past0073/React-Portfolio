import React from "react";
import Reeds from "../../assets/images/reeds.JPG";

function Contact () {
    return (
        <div>
        <div className="bg" style={{ backgroundImage: `url(${Reeds})` }}>
        <section className="container" style={{padding: 50 + 'px'}}>
          <div id="userContact" class="card w-75">
            <div className="card-body">
              <h1 className="card-title">Contact</h1>
              <h4>Let's get in touch!</h4>
              <hr />
              <div className="mb-3 contact-section">
                  <label for="formGroupExampleInput" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Name" />
              </div>
              <div className="mb-3 contact-section">
                  <label for="formGroupExampleInput2" class="form-label">Email</label>
                  <input type="text" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="form-group contact-section">
                  <label style={{padding: 4 + 'px'}} for="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="message" placeholder="Message" rows="3"></textarea>
              </div>
              <br />
              <div className="contact-section">
              <button id="captureContact" type="button" className="btn btn-light">Submit</button>
              </div>
            </div>   
          </div>
          <br />
          <div id="contactMe" class="card w-75">
            <div class="card-body">
              <h2 class="card-title">Amy Pastorius</h2>
              <h4>Full Stack Web Developer</h4>
            <hr />
              <h5>Email: past0073@umn.edu</h5>
              <h5>Phone: 612-269-0708</h5>
              <h5>LinkedIn: Amy Pastorius</h5>
            </div> 
          </div>  
        </section>
      </div>
        </div>
    )
}

export default Contact;