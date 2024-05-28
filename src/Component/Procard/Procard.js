import React from "react";
import me from "../../Assets/img3.jpg";
import me1 from "../../Assets/basket29.jpg";
import me2 from "../../Assets/img4.jpg";
import me3 from "../../Assets/basket30.jpg";
import me4 from "../../Assets/img6.jpg";
import me5 from "../../Assets/img10.jpg";
import "./Procard.css";
import Footer from "../Footer/Footer";

const Procard = () => {
  return (
    <>
      <div className="container">
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
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: '30px' }}>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Procard;
