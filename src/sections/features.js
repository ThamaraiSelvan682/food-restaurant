import React from "react";

function Features(){
    return(
      <section id="featuressection">
        <section className="features-section">
    <div className="container">
      <h2>Our Specialties</h2>
      <div className="row">
        {/* <!-- Feature 1 --> */}
        <div className="col-md-4 feature-box">
          <i className="fas fa-utensils"></i>
          <h4>Delicious Cuisine</h4>
          <p>Experience a variety of mouth-watering dishes prepared with perfection and passion by our expert chefs.</p>
        </div>
        {/*  Feature 2 */ }
        <div className="col-md-4 feature-box">
          <i className="fas fa-leaf"></i>
          <h4>Fresh Ingredients</h4>
          <p>We use only the freshest and highest-quality ingredients, ensuring that every dish is packed with flavor.</p>
        </div>
        {/* <!-- Feature 3 --> */}
        <div className="col-md-4 feature-box">
          <i className="fas fa-wine-glass-alt"></i>
          <h4>Great Ambiance</h4>
          <p>Enjoy your meal in a cozy and stylish setting, perfect for both casual dining and special occasions.</p>
        </div>
      </div>
    </div>
  </section>
  </section>

    )
}
export default Features;