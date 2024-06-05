import React from 'react';
import './Footer.css'
import img1 from "../../Assets/img20.jpeg";
import img2 from "../../Assets/img9.jpg";
import img3 from "../../Assets/img8.jpg";
import img4 from "../../Assets/img9.jpg";
import img5 from "../../Assets/img10.jpg";
import img6 from "../../Assets/img5.jpg";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="container-fluid spfooter  text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn', background: '#016A70' }}>
            <div className="foot">
                <div className="row"> 
                <div className="touch col-lg-3 col-md-6 d-flex justify-content-start flex-column align-items-start">
    <h5 className="text-white mb-4">
    Get In Touch
    </h5>
    <p style={{color: 'white', cursor: 'pointer'}}><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
    <p style={{color: 'white', cursor: 'pointer'}}><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
    <p style={{color: 'white', cursor: 'pointer'}}><i className="fa fa-envelope me-3"></i>info@example.com</p>
    <div className="d-flex">
        <h5 className="btn  btn-social me-2 mb-2" style={{ borderRadius: '20px', background: 'white' }}><i className="fab fa-twitter" style={{color: '#016A70'}}></i></h5>
        <h5 className="btn btn-social me-2 mb-2" style={{ borderRadius: '20px' , background: 'white'}}><i className="fab fa-facebook-f"  style={{color: '#016A70'}}></i></h5>
        <h5 className="btn btn-social me-2 mb-2" style={{ borderRadius: '20px', background: 'white' }}><i className="fab fa-youtube"  style={{color: '#016A70'}}></i></h5>
        <h5 className="btn btn-social mb-2" style={{ borderRadius: '20px', background: 'white' }}><i className="fab fa-linkedin-in"  style={{color: '#016A70'}}></i></h5>
    </div>
</div> 
                    <div className=" lis col-lg-3  col-md-6 d-flex justify-content-start flex-column align-items-start">
    <h5 className="text-white mb-4">
    Quick Links
    </h5>
    <li><NavLink to="/about" className="btn btn-link " style={{ textDecoration: 'none' , color: 'white', fontSize: '20px'}}>About Us</NavLink></li>
    <li><NavLink to="/gallery" className="btn btn-link " style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Gallery</NavLink></li>
    <li><NavLink to="/contact" className="btn btn-link " style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Contact</NavLink></li>
    <li><NavLink to="/privacy" className="btn btn-link " style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Privacy Policy</NavLink></li>
    <li><NavLink to="/terms" className="btn btn-link " style={{textDecoration: 'none', color: 'white', fontSize: '20px', listStyle: 'none !important'}}>Terms &amp; Condition</NavLink></li>
</div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4 d-flex" style={{marginLeft: '30px'}}>
                        Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img1} alt="" style={{ width: '80%', height: '12vh' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img2} alt="" style={{ width: '80%', height: '12vh' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img3} alt="" style={{ width: '80%', height: '12vh' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img4} alt="" style={{ width: '80%', height: '12vh' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img5} alt="" style={{ width: '80%', height: '12vh' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img6} alt="" style={{ width: '80%', height: '12vh' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-5 ms-5 me-5">
                        Newsletter
                        </h5>
                        <p style={{color: 'white'}}>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className=" button position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2" style={{background: '#016A70', color: 'white'}}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <hr></hr>
                {/* <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <h5 className="border-bottom">Your Site Name</h5>, All Right Reserved. 
							
							Designed By <h5 className="border-bottom" >HTML Codex</h5>
                            <br />
                            Distributed By <h5 className="border-bottom" target="_blank" rel="noreferrer">ThemeWagon</h5>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <h5>Home </h5>
                                <h5>Cookies </h5>
                                <h5>Help </h5>
                                <h5>FQAs </h5>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;



