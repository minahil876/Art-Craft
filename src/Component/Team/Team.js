import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Team.css";
import imeg from "../../Assets/girl4.jpg";
import imeg1 from "../../Assets/girl.jpg";
import imeg2 from "../../Assets/girl6.jpg";
import "./Team.css";
class Team extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <h1
            style={{
              color: "#016A70",
              fontSize: "35px",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#016A70" }}>Meet</span> <span style={{ color: "#D2DE32" }}>Our</span> <span style={{ color: "#016A70" }}>Team</span>
            <span style={{ color: "#D2DE32" }}> Members</span>
          </h1>
        </div>

        <div className="row2">
          <div className="col-md-4 m-2 col-sm-6">
            <div className="box2">
              <img src={imeg} alt="Minahil Iqbal" />
              <div className="box-content">
                <h4 className="title" style={{ color: "white" }}>
                  Minahil Iqbal
                </h4>
                <p className="description">
                  <strong style={{ marginLeft: "30%" }}>Phone:</strong> +92
                  35642315
                  <br />
                  <strong style={{ marginLeft: "30%" }}>Email:</strong>{" "}
                  Minahil@gmail.com
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.pinterest.com">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                  <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  m-2 col-sm-6">
            <div className="box2">
              <img src={imeg1} alt="Aqeera Arshad" />
              <div className="box-content">
                <h4 className="title" style={{ color: "white" }}>
                  Aqeera Arshad
                </h4>
                <p className="description">
                  <strong style={{ marginLeft: "30%" }}>Phone:</strong> +92
                  35642315
                  <br />
                  <strong style={{ marginLeft: "30%" }}>Email:</strong>{" "}
                  Aqeera@gmail.com
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.pinterest.com">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                  <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-2 col-sm-6">
            <div className="box2">
              <img src={imeg2} alt="Fatima Butt" />
              <div className="box-content">
                <h4 className="title" style={{ color: "white" }}>
                  Fatima Butt
                </h4>
                <p className="description">
                  <strong style={{ marginLeft: "30%" }}>Phone:</strong> +92
                  35642315
                  <br />
                  <strong style={{ marginLeft: "30%" }}>Email:</strong>{" "}
                  Fatima@gmail.com
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.pinterest.com">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                  <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
