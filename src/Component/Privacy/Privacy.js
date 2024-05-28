import React from 'react';
import './Privacy.css';
import NavbarComponent from "../Navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
    <NavbarComponent />

    <div className="privacy-policy-container" style={{marginTop: '80px'}}>
      <h1>Privacy Policy</h1>
      {/* <p>Effective Date: [Insert Date]</p> */}

      <h2>1. Introduction</h2>
      <p>Welcome to Craft Gallery. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website [www.craftgallery.com](http://www.craftgallery.com) (the "Site").</p>

      <h2>2. Information We Collect</h2>
      <p><strong>Personal Information:</strong> When you register on our Site, place an order, subscribe to our newsletter, or interact with us in other ways, we may collect personal information such as your name, email address, mailing address, phone number, and payment information.</p>

      <h2>3. How We Use Your Information</h2>
      <p><strong>To Process Transactions:</strong> We use your personal information to process and fulfill your orders, manage payments, and provide customer support.</p>
      <p><strong>To Improve Our Services:</strong> We analyze non-personal information to enhance the functionality and user experience of our Site.</p>

      <h2>4. Data Security</h2>
      <p>We implement a variety of security measures to protect your personal information. This includes secure servers, encryption, and access controls to ensure your data is handled securely.</p>

      
      <h2>5. Your Rights</h2>
      <p>You have the right to access, correct, and delete your personal information. You can also object to the processing of your data and request data portability. To exercise these rights, please contact us at [craftgallery@gmail.com].</p>

      
      
      <p>Craft Gallery<br />Email: craftgallery@gmail.com<br />Address: 128 GT Road Lahore</p>

      <p>By using our Site, you consent to our Privacy Policy.</p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
