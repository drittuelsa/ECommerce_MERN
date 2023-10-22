import React from "react";
import Logo from './logo1.png';
import {GoLocation} from 'react-icons/go';
import {BsTelephone, BsFacebook,BsTwitter,BsYoutube} from 'react-icons/bs';
import {BiLogoLinkedin} from 'react-icons/bi';
import {FiMail} from 'react-icons/fi';
import Google from './Google.png';
import Apple from './apple.png';
 

export function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container">
                <div className="row d-flex items">
                    
                <div className="col-md-6 col-lg-3 ">
                        <img src={Logo} alt="" width={100}  height={100}/> 
                        <h4 className="logo1">SkinCare</h4>
                        
                    </div>
                    <div className="col-md-6 col-lg-2 ">
                        <h5>Pages</h5>
                        <ul className="list">
                        <li><a href="/about"><p>About</p></a></li>
                        <li><a href="/"><p>Our Expertise</p></a></li>  
                        <li><a href="/"><p>Testimonals</p></a></li>
                        <li> <a href="/"><p>Skin & Hair</p></a></li>
                        <li><a href="/"><p>Shop</p></a></li>
                        </ul>           
                    </div>

                    <div className="col-md-6  col-lg-2  ">
                        <h5>Legal and Help</h5>
                        <ul className="list">
                            <li>FAQs</li>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>

                    <div className="col-md-6  col-lg-2 ">
                        <h5>Contact us</h5>
                        <p><GoLocation/>  Address</p>
                        <p><BsTelephone/> Phone numbers</p>
                        <p><FiMail/> Mail id</p>
                    </div>

                    <div className="col-md-6  col-lg-2 ">
                        <h5>Social Links</h5>
                        <span className="icons"><BsFacebook/></span><span className="icons"> <BsTwitter/> </span>
                        <span className="icons"><BiLogoLinkedin/> </span><span className="icons"><BsYoutube/></span>
                        <p className="mt-3"><img src={Google} alt="" width={135}  height={40} /></p>
                        <p className="mt-2"><img src={Apple} alt="" width={135}  height={40} /></p>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}