import React, { useEffect, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
