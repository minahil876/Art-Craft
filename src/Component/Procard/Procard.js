


import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Procard.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Procard = ({ addItemFunction }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const data = JSON.parse(sessionStorage.getItem('ulogin'));
  const token = JSON.parse(sessionStorage.getItem('token'));

  useEffect(() => {
    axios.get("http://192.168.12.103:8002/crafters/products/").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    },[]);

    if (data) {
      axios.get(`http://192.168.12.103:8002/crafters/favorites/${data.id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        const favoriteIds = res.data.map(fav => fav.product_id);
        setFavorites(favoriteIds);
      }).catch((error) => {
        console.error('Error fetching favorites:', error);
      });
    }
  }, [data,token]);

  // const additInProcard = (item) => {
  //   console.log("it clicked in Procard");
  //   if (data) {
  //     const user_id = data ? data.id : "";
  //     const product_id = item.id;
  //     const body = {  
  //       quantity: 1,
  //       price: item.price,
  //     };
  //     axios.post(`http://192.168.12.103:8002/crafters/add-to-cart/${user_id}/${product_id}/`, body, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     }).then((res) => {
  //       console.log('Product added to cart in Procard:', res.data);
  //       alert('Product added to cart successfully from Procard!');
  //     }).catch((error) => {
  //       console.error('Error adding product to cart in Procard:', error);
  //       alert('Failed to add product to cart from Procard. Please try again.');
  //     });
  //   } else {
  //     alert("Please log in first");
  //     navigate('/signin'); // Redirect to sign in page
  //   }
  // };

  const addFavorite = (item) => {
    console.log("Favorite clicked");
    if (data) {
      // const user_id = data ? data.id : "";
      const product_id = item.id;
      const body = {
        // product_id: product_id,
        quantity: 1,
        price: item.price,
      };
      axios.post(`http://192.168.12.103:8002/crafters/favorites/${product_id}/`, body, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log('Product added to favorites:', res.data);
        alert('Product added to favorites successfully!');
        setFavorites([...favorites, product_id]);
      }).catch((error) => {
        console.error('Error adding product to favorites:', error);
        alert('Failed to add product to favorites. Please try again.');
      });
    } else {
      alert("Please log in first");
      navigate('/signin'); // Redirect to sign in page
    }
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "30px" }}>
          {product.map((item, ind) => {
            const isFavorite = favorites.includes(item.id);
            return (
              <div key={ind} className="col-md-4">
                <div className="card">
                  <img src={item.product_picture} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button className="btn btn-primary" onClick={() => addItemFunction(item)}>Add to cart</button>
                    <button className="btn btn-link" onClick={() => addFavorite(item)}>
                      <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite ? "#A2C579" : "#016A70", fontSize: '30px' }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Procard;

