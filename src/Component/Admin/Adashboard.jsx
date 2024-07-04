import React,{useState,useEffect} from 'react'
// import { NavLink } from 'react-router-dom';
import axios from 'axios';
const Adashboard = () => {
    const data=JSON.parse(sessionStorage.getItem('alogin'));
    const [product, setProduct] = useState([]);
 

  useEffect(() => {
    // Fetch products
    axios.get('http://192.168.12.103:8002/crafters/products/')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });

    // Fetch cart items
    // You can add cart fetching logic here if needed

  }, []);
  return (
    <div>
        <h1>Welcome {data.username}</h1>

        <div className='row'>
        <h4 className='text-danger mb-2 mt-5'>List Of Products You Are Sellling</h4>
          {product.length > 0 ? (
            product.map((item) => (
              <div className='col-md-4' key={item.id}>
                <div className="card mb-3">
                  <img src={item.product_picture} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Price: </strong>${item.price}</p>
                   
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
  )
}

export default Adashboard