import "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{
                        color:"#fff", marginRight:"2rem"
                    }}/>
                    <p>Address line1</p>
                    <p>Address line2</p>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{
                        color:"#fff", marginRight:"2rem"
                    }}/>+91 9946******</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{
                        color:"#fff", marginRight:"2rem"
                    }}/>aathiktr@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Blah Blah Blah Blah Blah Blah Blah Blah
                Blah Blah Blah Blah Blah Blah Blah Blah
                Blah Blah Blah Blah Blah Blah Blah Blah
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{
                        color:"#fff", marginRight:"1rem"
                    }}/> 
                    <FaTwitter size={30} style={{
                        color:"#fff", marginRight:"1rem"
                    }}/> 
                    <FaLinkedin size={30} style={{
                        color:"#fff", marginRight:"1rem"
                    }}/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer