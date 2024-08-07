import './Signup.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import me from '../../Assets/signup.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from '../Navbar/Navbar';
import axios from 'axios';

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    username: '',
    email: '',
    password: '',
    profile_photo: null
  });

  const [user, setUser] = useState(null);

  const getdata = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_photo') {
      setInpval((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setInpval((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const addData = (e) => {
    e.preventDefault();
    const { username, email, password, profile_photo } = inpval;

    if (username === '') {
      toast.error('Name field is required!', {
        position: 'top-center',
      });
    } else if (email === '') {
      toast.error('Email field is required', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('Password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 4) {
      toast.error('Password length should be greater than four', {
        position: 'top-center',
      });
    } else {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
     
      if (profile_photo) {
        formData.append('profile_photo', profile_photo);
      }

      axios.post('http://192.168.12.108:8002/crafters/register/', formData)
        .then((res) => {
          console.log(res.data);
          setUser({
            username: res.data.username,
            image: res.data.image, // Assuming the response includes an image URL
          });
          history('/signin');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <NavbarComponent username={user?.username} image={user?.image} />
      <div className="container mt-3">
        <section className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="left_data mt-3 p-3">
              <h3 className="text-center" style={{ marginTop: '70px' }}>
                <span style={{ color: '#016A70', fontFamily: '"Noto Serif Display", serif' }}>Sign</span> 
                <span style={{ color: '#D2DE32', fontFamily: '"Noto Serif Display", serif' }}>Up</span>
              </h3>
              <Form onSubmit={addData}>
                <Form.Group className="mb-4" controlId="formBasicUsername">
                  <Form.Control 
                    type="text" 
                    name="username" 
                    onChange={getdata} 
                    placeholder="Enter Your Name" 
                    style={{ height: "8vh", borderRadius: "15px", marginTop: '35px' }} 
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control 
                    type="email" 
                    name="email" 
                    onChange={getdata} 
                    placeholder="Enter email" 
                    style={{ height: "8vh", borderRadius: "15px" }} 
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control 
                    type="password" 
                    name="password" 
                    onChange={getdata} 
                    placeholder="Password" 
                    style={{ height: "8vh", borderRadius: "15px" }} 
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicImage">
                  <Form.Control 
                    type="file" 
                    name="profile_photo" 
                    onChange={getdata} 
                    placeholder="Upload Image" 
                    style={{ height: "8vh", borderRadius: "15px" }} 
                  />
                </Form.Group>
                <Button 
                  className="btn-submit" 
                  type="submit" 
                  style={{
                    background: "#016A70",
                    marginTop: "20px",
                    height: "8vh",
                    borderRadius: "15px",
                    fontSize: "20px",
                    width: "100%",
                    border: 'none'
                  }}
                >
                  Submit
                </Button>
              </Form>
              <p className="mt-3">
                Already Have an Account? <NavLink to="/Signin">Sign In</NavLink>
              </p>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img src={me} alt="" className="img-fluid" />
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
