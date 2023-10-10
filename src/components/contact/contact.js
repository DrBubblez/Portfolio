import React from "react";
import  "./contact.css";

function Contact() {
    return (
        <div id="contact" className="container mx-auto p-2">
            <h1 className="text-center">Contact Me</h1>
            <form target="_blank" action="https://formsubmit.co/harrisonminer59@gmail.com" method="POST">
              <div className="form-group">
                <div className="form row justify-content-center">
                  <div className="col p-3">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
                  </div>
                  <div className="col p-3">
                    <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
                  </div>
                </div>
              </div>
              <div className="form-group p-3">
                <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
              </div>
              <button type="submit" className="btn btn-lg btn-block btn-secondary mx-auto p-2">Submit Form</button>
            </form>
        </div>
    )
}

export default Contact;