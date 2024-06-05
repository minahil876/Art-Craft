import React, { useEffect, useState } from "react";
// import me from "../../Assets/img3.jpg";
// import me1 from "../../Assets/basket29.jpg";
// import me2 from "../../Assets/img4.jpg";
// import me3 from "../../Assets/basket30.jpg";
// import me4 from "../../Assets/img6.jpg";
// import me5 from "../../Assets/img10.jpg";
import "./Procard.css";
import Footer from "../Footer/Footer";
import axios from "axios";

const Procard = () => {
  const [product,setproduct]=useState([]);
  useEffect(()=>{
axios.get('http://192.168.12.108:8000/crafters/products/').then((res)=>{
  console.log(res.data);
  setproduct(res.data)
})
  },[])
  return (
    <>
      {/* <div className="container">
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={me} alt="" />
              <div className="box4-content">
                <h2>Quick View</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={me1} alt="" />
              <div className="box4-content">
                <h2>Quick View</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={me2} alt="" />
              <div className="box4-content">
                <h2>Quick View</h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        {/* <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={me3} alt="" />
              <div className="box4-content">
                <h2>Quick View</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={me4} alt="" />
              <div className="box4-content">
                <h2>Quick View</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={me5} alt="" />
              <div className="box4-content">
                <h2>Quick View</h2>
              </div>
            </div>
          </div>
          </div> */}
     
      
          <div className="row" style={{ marginTop: '30px' }}>
      {product.map((item,ind)=>{
        return(
          <>
          {/* <div className="col-md-4 container">
          <div class="card" style={{width: '18rem'}}>
  <img src={item.product_picture} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> */}
<div className="col-md-4 col-sm-6">
            <div className="box4">
              <img src={item.product_picture} alt="" />
              <div className="box4-content">
                <h2>{item.name}</h2>
              </div>
            </div>
          </div>
          </>
        )
      })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Procard;
