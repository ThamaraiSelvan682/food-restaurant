import React, { useEffect } from "react";
import Logo from '../images/logo.png'
function Navbar(){
  useEffect(() => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return(
    <nav className="navbar navbar-expand-lg navbar-custom">
    <a className="navbar-brand text-white" href="#"><img src={Logo} alt="logo of our website"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#homesection">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#menusection">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#featuressection">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricingsection">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  );
}
export default Navbar;