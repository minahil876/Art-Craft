import React from 'react'
import Footer from '../Footer/Footer'
import './About.css'
import imag from '../../Assets/img10.jpg'
import imag1 from '../../Assets/basket19.jpg'
import Carousel from '../Carousel/Carousel'
// import Craftgallery from '../Craftgallery/Craftgallery'

function About() {
  return (
    <> 
    <div className='main'>
      <div className='left'>
        <img src={imag} alt='' />
      </div>
      <div className='right'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec vehicula velit. Fusce venenatis, enim sit amet sollicitudin pretium, metus odio luctus ipsum, nec varius leo purus id elit. Integer non nisi at purus accumsan eleifend. <span>Fusce ac fringilla metus.</span> Nullam sit amet lobortis nisl. Nulla facilisi. Vivamus semper dictum nisi, a lobortis lorem pretium a. Duis bibendum ex eget nunc eleifend, vitae ullamcorper libero convallis.
</p>
      </div>
    </div>
    <div className='main1'>
      
    <div className='left1'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec vehicula velit. Fusce venenatis, enim sit amet sollicitudin pretium, metus odio luctus ipsum, nec varius leo purus id elit. Integer non nisi at purus accumsan eleifend. <span>Fusce ac fringilla metus.</span> Nullam sit amet lobortis nisl. Nulla facilisi. Vivamus semper dictum nisi, a lobortis lorem pretium a. Duis bibendum ex eget nunc eleifend, vitae ullamcorper libero convallis.</p>
      </div>
      <div className='right1'>
        <img src={imag1} alt='' />
      </div>
    </div>
    {/* <Craftgallery /> */}
    <Carousel />
    <Footer />
    </>
  )
}

export default About
