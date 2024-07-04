import React, { useState, useEffect } from "react";
import NavbarComponent from "../Navbar/Navbar";
import "./Product.css";
import me from "../../Assets/img13.jpeg";
import Procard from "../Procard/Procard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGift,
  faDollarSign,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const data = JSON.parse(sessionStorage.getItem('ulogin'));
  const token = JSON.parse(sessionStorage.getItem('token'));
  
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [state, setState] = useState({
    location: "",
    priceRange: "",
    name: ""
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const filterProducts = () => {
      let filtered = product;

      if (state.priceRange) {
        const [minPrice, maxPrice] = state.priceRange.split('-').map(Number);
        filtered = filtered.filter(item => item.price >= minPrice && item.price <= maxPrice);
      }

      if (state.name) {
        filtered = filtered.filter(item => item.name.toLowerCase().includes(state.name.toLowerCase()));
      }

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [state.priceRange, state.name, product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://192.168.12.103:8002/crafters/product/search/', state).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };

  const addit = (item) => {
    console.log("it clicked")
    if (data) {
      const user_id = data ? data.id : "";
      const product_id = item.id;
      const body = {
        quantity: 1,
        price: item.price,
      };
      axios.post(`http://192.168.12.103:8002/crafters/add-to-cart/${user_id}/${product_id}/`, body, {
        headers: {
          'Authorization':`Bearer ${token}`
        }
      }).then((res) => {
        console.log('Product added to cart:', res.data);
        alert('Product added to cart successfully!');
      }).catch((error) => {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart. Please try again.');
      });
    } else {
      alert("Please log in first");
      navigate('/signin'); // Redirect to sign in page
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="special">
        <div className="main">
          <div className="left">
            <h1>
              <span style={{ color: "#016A70" }}>DISCOVER </span>{" "}
              <span style={{ color: "#D2DE32" }}>THE</span>{" "}
              <span style={{ color: "#016A70" }}>BEST</span>{" "}
              <span style={{ color: "#D2DE32" }}>GIFTS</span>{" "}
              <span style={{ color: "#016A70" }}>FOR</span>{" "}
              <span style={{ color: "#D2DE32" }}>YOUR</span>{" "}
              <span style={{ color: "#016A70" }}>LOVED</span>{" "}
              <span style={{ color: "#D2DE32" }}>ONES</span>
            </h1>
            <p style={{ marginLeft: "28px", fontSize: '22px'}}>
            Delight your loved ones with our exquisite selection of gifts, meticulously
  crafted to bring a smile to their faces. Whether you're celebrating a special
  occasion or just want to show you care, our range of beautifully designed
  bouquets and gift baskets offer something for everyone.
 
            </p>
          </div>
          <div className="right">
            <img src={me} alt="world" />
          </div>
        </div>

        {/* Search form */}
        <div
          className="container-fluid mb-5 wow fadeIn"
          data-wow-delay="0.1s"
          style={{
            background: "#016A70",
            padding: "35px",
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeIn",
          }}
        >
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-md-10">
                  <div className="row g-2">
                    <div className="col-md-4">
                      <div className="input-group">
                        <span className="input-group-text border-0 bg-white">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            style={{ color: "#016A70", fontSize: "20px" }}
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control border-0 py-3"
                          placeholder="Location"
                          onChange={handleChange}
                          name="location"
                          style={{ fontSize: '18px' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group">
                        <span className="input-group-text border-0 bg-white">
                          <FontAwesomeIcon
                            icon={faGift}
                            style={{ color: "#016A70", fontSize: "20px" }}
                          />
                        </span>
                        <select className="form-select border-0 py-3" name="name" onChange={handleChange} style={{ fontSize: '18px' }}>
                          <option selected value="">Name</option>
                          <option value="basket">Basket</option>
                          <option value="bouquet">Bouquet</option>
                          <option value="Nikkah pen">Nikkah pen</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group">
                        <span className="input-group-text border-0 bg-white">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            style={{ color: "#016A70", fontSize: "20px" }}
                          />
                        </span>
                        <select className="form-select border-0 py-3" name="priceRange" onChange={handleChange} style={{ fontSize: '18px' }}>
                          <option selected value="">Price Range (any)</option>
                          <option value="5000-10000">5000-10000</option>
                          <option value="10000-15000">10000-15000</option>
                          <option value="15000-25000">15000-25000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn2 border-0 w-100 py-3" type="submit"
                    style={{ background: "white", color: "black", fontSize: "18px", borderRadius: '10px' }}
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{ color: "#016A70", fontSize: "20px" }}
                    />
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Conditionally render Procard or products */}
        {filteredProducts.length > 0 ? (
          <div className="product-list">
            {filteredProducts.map((item, ind) => (
              <div key={ind} className="col-md-4">
                <div className="card">
                  <img src={item.image_url} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button className="btn btn-primary" onClick={() => addit(item)}>Add to cart</button>
                  </div>
                </div>
              </div> 
            ))}<Footer />
          </div>
        ) : (
          <Procard addItemFunction={addit} />
        )}
      </div>
     
    </>
  );
}

export default Product;
