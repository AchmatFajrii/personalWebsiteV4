import profileImageBlack from "../../assets/fajri-putih.png";
// import profileImageWhite from "../../assets/fajri-putih.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import CV from "../../assets/cvats.pdf";
import "./home.css";
// import { useState } from "react";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__wrapper">
          <div className="home__container container">
            <p className="home__subtitle text-cs">
              Hello, <span>My Name Is</span>
            </p>

            <h1 className="home__title text-cs">
              <span>FAJRI</span> JOY
            </h1>

            <p className="home__job">
              <span className="text-cs">I Am</span> <b>Web Developer</b>
            </p>

            <div className="home__img-wrapper">
              <div className="home__banner">
                <img src={profileImageBlack} className="home__profile" alt="" />
              </div>

              <p className="home__data home__data-one">
                <span className="text-lg">
                  3 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Years of <span>Experience</span>
                </span>
              </p>

              <p className="home__data home__data-two">
                <span className="text-lg">
                  20 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Completed <span>Project</span>
                </span>
              </p>

              <img src={shapeOne} alt="" className="shape shape__1" />
              <img src={shapeTwo} alt="" className="shape shape__2" />
              <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>

            <p className="home__text">
              As a web developer, I have experience in several projects and I am
              enthusiastic about seeking full-time or part-time job
              opportunities. I am committed to delivering high-quality solutions
              in future projects.
            </p>

            <div className="home__socials">
              <a
                href="https://github.com/AchmatFajrii"
                target="__blank"
                className="home__social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/achmat-fajri/"
                target="__blank"
                className="home__social-link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/achmdfajrii?igshid=MjEwN2IyYWYwYw=="
                target="__blank"
                className="home__social-link"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="home__btns">
              <a href={CV} download="" className="btn text-cs">
                Download CV
              </a>

              <a href="#skills" className="hero__link text-cs">
                My Skills
              </a>
            </div>
          </div>

          <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Web Developer</span>
        </div>
      </section>
    </>
  );
};

export default Home;
