import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Unav from './Unav';

const Vorder = () => {
    const [order, getorder] = useState([]);
    const data = JSON.parse(sessionStorage.getItem('ulogin'));
    const token = JSON.parse(sessionStorage.getItem('token'));
    const user_id = data.id;

    useEffect(() => {
        axios.get('http://192.168.12.106:8000/crafters/checkout/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data.order_items);
            getorder(res.data.order_items);
        })
    }, []); // Added empty dependency array to ensure it runs only once

    return (
        <div className='container-fluid row mt-5'>
            <div className='col-md-3'>
                <Unav />
            </div>
            <div className="col-md-9 mt-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((item, ind) => (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{item.product_name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.price * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Vorder;
