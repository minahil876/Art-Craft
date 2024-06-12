import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const token = sessionStorage.getItem("atoken");

  console.log("Token:", token); // Logging token to verify retrieval

  const [product, setProduct] = useState({
    name: "",
    price: "",
    product_picture: [], // Initialize as an array
    size: "",
    color: "",
    location: "", // Add location to the state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    setProduct({
      ...product,
      product_picture: [
        ...product.product_picture,
        ...Array.from(e.target.files),
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    product.product_picture.forEach((image) => {
      formData.append("product_picture", image);
    });
    formData.append("size", product.size);
    formData.append("color", product.color);
    formData.append("location", product.location); // Append location to the formData

    try {
      const response = await axios
        .post(
          "http://192.168.12.106:8000/crafters/products/",
          formData
          // {
          //   headers: {
          //     'Authorization': `Token ${token}`,
          //   },
          // }
        )
        .then((res) => {
          console.log(res.data);
        });
      console.log("Product submitted:", response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  const formStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "#fff",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    color: "#fff",
  };

  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Size:</label>
          <input
            type="text"
            name="size"
            placeholder="Enter size options"
            value={product.size}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Color:</label>
          <input
            type="text"
            name="color"
            placeholder="Enter color options"
            value={product.color}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Location:</label>
          <select
            name="location"
            value={product.location}
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
        <div style={formGroupStyle}>
          <button type="submit" style={submitButtonStyle}>
            Save
          </button>
          <button
            type="button"
            onClick={() =>
              setProduct({
                name: "",
                price: "",
                product_picture: [], // Reset product_picture to an empty array
                size: "",
                color: "",
                location: "", // Reset location to an empty string
              })
            }
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
