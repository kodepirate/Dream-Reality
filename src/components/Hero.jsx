import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { BsArrowDownCircle } from 'react-icons/bs';
import bgImage from '../assets/hero_bg_real_estate.png';
import logoImage from '../assets/dubai_dream_reality_new_logo_transparent.png';

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Explicitly track window scrolling to avoid flex/overflow container bugs
    const { scrollY } = useScroll({ container: window });

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
            if (latest > aboutBottom - 50) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }
    });

    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const logoOpacity = useTransform(scrollY, [0, 100], [0.5, 1]);

    const scrollToNext = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-container" id="hero">
            {/* Background Image with Overlay */}
            <motion.div
                className="hero-background"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    opacity: opacity
                }}
            >
                <div className="hero-overlay"></div>
            </motion.div>

            {/* Navbar Overlay */}
            <header className={`hero-navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden-navbar' : ''}`}>
                <div className="navbar-container">
                    <motion.div className="logo" style={{ opacity: logoOpacity }}>
                        <img src={logoImage} alt="Dubai Dream Realty" width="160" height="50" style={{ objectFit: 'contain' }} loading="eager" />
                    </motion.div>
                    <nav className="nav-links">
                        <a href="#hero">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#developers">Developers</a>
                        <a href="#locations">Locations</a>
                        <a href="#contact">Contact Us</a>
                    </nav>
                    <div className="right-section">
                        <button className="contact-btn hidden-mobile" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get in touch</button>
                        <div
                            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
                            onClick={toggleMobileMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="mobile-menu-close" onClick={toggleMobileMenu}>
                            &times;
                        </div>
                        <nav className="mobile-nav-links">
                            <a href="#hero" onClick={toggleMobileMenu}>Home</a>
                            <a href="#about" onClick={toggleMobileMenu}>About Us</a>
                            <a href="#developers" onClick={toggleMobileMenu}>Developers</a>
                            <a href="#locations" onClick={toggleMobileMenu}>Locations</a>
                            <a href="#contact" onClick={toggleMobileMenu}>Contact Us</a>
                        </nav>
                        <div className="mobile-menu-footer">
                            <button className="contact-btn" onClick={() => { toggleMobileMenu(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Get in touch</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Content */}
            <div className="hero-content">
                <motion.div
                    className="hero-text-box"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="hero-title">Find Your Dream Realty in Dubai</h1>
                    <p className="hero-subtitle">
                        We actively engage in initiatives that contribute to the betterment of the local community, <br className="hidden-mobile" />
                        creating a positive impact beyond real estate transactions.
                    </p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button className="btn-primary" onClick={scrollToNext}>Explore Properties</button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Fluent Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                onClick={scrollToNext}
            >
                <BsArrowDownCircle size={40} className="scroll-icon" />
            </motion.div>
        </section>
    );
};

export default Hero;
