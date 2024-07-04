import React from 'react'
import Unav from './Unav';

function Favourite() {
  return (
    <div className='container-fluid row mt-5'>
    <div className='col-md-3'>
      <Unav />
    </div>
    <div className='col-md-8'>
    <h1>My Favourites</h1>
</div>
    </div>
  )
}

export default Favourite