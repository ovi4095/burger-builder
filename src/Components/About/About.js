import React from 'react'
import about from '../../assests/about.png'
import './About.css'

const About = () => {
  return (
    <div className='container-fluid'>
        <div className="row aboutSection">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img src={about} alt="burger" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
            <header>
              <h1>About Burgers</h1>
            </header>
            <section>
                <h2>History of Burgers</h2>
                <p>Burgers have a long and varied history. The modern hamburger, as we know it, traces its roots back to the late 19th and early 20th centuries in the United States. It's believed that the hamburger sandwich originated in the region of Hamburg, Germany, where minced beef was a common dish. However, it was American ingenuity that transformed it into the iconic fast food item.</p>
                <p>The exact origin of the hamburger is debated, but one popular story attributes its creation to Louis Lassen, a Danish immigrant who owned a small lunch counter in New Haven, Connecticut. In 1900, Lassen supposedly placed a cooked beef patty between two slices of bread to accommodate a customer in a hurry. This simple yet revolutionary creation soon gained popularity and spread across the country.</p>
                <p>Over the years, the burger has evolved and diversified, with countless variations and regional specialties emerging. From classic cheeseburgers to gourmet creations with exotic ingredients, burgers continue to be a beloved staple of American cuisine and a symbol of comfort food worldwide.</p>
            </section>
            </div>
        </div>
    </div>
  )
}

export default About