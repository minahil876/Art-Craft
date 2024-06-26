import './Signup.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import me from '../../Assets/signup.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarComponent from '../Navbar/Navbar';
import axios from 'axios';


const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    username: '',
    email: '',
    // date: '',
    password: '',
  });

  const [data] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const addData = (e) => {

    e.preventDefault();
axios.post(' http://192.168.12.106:8000/crafters/register/',inpval).then((res)=>{
  console.log(res.data)
}).catch((err)=>{
  console.log(err)
});
    

    const { username, email, password } = inpval;

    if (username === '') {
      toast.error(' name field is required!', {
        position: 'top-center',
      });
    } else if (email === '') {
      toast.error('email field is required', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.error('plz enter valid email address', {
        position: 'top-center',
      });
    } 
     else if (password === '') {
      toast.error('password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 4) {
      toast.error('password length greater five', {
        position: 'top-center',
      });
    } else {
      console.log('data added successfully');
      history('/login');
      localStorage.setItem('useryoutube', JSON.stringify([...data, inpval]));
    }
  };
  const handelsubmit=(e)=>{
e.preventDefault();
console.log("it is clciked")
  }
  return (
    <>
    <NavbarComponent/>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "70%"}}>
            <h3 className="text-center" style={{marginTop: '70px', marginRight: '80px'}}>
            <span style={{color: '#016A70', fontFamily: '"Noto Serif Display", serif' }}>Sign</span> <span style={{color: '#D2DE32', fontFamily: '"Noto Serif Display", serif' }}>Up</span>
            </h3>
            <Form onSubmit={handelsubmit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" name="username" onChange={getdata} placeholder="Enter Your Name" style={{ width: "100%", height: "8vh", borderRadius: "15px", marginTop: '35px' }}/>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" style={{ width: "100%", height: "8vh", borderRadius: "15px" }}/>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" style={{ width: "100%", height: "8vh", borderRadius: "15px" }}/>
              </Form.Group>
             
              <Button className="btn-submit" onClick={addData} type="submit"  style={{
                  background: "#016A70",
                  marginRight: "78%",
                  marginTop: "20px",
                  height: "8vh",
                  borderRadius: "15px",
                  backgroundColor: "#016A70",
                  fontSize: "20px",
                  width: "100%",
                  border: 'none'
                }}>
                Submit
              </Button>
            </Form>
            {/* <p className="mt-3">
              Already Have an Account <span><NavLink to="/Signin">SignIn</NavLink></span>{' '}
            </p> */}
          </div>
          <img src={me} alt="" style={{ marginLeft: "10px", height: "80vh", width: "100%" }}/>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
