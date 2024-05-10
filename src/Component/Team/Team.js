import React from "react";
import "./Team.css";
import imeg from "../../Assets/girl.jpg";
import imeg1 from "../../Assets/girl.jpg";
import imeg2 from "../../Assets/girl.jpg";

class Team extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <h1 style={{ marginTop: "40px" }}>Meet Our Team Member</h1>
        </div>

        <div className="row" style={{ padding: "0 50px" }}>
          <div className="col-md-3 col-6" style={{ width: "33%" }}>
            <div className="box">
              <img src={imeg} alt="" />
              <div className="box-content">
                <h4 className="title">Minahil Iqbal</h4>
              </div>
              <p className="description">
                <p>
                  <strong style={{ marginRight: "20px" }}>Phone:</strong>
                  +92 35642315
                </p>{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6" style={{ width: "33%" }}>
            <div className="box">
              <img src={imeg1} alt="" />
              <div className="box-content">
                <h4 className="title">Aqeera Arshad</h4>
              </div>
              <p className="description">
                <p style={{ marginRight: "80px" }}>
                  <strong style={{ marginRight: "20px" }}>Phone:</strong>
                  +92 35642315
                </p>
              </p>
            </div>
          </div>

          <div className="col-md-3 col-6" style={{ width: "33%" }}>
            <div className="box">
              <img src={imeg2} alt="" />
              <div className="box-content">
                <h4 className="title">Fatima Butt</h4>
              </div>
              <p className="description">
                <p>
                  <strong style={{ marginRight: "20px" }}>Phone:</strong>
                  +92 35642315
                </p>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
