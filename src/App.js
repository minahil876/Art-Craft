// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Product from './Component/Product/Product';
import Gallery from './Component/Gallery/Gallery';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from './Component/Signin/Signin';
import Signup from './Component/Signin/Signup';
// import NavbarComponent from './Component/Navbar/Navbar';
import Slick from './Component/Slick/Slick'
import Admin from './Component/Admin/Admin';
import Addproduct from './Component/Admin/Addproduct';
import Removeproduct from './Component/Admin/Removeproduct';
import Updateproduct from './Component/Admin/Updateproduct';
import Orderpayment from './Component/Admin/Orderpayment';
import Notification from './Component/Admin/Notification.js'
// import PostSlider from './PostSlider';
import Privacy from './Component/Privacy/Privacy';
import Terms from './Component/Terms/Terms'
import EditProduct from './Component/Admin/EditProduct.jsx';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        {/* <NavbarComponent /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/slick' element={<Slick />}></Route> 
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />

{/* ADMIN */}
          <Route path='/admin'  element={<Admin/>}>
           <Route path='addproduct' element={<Addproduct/>}/>
           <Route path='removeproduct' element={<Removeproduct/>}/>
           <Route path='orderpayment' element={<Orderpayment/>}/>
           <Route path='notification' element={<Notification/>}/>
           <Route path='updateproduct' element={<Updateproduct/>}>
           <Route path='editproduct' element={<EditProduct/>}/>
           </Route>

          </Route>
{/* <Slick /> */}
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;



