import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import me from "../../Assets/log.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import NavbarComponent from "../Navbar/Navbar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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
        position: "top-right",
      });
    } else if (password === "") {
      toast.error("Password field is required", {
        position: "top-right",
      });
    } else {
      axios.post('http://192.168.12.103:8002/crafters/login/', inpval)
        .then((res) => {
          console.log(res.data);
          setIsLoggedIn(true);
          setUserData(res.data.user);
          if (res.data.user.role === "User") {
            toast.success("User login successful", {
              position: 'top-right'
            });
            sessionStorage.setItem("ulogin", JSON.stringify(res.data.user));
            sessionStorage.setItem("token", JSON.stringify(res.data.access));
            setTimeout(() => {
              history("/");
            }, 4000);
          } else if (res.data.user.role === "admin") {
            console.log("admin login");
            toast.success("Admin login successful", {
              position: 'top-right'
            });
            sessionStorage.setItem("alogin", JSON.stringify(res.data.user));
            sessionStorage.setItem("atoken", JSON.stringify(res.data.access));
            setTimeout(() => {
              history("/admin/ahome");
            }, 2000);
          } else {
            toast.error("Invalid username or password", {
              position: "top-right",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Invalid username or password", {
            position: "top-right",
          });
        });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    sessionStorage.removeItem("ulogin");
    sessionStorage.removeItem("token");
    history("/signin");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "70%" }}>
            <h1 className="text-center col-lg-6" style={{ marginTop: "70px", fontFamily: '"Noto Serif Display", serif' }}>
              {isLoggedIn ? `Welcome, ${userData.username}!` : (
                <span>
                  <span style={{ color: "#016A70" }}>Sign </span> 
                  <span style={{ color: "#D2DE32" }}>IN</span>
                </span>
              )}
            </h1>
            {!isLoggedIn && (
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

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword" style={{ position: "relative" }}>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
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
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      zIndex: 1
                    }}
                  />
                </Form.Group>
                <div className="col-lg-6 mb-2 ">
                  <a href='http://192.168.12.103:8002/crafters/password_reset/' style={{ color: '#016A70', marginRight: '58%', fontSize: '20px' }}>Forgot Password?</a>
                </div>
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
            )}
            {isLoggedIn && (
              <Button
                className="col-lg-6"
                onClick={handleLogout}
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
              >
                Logout
              </Button>
            )}
            {!isLoggedIn && (
              <p className="mt-4">
                Don't Have an Account?{" "}
                <NavLink to="/Signup" style={{ color: '#016A70' }}>Signup</NavLink>
              </p>
            )}
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
