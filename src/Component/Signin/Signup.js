import './Signup.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import me from '../../Assets/login.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    date: '',
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

    const { name, email, date, password } = inpval;

    if (name === '') {
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
    } else if (date === '') {
      toast.error('date field is required', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 5) {
      toast.error('password length greater five', {
        position: 'top-center',
      });
    } else {
      console.log('data added successfully');
      history('/login');
      localStorage.setItem('useryoutube', JSON.stringify([...data, inpval]));
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "70%"}}>
            <h3 className="text-center" style={{marginTop: '30px', marginRight: '80px'}}>Sign Up</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" style={{ width: "80%", height: "8vh", borderRadius: "15px", marginTop: '35px' }}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" style={{ width: "80%", height: "8vh", borderRadius: "15px" }}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" style={{ width: "80%", height: "8vh", borderRadius: "15px" }}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" style={{ width: "80%", height: "8vh", borderRadius: "15px" }}/>
              </Form.Group>
              <Button className="btn-submit" onClick={addData} type="submit"  style={{
                  background: "rgb(purple)",
                  marginRight: "78%",
                  marginTop: "20px",
                  height: "8vh",
                  borderRadius: "15px",
                  backgroundColor: "purple",
                  fontSize: "20px",
                  width: "70%"
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