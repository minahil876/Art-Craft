import React from 'react'
import Craftgallery from '../Craftgallery/Craftgallery'
// import Gallerydata from '../Gallerydata/Gallerydata'
import Filter from '../Filter/Filter'
function Gallery() {
  return (
    <div>
    <Filter />
    {/* <Gallerydata />  */}
      <Craftgallery />
    </div>
  )
}

export default Gallery