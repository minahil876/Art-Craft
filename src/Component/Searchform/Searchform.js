import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGift,
  faDollarSign,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  return (
    <div
      className="container-fluid mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        background: "purple",
        padding: "35px",
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text border-0 bg-white">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ color: "purple", fontSize: "20px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 py-3"
                    placeholder="Location"
                  style={{fontSize: '18px'}}/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text border-0 bg-white">
                    <FontAwesomeIcon
                      icon={faGift}
                      style={{ color: "purple", fontSize: "20px" }}
                    />
                  </span>
                  <select className="form-select border-0 py-3" style={{fontSize: '18px'}}>
                    <option selected>Gift Type (any)</option>
                    <option value="1">Gift Type 1</option>
                    <option value="2">Gift Type 2</option>
                    <option value="3">Gift Type 3</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text border-0 bg-white">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      style={{ color: "purple", fontSize: "20px" }}
                    />
                  </span>
                  <select className="form-select border-0 py-3" style={{fontSize: '18px'}}>
                    <option selected>Price Range (any)</option>
                    <option value="1">Price Range 1</option>
                    <option value="2">Price Range 2</option>
                    <option value="3">Price Range 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="btn border-0 w-100 py-3"
              style={{ background: "white", color: "black", fontSize: "18px" }}
            >
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: "purple", fontSize: "20px" }}
              />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
