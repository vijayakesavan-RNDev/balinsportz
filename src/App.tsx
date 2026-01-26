import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Services from "../src/pages/Services";
import Projects from "../src/pages/Projects";
import About from "../src/pages/About";


import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import OurFounder from "./pages/OurFounder";
import Contact from "./pages/Contact";

export default function App() {
  return (
    < div className="font-display">
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourfounder" element={<OurFounder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

