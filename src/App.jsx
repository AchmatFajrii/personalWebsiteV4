import { useEffect, useState } from "react";
import "./App.css";
import BackToTop from "./assets/top.svg";
import Wa from "./assets/wa.svg";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 200;
    const shouldShow = window.pageYOffset > scrollThreshold;
    setShowBackToTop(shouldShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="main">
        {/* Add the 'show' class when 'showBackToTop' is true */}
        <button
          className={`back ${showBackToTop ? "show" : ""}`}
          type="button"
          onClick={handleBackToTop}
        >
          <img src={BackToTop} alt="" width="50px" />
        </button>
        <button className="wa" type="button">
          <a href="https://wa.me/6285348439785" target="__blank">
            <img src={Wa} alt="" width="50px" />
          </a>
        </button>
        <Header />
        <Home />
        <Services />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
