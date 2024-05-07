import React from 'react';
import './Footer.css'
import img1 from "../../Assets/img6.jpg";
import img2 from "../../Assets/img7.jpg";
import img3 from "../../Assets/img8.jpg";
import img4 from "../../Assets/img9.jpg";
import img5 from "../../Assets/img10.jpg";
import img6 from "../../Assets/img5.jpg";


const Footer = () => {
    return (
        <div className="container-fluid spfooter bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
            <div className="">
                <div className="row "> 
                    <div className="col-lg-3 col-md-6 d-flex justify-content-start  flex-column  align-items-start">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div> 
                    <div className="col-lg-3  col-md-6 d-flex justify-content-start flex-column align-items-start">
    <h5 className="text-white mb-4">Quick Links</h5>
    <li><a className="btn btn-link text-white-50" href="">About Us</a></li>
    <li><a className="btn btn-link text-white-50" href="">Contact Us</a></li>
    <li><a className="btn btn-link text-white-50" href="">Our Services</a></li>
    <li><a className="btn btn-link text-white-50" href="">Privacy Policy</a></li>
    <li><a className="btn btn-link text-white-50" href="">Terms &amp; Condition</a></li>
</div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4 d-flex">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img1} alt="" style={{ width: '80%' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img2} alt="" style={{ width: '80%' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img3} alt="" style={{ width: '80%' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img4} alt="" style={{ width: '80%' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img5} alt="" style={{ width: '80%' }} />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={img6} alt="" style={{ width: '80%' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
            <hr></hr>
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							
							Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            <br />
                            Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home </a>
                                <a href="">Cookies </a>
                                <a href="">Help </a>
                                <a href="">FQAs </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;



