import React from "react";
import Menufirst from '../images/menufirst.jpg'
import Menutwo from '../images/menutwo.jpg'
import Menuthree from '../images/menuthree.jpg'
import Menufour from '../images/menufour.jpg'
import Menufive from '../images/menufive.jpg'
import Menusix from '../images/menusix.jpg'


function Menu(){
    return(
        <section id="menusection">
        <section className="menu">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="section-title">Our Menu</h2>
            <p className="section-subtitle">Delicious meals crafted with love</p>
        </div>

        <div className="row">
            {/* <!-- Menu Item 1 --> */}
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={Menufirst} className="card-img-top" alt="Menu Item 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Dish Name 1</h5>
                        <p className="card-text">A delightful description of the dish. It's packed with flavors and made with the finest ingredients.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Menu Item 2 --> */}
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={Menutwo} className="card-img-top" alt="Menu Item 2"/>
                    <div className="card-body">
                        <h5 className="card-title">Dish Name 2</h5>
                        <p className="card-text">A delightful description of the dish. It's packed with flavors and made with the finest ingredients.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Menu Item 3 --> */}
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={Menuthree} className="card-img-top" alt="Menu Item 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Dish Name 3</h5>
                        <p className="card-text">A delightful description of the dish. It's packed with flavors and made with the finest ingredients.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            {/* <!-- Menu Item 4 --> */}
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={Menufour} className="card-img-top" alt="Menu Item 4"/>
                    <div className="card-body">
                        <h5 className="card-title">Dish Name 4</h5>
                        <p className="card-text">A delightful description of the dish. It's packed with flavors and made with the finest ingredients.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Menu Item 5 --> */}
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={Menufive} className="card-img-top" alt="Menu Item 5"/>
                    <div className="card-body">
                        <h5 className="card-title">Dish Name 5</h5>
                        <p className="card-text">A delightful description of the dish. It's packed with flavors and made with the finest ingredients.</p>
                    </div>
                </div>
            </div>
            {/* <!-- Menu Item --> */}
            <div className="col-md-4">
                <div className="card mb-4">
                    <img src={Menusix} className="card-img-top" alt="Menu Item 6"/>
                    <div className="card-body">
                        <h5 className="card-title">Dish Name 6

                        </h5>
                        <p className="card-text">A delightful description of the dish. It's packed with flavors and made with the finest ingredients.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</section>

    );
}
export default Menu;