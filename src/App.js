import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <main className="main" style={{ background: "#fff" }}>
        <Header />
        <Services />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
