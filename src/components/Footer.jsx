import React from 'react';
import './Footer.css';
import logo from '../assets/dubai_dream_reality_new_logo_transparent.png';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsGeoAlt, BsTelephone, BsEnvelope } from 'react-icons/bs';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content">

                    {/* Brand Column */}
                    <div className="footer-column brand-column">
                        <div className="footer-logo">
                            <img src={logo} alt="Dubai Dream Reality Logo" loading="lazy" />
                        </div>
                        <p className="footer-description">
                            Elevating the standard of luxury living in Dubai. We help you find
                            not just a property, but a place where your dreams reside.
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><BsFacebook size={18} /></a>
                            <a href="#" aria-label="Instagram"><BsInstagram size={18} /></a>
                            <a href="#" aria-label="LinkedIn"><BsLinkedin size={18} /></a>
                            <a href="#" aria-label="Twitter"><BsTwitterX size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Property Sales</a></li>
                            <li><a href="#">Property Rentals</a></li>
                            <li><a href="#">Property Management</a></li>
                            <li><a href="#">Investment Consulting</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-column contact-column">
                        <h4 className="footer-heading">Get in Touch</h4>
                        <ul className="footer-contact-info">
                            <li>
                                <BsGeoAlt className="footer-contact-icon" />
                                <span>Downtown Dubai, UAE</span>
                            </li>
                            <li>
                                <BsTelephone className="footer-contact-icon" />
                                <span>+971 50 123 4567</span>
                            </li>
                            <li>
                                <BsEnvelope className="footer-contact-icon" />
                                <span>contact@dubaireality.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Dubai Dream Reality. All Rights Reserved.</p>
                        <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#666666' }}>Made by aniket0fficial</p>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
