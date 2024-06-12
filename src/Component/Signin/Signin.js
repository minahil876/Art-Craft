import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import me from "../../Assets/log.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from "../Navbar/Navbar";
import axios from "axios";

const Signin = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    username: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const { username, password } = inpval;
    if (username === "") {
      toast.error("Username field is required", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Password field is required", {
        position: "top-center",
      });
    // }
    // else if (password.length <= 5) {
    //   toast.error("Password length should be greater than five", {
    //     position: "top-center",
    //   });
    } else {
      axios.post('http://192.168.12.106:8000/crafters/login/', inpval)
        .then((res) => {
          console.log(res.data);
          if (res.data.user.role==="user") { // Adjust the condition according to your backend response
            toast.success("User login successful", {
              position: 'top-center'
            });
            sessionStorage.setItem("ulogin", JSON.stringify(res.data.user));
            sessionStorage.setItem("token", JSON.stringify(res.data.access));
            history("/uhome");
          }else if(res.data.user.role==="admin"){
            console.log("admin login")
            sessionStorage.setItem("alogin", JSON.stringify(res.data.user));
            sessionStorage.setItem("atoken", JSON.stringify(res.data.access));
            history("/Admin");
          }

           else {
            toast.error("Invalid username or password", {
              position: "top-center",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("An error occurred. Please try again.", {
            position: "top-center",
          });
        });
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "70%" }}>
            <h1 className="text-center col-lg-6" style={{ marginTop: "70px", fontFamily: '"Noto Serif Display", serif' }}>
              <span style={{ color: "#016A70"}}>Sign </span> <span style={{ color: "#D2DE32",}}>IN</span>
            </h1>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" style={{ marginTop: "10px" }}>
                <Form.Control
                  type="text"
                  name="username"
                  onChange={getdata}
                  placeholder="Enter username"
                  style={{ width: "100%", height: "8vh", borderRadius: "15px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                  style={{
                    width: "100%",
                    height: "8vh",
                    marginTop: "30px",
                    borderRadius: "15px",
                  }}
                />
              </Form.Group>
              <Button
                className="col-lg-6"
                onClick={addData}
                style={{
                  background: "#016A70",
                  marginRight: "50%",
                  width: "50%",
                  marginTop: "20px",
                  height: "8vh",
                  borderRadius: "15px",
                  backgroundColor: "#016A70",
                  border: 'none',
                  fontSize: "20px",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-4">
              Already Have an Account?{" "}
              <NavLink to="/Signup" style={{ color: '#016A70' }}>Signup</NavLink>
            </p>
          </div>
          <div>
            <img
              src={me}
              alt=""
              style={{ marginLeft: "10px", height: "80vh", width: "100%" }}
            />
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signin;
