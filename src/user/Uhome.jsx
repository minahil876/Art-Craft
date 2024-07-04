import React, { useState, useEffect } from 'react';
import Unav from './Unav';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Uprofile from './Uprofile';
import './Uhome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Uhome = () => {
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const data = JSON.parse(sessionStorage.getItem('ulogin'));
  const token = JSON.parse(sessionStorage.getItem('token'));
  const user_id = data.id;

  useEffect(() => {
    // Fetch products
    axios.get('http://192.168.12.103:8002/crafters/products/')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
  }, [user_id, token]);

  const handleViewProduct = (item) => {
    console.log(item)
    setSelectedProduct(item);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='container-fluid row mt-5'>
      <div className='col-md-3'>
        <Unav />
      </div>
      <div className='col-md-8'>
        <h1><span style={{ color: '#016A70' }}>Welcome</span> <span style={{ color: '#A2C579' }}>{data.username}</span> </h1>

        <div className='row mb-4'>
          <div className='col-md-4'>
            <div className="card bg-primary text-white mb-3">
              <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <NavLink to='/Uprofile' className="btn btn-light" style={{ color: 'black' }}>View Profile</NavLink>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card bg-success text-white mb-3">
              <div className="card-body">
                <h5 className="card-title">View Cart</h5>
                <NavLink to='/cart' className="btn btn-light" style={{ color: 'black' }}>Cart</NavLink>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card bg-info text-white mb-3">
              <div className="card-body">
                <h5 className="card-title">View Order</h5>
                <NavLink to='/uorder' className="btn btn-light" style={{ color: 'black' }}>Order</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          {product.length > 0 ? (
            product.map((item) => (
              <div className='col-md-4' key={item.id}>
                <div className="card mb-3">
                  <img src={item.product_picture} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Price: </strong>Rs {item.price}</p>
                    <button onClick={() => handleViewProduct(item)} className="btn btn-primary" data-toggle="modal" data-target="#productModal">View Product</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='col-12'>
              <p>No products available</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal fade show mb-3 pb-3" id="productModal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog pb-3">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="close btn btn-secondary" onClick={handleCloseModal} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedProduct.product_picture} className="img-fluid mb-3" alt={selectedProduct.name} />
                <p>{selectedProduct.description}</p>
                {/* <p><strong>Name: </strong> {selectedProduct.name}</p> */}
                <p><strong>location: </strong> {selectedProduct.location}</p>
                <p><strong>Price: </strong>Rs {selectedProduct.price}</p>
                <p><strong>Size: </strong>{selectedProduct.size}</p>
                <p><strong>Color: </strong>{selectedProduct.color}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal} data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Uhome;
