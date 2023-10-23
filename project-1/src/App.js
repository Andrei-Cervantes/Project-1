import { Routes, Route } from "react-router-dom";
import "./App.css";

import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home"
import { About } from "./components/pages/About"
import { Contact } from "./components/pages/Contact"
import {Products }from "./components/pages/Products"
import { Services } from "./components/pages/Services"
import { Footer } from "./components/Footer";
import AOS from "aos";
AOS.init();

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
