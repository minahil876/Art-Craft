import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Orderpayment.css';

const Orderpayment = () => {
  const token = JSON.parse(sessionStorage.getItem('atoken'));
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.12.103:8002/crafters/admin-checkout/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setOrder(res.data.order_items);
    })
    .catch((error) => {
      console.error('Error fetching orders:', error);
    });
  }, [token]);

  const change = (order_id) => {
    const body = {
      status: "DELIVERED"
    };
    axios.patch(`http://192.168.12.103:8002/crafters/admin-checkout/${order_id}/`, body, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      window.location.reload();
    });
  }

  return (
    <div className="order-payment-container">
      <h1>Order Payment</h1>
      <table className="order-table" style={{color: 'black'}}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Total Amount</th>
            <th>Product Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {order.length > 0 ? (
            order.map((item) => (
              <tr key={item.id}>
                <td>{item.product_id}</td>
                <td>{item.user_name}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td><img src={item.image_url} alt={item.product_name} /></td>
                <td>{item.status}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => change(item.order_id)}>Delivered</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orderpayment;
