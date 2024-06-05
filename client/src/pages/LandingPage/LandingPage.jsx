import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './LandingPage.css'
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/hDpDnxlYwo.json";

const LandingPage = () => {
  return (
    <div id="main">
      <div className="background-container">
        <Lottie animationData={groovyWalkAnimation} loop={true} />
      </div>
      <div id="box1"></div>

      <div id="box2">
        <div id="text">
          <span className="color1">Amusem</span><span className="color2">ent</span><br />
          <span className="color1">Park</span>
        </div>
      </div>

      <div id="box3">
        <div id="container">
          <div id="logo">
            <img src="" alt="Amusement_image" />

          </div>

          <div id="menu">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="home.html">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">ABOUT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage