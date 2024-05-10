
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import SIgn_img from './SIgn_img'
import me from '../../Assets/login2.png'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "70%" }}>
                        <h1 className='text-center col-lg-6' style={{marginTop: '70px',color: 'purple'}}><span>Sign IN</span></h1>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" style={{marginTop: '40px'}}>

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" style={{width: '120%',height: '8vh',borderRadius: '15px'}} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" style={{width: '120%',height: '8vh', marginTop: '30px',borderRadius: '15px'}} />
                            </Form.Group>
                            <Button  className='col-lg-6' onClick={addData} style={{ background: "rgb(purple)", marginRight: '50%', marginTop: '20px',height: '8vh',borderRadius: '15px',backgroundColor: 'purple', fontSize: '20px'}} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-4'>Already Have an Account? <button style={{color: 'purple', background: 'inherit', border: 'none'}}>SignUp</button></p>
                    </div>
                    <div>  
                     <img src={me} alt='' style={{marginLeft: '10px', height: '80vh', width: '100%'}}/>
</div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Signin
