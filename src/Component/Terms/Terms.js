import React from 'react';
import NavbarComponent from "../Navbar/Navbar";

const Terms = () => {
  return (
    <>
    <NavbarComponent />

    <div className="terms-and-conditions-container">
      <h1>Terms and Conditions</h1>

      <h2>1. Introduction</h2>
      <p>Welcome to Craft Gallery. These terms and conditions outline the rules and regulations for the use of our website [www.craftgallery.com](http://www.craftgallery.com) (the "Site").</p>

      <h2>2. Intellectual Property Rights</h2>
      <p>The content on this website, including text, images, logos, and graphics, is the property of Craft Gallery and is protected by intellectual property laws. You may not reproduce, distribute, or use any content from this Site without our prior written consent.</p>

      <h2>3. User Accounts</h2>
      <p>When you create an account on our Site, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account.</p>

      <h2>4. Prohibited Activities</h2>
      <p>You agree not to engage in any of the following prohibited activities:</p>
      <ul>
        <li>Violating any applicable laws or regulations</li>
        <li>Interfering with the security or functionality of the Site</li>
        <li>Using automated means to access the Site or collect information from users</li>
        <li>Impersonating another person or entity</li>
        <li>Posting or transmitting unauthorized commercial communications (spam)</li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <p>We are not liable for any damages, losses, or expenses arising from your use of the Site or any content accessed through the Site. This includes direct, indirect, incidental, consequential, and punitive damages.</p>

      <h2>6. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts in [your jurisdiction].</p>

      <h2>7. Changes to This Agreement</h2>
      <p>We reserve the right to modify or replace these terms and conditions at any time. The updated version will be effective upon posting on the Site. By continuing to use the Site after any changes, you agree to be bound by the updated terms and conditions.</p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions or concerns about these terms and conditions, please contact us at:</p>
      <p>Craft Gallery<br />Email: [insert email address]<br />Address: [insert physical address]</p>

      <p>By using our Site, you agree to these terms and conditions.</p>
    </div>
    </>
  );
};

export default Terms;
