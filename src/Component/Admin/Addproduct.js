import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    images: [],
    sizeOptions: '',
    colorOptions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    setProduct({ ...product, images: [...product.images, ...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to the server
    console.log('Product submitted:', product);
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

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: '#fff',
  };

  return (
    <div style={formStyle}>
      {/* <h2>Add Product</h2> */}
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Product Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      
        <div style={formGroupStyle}>
          <label style={labelStyle}>Price:</label>
          <input
            type="text"
            name="price"
            placeholder="Enter product price"
            value={product.price}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Product Images:</label>
          <input type="file" multiple onChange={handleImageUpload} style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Size Options:</label>
          <input
            type="text"
            name="sizeOptions"
            placeholder="Enter size options"
            value={product.sizeOptions}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Color Options:</label>
          <input
            type="text"
            name="colorOptions"
            placeholder="Enter color options"
            value={product.colorOptions}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <button type="submit" style={submitButtonStyle}>Save</button>
          <button
            type="button"
            onClick={() => setProduct({
              name: '',
              price: '',
              images: [],
              sizeOptions: '',
              colorOptions: '',
            })}
            style={cancelButtonStyle}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
