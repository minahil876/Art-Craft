import React from 'react';
import NavbarComponent from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
    <NavbarComponent/>
    <div className="container-xxl d-flex py-5">
      <div className="container" style={{height: '75vh'}}>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '40px' }}>
                    <i className="fa fa-map-marker-alt" style={{color:'#016A70'}}></i>
                    </div>
                    <span>123 Street, Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '40px' }}>
                    <i className="fa fa-envelope-open" style={{color:'#016A70'}}></i>
                        </div>
                        <span>info@example.com</span>
                      </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="bg-light rounded p-3">
                  <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                    <div className="icon me-3" style={{ width: '45px', height: '40px' }}>
                    <i className="fa fa-phone-alt" style={{color:'#016A70'}}></i>
                        </div>
                        <span>+012 345 67769</span>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className ="col-lg-6 col-lg-6 col-sm-12">
          <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274261047!2d74.00472033834701!3d31.48310365791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714132651819!5m2!1sen!2s"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ minHeight: '400px', border: '0' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps Embed"
                ></iframe>

          </div>
          <div className="col-lg-6 col-lg-6 col-sm-12">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span>Download Now</span></p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="address" placeholder="Address" />
                      <label htmlFor="subject">Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn w-100 py-3" type="submit" style={{background: "#016A70", color: 'white', fontSize: '20px'}}>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </>
  );
}

export default Contact;