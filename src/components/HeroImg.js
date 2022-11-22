import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../Assets/intro-img.jpg";
import {Link} from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
    
        <div className="mask">
            <img className="intro-img" src={IntroImg}></img>
        </div>
        <div className="content">
            <p>HELLO, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg