import React from "react";
function Contact(){
    return(
      <section id="Contact">
        <section className="contact-section">
    <div className="container">
      <h2>Contact Us</h2>
      
      <div className="contact-info">
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Email:</strong> info@restaurant.com</p>
        <p><strong>Address:</strong> 123 Food Street, Culinary City, CA 90210</p>
      </div>

      <form>
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" 
required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" 
required />
          </div>
        </div>
        <input type="text" className="form-control" placeholder="Subject" required />
        <textarea className="form-control" rows="5" placeholder="Your Message" required ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
  </section>

    )
}
export default Contact;