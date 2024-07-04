import React, { useState } from "react";
import axios from "axios";
import NavbarComponent from "../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Footer from "../Footer/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://192.168.12.103:8002/crafters/contact/', formData)
      .then(response => {
        toast.success('Form submitted successfully!');
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })
      .catch(error => {
        toast.error('There was an error submitting the form.');
        console.error('There was an error submitting the form:', error);
      });
  };

  return (
    <>
      <NavbarComponent />
      <ToastContainer />
      <div className="container-xxl d-flex py-5">
        <div className="container" style={{ height: "75vh" }}>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "40px" }}
                      >
                        <i
                          className="fa fa-map-marker-alt"
                          style={{ color: "#016A70" }}
                        ></i>
                      </div>
                      <span>123 Street, Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "40px" }}
                      >
                        <i
                          className="fa fa-envelope-open"
                          style={{ color: "#016A70" }}
                        ></i>
                      </div>
                      <span>info@example.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-4 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div
                        className="icon me-3"
                        style={{ width: "45px", height: "40px" }}
                      >
                        <i
                          className="fa fa-phone-alt"
                          style={{ color: "#016A70" }}
                        ></i>
                      </div>
                      <span>+012 345 67769</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-sm-12">
              <iframe
                className="position-relative w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274261047!2d74.00472033834701!3d31.48310365791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714132651819!5m2!1sen!2s"
                width="600"
                height="450"
                frameBorder="0"
                style={{ minHeight: "400px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps Embed"
              ></iframe>
            </div>
            <div className="col-lg-6 col-lg-6 col-sm-12">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-4">
                Your feedback matters to us! Whether you have a question,
                  need assistance, or simply want to give us your thoughts,
                  we're here to help. Fill out the form below, and we'll get
                  back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"  
                          style={{ height: "150px" }}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn w-100 py-3"
                        type="submit"
                        style={{
                          background: "#016A70",
                          color: "white",
                          fontSize: "20px",
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
