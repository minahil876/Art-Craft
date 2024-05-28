import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import './Product.css'
import me from '../../Assets/basket19.jpg'
import Searchform from '../Searchform/Searchform'
import Procard from '../Procard/Procard'
function Product() {
  return (
    <div>
    <NavbarComponent/>
  <div className='main'>
<div className='left'>
  <h1><span  style={{color: 'purple'}}>DISCOVER THE </span>  BEST GIFTS <span span  style={{color: 'purple'}}>FOR YOUR</span> LOVED ONES.</h1>
  <p style={{marginLeft: '28px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div className='right'>
  <img src={me} alt='world' />
</div>
  </div>
  <Searchform />
  <Procard />
    </div>
  )
}
export default Product
