// import React, { useState, useEffect } from 'react';
// import Unav from './Unav';
// import axios from 'axios';

// const Uproduct = () => {
//   const [product, setProduct] = useState([]);
//   const [nproduct, setNproduct] = useState([]);
//   const [searchCriteria, setSearchCriteria] = useState({
//     location: '',
//   });

//   const data = JSON.parse(sessionStorage.getItem('ulogin'));
//   const token = JSON.parse(sessionStorage.getItem('token'));
//   const user_id = data.id;

//   useEffect(() => {
//     axios.get('http://192.168.12.103:8000/crafters/products/')
//       .then((res) => {
//         console.log(res.data);
//         setProduct(res.data);
//       });
//   }, []);

//   const addit = (item) => {
//     const product_id = item.id;
//     const body = {
//       quantity: 1,
//       price: item.price,
//     };
//     axios.post(`http://192.168.12.103:8000/crafters/add-to-cart/${user_id}/${product_id}/`, body, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     }).then((res) => {
//       console.log('Product added to cart:', res.data);
//     }).catch((error) => {
//       console.error('Error adding product to cart:', error);
//     });
//   };

//   const formGroupStyle = {
//     marginBottom: '15px',
//   };

//   const labelStyle = {
//     display: 'block',
//     marginBottom: '5px',
//     fontWeight: 'bold',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     boxSizing: 'border-box',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchCriteria({ ...searchCriteria, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setNproduct([]); // Clear nproduct array before making the search request
//     axios.post('http://192.168.12.103:8000/crafters/product/search/', searchCriteria)
//       .then((res) => {
//         console.log(res.data);
//         setNproduct(res.data);
//       });
//   };

//   const productsToDisplay = nproduct.length > 0 ? nproduct : product;

//   return (
//     <div className='container-fluid row mt-5'>
//       <div className='col-md-3'>
//         <Unav />
//       </div>
//       <div className='col-md-9'>
//         <form onSubmit={handleSubmit}>
//           <div style={formGroupStyle}>
//             <label style={labelStyle}>Location:</label>
//             <select
//               name="location"
//               value={searchCriteria.location}
//               onChange={handleChange}
//               style={inputStyle}
//             >
//               <option value="">Select Location</option>
//               <option value="lahore">Lahore</option>
//               <option value="islamabad">Islamabad</option>
//               <option value="karachi">Karachi</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <input type='submit' value="Search" />
//         </form>
//         <div className="row">
//           {productsToDisplay.length === 0 ? (
//             <p>No products found</p>
//           ) : (
//             productsToDisplay.map((item, ind) => (
//               <div key={ind} className="col-md-4">
//                 <div className="card">
//                   <img src={item.image_url} className="card-img-top" alt="Product" />
//                   <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <button className="btn btn-primary" onClick={() => addit(item)}>Add to cart</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Uproduct;






















import React, { useState, useEffect } from 'react';
import Unav from './Unav';
import axios from 'axios';

const Uproduct = () => {
  const [product, setProduct] = useState([]);
  const [nproduct, setNproduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
  });

  const data = JSON.parse(sessionStorage.getItem('ulogin'));
  const token = JSON.parse(sessionStorage.getItem('token'));
  const user_id = data.id;

  useEffect(() => {
    // Fetch products
    axios.get('http://192.168.12.106:8000/crafters/products/')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });

    // Fetch cart items
    
  }, [user_id, token]);

  const addit = (item) => {
    const product_id = item.id;
    const body = {
      quantity: 1,
      price: item.price,
    };
    axios.post(`http://192.168.12.106:8000/crafters/add-to-cart/${user_id}/${product_id}/`, body, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log('Product added to cart:', res.data);
      // Update cart state
      // setCart([...cart, { ...item, quantity: 1 }]);
    }).catch((error) => {
      console.error('Error adding product to cart:', error);
    });
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNproduct([]); // Clear nproduct array before making the search request
    axios.post('http://192.168.12.106:8000/crafters/product/search/', searchCriteria)
      .then((res) => {
        console.log(res.data);
        setNproduct(res.data);
      });
  };

  const productsToDisplay = nproduct.length > 0 ? nproduct : product;

  return (
    <div className='container-fluid row mt-5'>
      <div className='col-md-3'>
        <Unav />
      </div>
      <div className='col-md-9'>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Location:</label>
            <select
              name="location"
              value={searchCriteria.location}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Location</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
              <option value="karachi">Karachi</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <input type='submit' value="Search" />
        </form>
        <div className="row">
          {productsToDisplay.length === 0 ? (
            <p>No products found</p>
          ) : (
            productsToDisplay.map((item, ind) => (
              <div key={ind} className="col-md-4">
                <div className="card">
                  <img src={item.image_url} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary" onClick={() => addit(item)}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Uproduct;
