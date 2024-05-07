// import React from 'react';

// function JobDashboard() {
//   return (
//     <div className="container">
//       <nav>
//         <div className="navbar">
//           <div className="logo">
//             <img src="/pic/logo.jpg" alt="" />
//             <h1>jobs</h1>
//           </div>
//           <ul>
//             <li>
//               <a href="#">
//                 <i className="fas fa-user"></i>
//                 <span className="nav-item">Dashboard</span>
//               </a>
//             </li>
//             {/* Add other list items here */}
//           </ul>
//         </div>
//       </nav>

//       <section className="main">
//         <div className="main-top">
//           <p>Explore the universe!</p>
//         </div>
//         <div className="main-body">
//           <h1>Recent Jobs</h1>
        
//           {/* Add search bar and tags bar here */}
          
//           <div className="row">
//             <p>There are more than <span>400</span> Jobs</p>
//             <a href="#">See all</a>
//           </div>

//           {/* Job cards */}
//           <div className="job_card">
//             <div className="job_details">
//               <div className="img">
//                 <i className="fab fa-google-drive"></i>
//               </div>
//               <div className="text">
//                 <h2>UX Designer</h2>
//                 <span>Google Drive - Junior Post</span>
//               </div>
//             </div>
//             <div className="job_salary">
//               <h4>$6.7 - $12.5k /yr</h4>
//               <span>1 days ago</span>
//             </div>
//           </div>

//           {/* Add other job cards here */}
          
//         </div>
//       </section>
//     </div>
//   );
// }

// export default JobDashboard;




















import React from 'react';
import './style.css'; // Import CSS file

function AuthContainer() {
  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <div className="infield">
            <input type="text" placeholder="Name" />
            <label></label>
          </div>
          <div className="infield">
            <input type="email" placeholder="Email" name="email"/>
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" />
            <label></label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <div className="infield">
            <input type="email" placeholder="Email" name="email"/>
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" />
            <label></label>
          </div>
          <a href="#" className="forgot">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container" id="overlayCon">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button>Sign Up</button>
          </div>
        </div>
        <button id="overlayBtn"></button>
      </div>
    </div>
  );
}

export default AuthContainer;

