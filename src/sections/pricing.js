import React from "react";

function Pricing(){
    return(
      <section id="pricingsection">
        <section class="pricing-section">
    <div class="container">
      <h2>Our Pricing</h2>
      <div class="row">
        {/* <!-- Pricing Card 1 --> */}
        <div class="col-md-4">
          <div class="pricing-card">
            <h4>Lunch Menu</h4>
            <p class="price">$15</p>
            <p>Enjoy a selection of delicious lunch items made with fresh ingredients.</p>
            <a href="#booking" class="btn btn-primary">Order Now</a>
          </div>
        </div>
        {/* <!-- Pricing Card 2 --> */}
        <div class="col-md-4">
          <div class="pricing-card">
            <h4>Dinner Menu</h4>
            <p class="price">$25</p>
            <p>Indulge in a gourmet dinner experience with our chef's specials.</p>
            <a href="#booking" class="btn btn-primary">Order Now</a>
          </div>
        </div>
        {/* <!-- Pricing Card 3 --> */}
        <div class="col-md-4">
          <div class="pricing-card">
            <h4>Special Events</h4>
            <p class="price">$50</p>
            <p>Celebrate special occasions with our customized event packages.</p>
            <a href="#booking" class="btn btn-primary">Inquire Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </section>

    )
}
export default Pricing;