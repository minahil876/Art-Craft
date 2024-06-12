import React, { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios';
import Unav from './Unav';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const data = JSON.parse(sessionStorage.getItem('ulogin'));
  const token = JSON.parse(sessionStorage.getItem('token'));
  const user_id = data.id;
  useEffect(()=>{
    axios.get('http://192.168.12.106:8000/crafters/user-cart/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log('Cart items:', res.data);
        setCart(res.data.cart_items);
      }).catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  },[user_id, token]);
   
    
  const removeItem = (item) => {
    const product_id = item.product_id;
    axios.delete(`http://192.168.12.106:8000/crafters/add-to-cart/${user_id}/${product_id}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log('Product removed from cart:', res.data);
      // Update cart state
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
      window.location.reload();
    }).catch((error) => {
      console.error('Error removing product from cart:', error);
    });
    // console.log(item)
  };

  const cashit=(item)=>{
    const body={
        user_id:user_id,
        product_id:item.product_id,
        quantity:item.quantity,
        price:item.price
    };
    axios.post(`http://192.168.12.106:8000/crafters/checkout/`, body, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res)=>{

      })
  }

  console.log(cart)
  return (
    <div className='container-fluid row mt-5'>
    
      <div className='col-md-3'>
        <Unav />
      </div>
        <div className=" col-md-9 mt-5">
          <h3>Cart</h3>
          {/* {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item, ind) => (
              <div key={ind} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => removeItem(item)}>Remove</button>
                </div>
              </div>
            ))
          )} */}
          <div className='row'>
          {
            cart.map((item,ind)=>{
                return(
                    <>
                    <div className='col-md-4'>
                    <div key={ind} className="card mb-3">
                    <img src={item.image_url} className='img-fluid' width="200px"></img>
                <div className="card-body">
                  <h5 className="card-title">Product name: {item.name}</h5>
                  <h5 className="card-title">Price:{item.price}</h5>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <button className="btn btn-danger me-2" onClick={() => removeItem(item)}>Remove</button>
                  <button className="btn btn-danger" onClick={() => cashit(item)}>Cash On Delivery</button>
                </div>
              </div>
</div>
                    </>
                )
            })
          }
          </div>

          
        </div>
    </div>
  )
}

export default Cart