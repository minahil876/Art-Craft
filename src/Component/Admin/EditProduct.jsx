import React, { useState } from 'react';
import axios from 'axios';

function EditProduct() {
  const pdata = JSON.parse(sessionStorage.getItem('uproduct'));
  const id = pdata.id; // Logging token to verify retrieval

  const [product, setProduct] = useState({
    name: pdata.name,
    price: pdata.price,
    size: pdata.size,
    color: pdata.color,
    image: pdata.product_picture, // Assuming `product_picture` contains the path to the image
  });

  const [newImage, setNewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('size', product.size);
    formData.append('color', product.color);
    if (newImage) {
      formData.append('product_picture', newImage);
    }

    try {
      const response = await axios.patch(
        `http://192.168.12.103:8002/crafters/products/${id}/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // 'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log('Product submitted:', response.data);
      alert('Product Updated Successfully');  
      window.location.reload();
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  const formStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
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

  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: '#fff',
  };

  return (
    <div style={formStyle}>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Product Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Enter product name'
            value={product.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Price:</label>
          <input
            type='text'
            name='price'
            placeholder='Enter product price'
            value={product.price}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>Size:</label>
          <input
            type='text'
            name='size'
            placeholder='Enter size options'
            value={product.size}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Color:</label>
          <input
            type='text'
            name='color'
            placeholder='Enter color options'
            value={product.color}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Current Product Image:</label>
          {product.image && <img src={product.image} alt='Product' style={{ width: '100px', height: 'auto' }} />}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Upload New Image:</label>
          <input type='file' onChange={handleImageUpload} style={inputStyle} />
        </div>

        <div style={formGroupStyle}>
          <button type='submit' style={submitButtonStyle}>Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
