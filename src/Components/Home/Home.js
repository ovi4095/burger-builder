import React from 'react'
import './Home.css'
import banner from '../../assests/banner.png'
import singlePattey from '../../assests/spb.png'
import doublePattey from '../../assests/dpb.png'
import triplePattey from '../../assests/tpb.png'
const Home = () => {
  return (
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <img src={banner} className='col-sm-12 col-md-12 col-lg-12 imgPosition img-fluid' alt="" />
          </div>
        </div>
        <h1 className='col-sm-12 burgerMenu'>Burger Menu</h1>
        <section className='burgerInfoSection'>
            <div className="row burgerInfo">
                <div className="col-sm-6 col-md-6 col-lg-4 burgerImage">
                    <img src={singlePattey} alt="burger" className="img-fluid" />
                </div>
                <div className="col-sm-6 col-md-6 col-lg-8">
                    <section>
                        <h2>Single Patty burger</h2>
                        <p><strong>Ingredients:</strong> Single Meat patty, Salad, Cheeese, Meoniss, Ketchup, Fresh Bread Bun, Special Hot Sause</p>
                        <p><strong>Minimum Total Price</strong> 150 BDT</p>
                    </section>
                </div>
            </div>
            <div className="row burgerInfo">
                <div className="col-sm-6 col-md-6 col-lg-4 burgerImage">
                    <img src={doublePattey} alt="burger" className="img-fluid" />
                </div>
                <div className="col-sm-6 col-md-6 col-lg-8">
                    <section>
                        <h2>Double Patty burger</h2>
                        <p><strong>Ingredients:</strong> Two Meat patties, Salad, Cheeese, Meoniss, Ketchup, Fresh Bread Bun, Special Hot Sause</p>
                        <p><strong>Minimum Total Price</strong> 150 BDT</p>
                    </section>
                </div>
            </div>
            <div className="row burgerInfo">
            <div className="col-sm-6 col-md-6 col-lg-4 burgerImage">
                    <img src={triplePattey} alt="burger" className="img-fluid" />
                </div>
                <div className="col-sm-6 col-md-6 col-lg-8">
                <section>
                        <h2>Triple Patty burger</h2>
                        <p><strong>Ingredients:</strong> Three Meat patties, Salad, Cheeese, Meoniss, Ketchup, Fresh Bread Bun, Special Hot Sause</p>
                        <p><strong>Minimum Total Price</strong> 330 BDT</p>
                    </section>
                </div>
            </div>
        </section>
        
      </div>
      
  )
}

export default Home