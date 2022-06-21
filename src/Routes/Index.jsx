import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import SingleShop from '../Pages/SingleShop';
import Home from '../Pages/Home';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Merchant from '../Pages/Merchant';
import Logout from '../Pages/Logout';
import Admin from '../Pages/Admin';

const Index = () => {
return (
<>
  <Router basename="/">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id/:product" element={<SingleShop />} />
      <Route path="/about" element={<About />} />
      <Route path="/get-started" element={<SignUp />} />
      <Route path="/auth" element={<SignIn />} />
      <Route path="/merchant" element={<Merchant />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/manager" element={<Admin />} />
      <Route path="*" element={ <h1 className='text-center justify-center text-3xl text-red-400 shadow mt-40 mb-10'>No
        page found with such url.</h1> } />
    </Routes>

    <Footer />
  </Router>
</>
)
}

export default Index