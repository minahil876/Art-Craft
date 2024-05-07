// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Product from './Component/Product/Product';
import Gallery from './Component/Gallery/Gallery';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from './Component/Signin/Signin';
// import Signup from './Component/Signup/Signup'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          {/* <Route path='/signup' element={<Signup />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



