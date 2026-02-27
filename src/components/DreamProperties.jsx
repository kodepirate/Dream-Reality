import React from 'react';
import { motion } from 'framer-motion';
import skyscraperImg from '../assets/dubai_skyscraper.png';
import domesImg from '../assets/dubai_white_domes.png';
import futuristicImg from '../assets/dubai_futuristic.png';

const DreamProperties = () => {
    return (
        <section className="dream-properties-section" id="dream-properties">
            <div className="container">
                <div className="dream-properties-content">
                    {/* Left Side: Text */}
                    <motion.div
                        className="dream-properties-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="dream-title">
                            We Help Find Your <br />
                            <span className="highlight-text">Dream Properties</span>
                        </h2>
                        <p className="dream-description">
                            Real Estate agents are property consisting of land and the buildings on it, along with its natural resources such as crops, minerals, or water.
                        </p>
                        <motion.button
                            className="dream-contact-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact us
                        </motion.button>
                    </motion.div>

                    {/* Right Side: Masonry Images */}
                    <div className="dream-properties-images">
                        <motion.div
                            className="dream-img-wrapper tall-img"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                opacity: { duration: 0.7, delay: 0.2 },
                                scale: { duration: 0.7, delay: 0.2 },
                                y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2 }
                            }}
                            whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        >
                            <img src={skyscraperImg} alt="Luxury Skyscraper" width="800" height="1000" style={{ objectFit: 'cover' }} loading="lazy" />
                            <div className="tall-img-overlay"></div>
                            <motion.div
                                className="glass-badge"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="badge-stars">★★★★★</div>
                                <div className="badge-title">Premium Quality</div>
                            </motion.div>
                        </motion.div>

                        <div className="right-imgs-column">
                            <motion.div
                                className="dream-img-wrapper top-right-img"
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                animate={{ y: [0, -12, 0] }}
                                transition={{
                                    opacity: { duration: 0.7, delay: 0.4 },
                                    scale: { duration: 0.7, delay: 0.4 },
                                    y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }
                                }}
                                whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            >
                                <img src={domesImg} alt="White Domes Villa" width="800" height="600" style={{ objectFit: 'cover' }} loading="lazy" />
                            </motion.div>

                            <motion.div
                                className="dream-img-wrapper bottom-right-img"
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    opacity: { duration: 0.7, delay: 0.6 },
                                    scale: { duration: 0.7, delay: 0.6 },
                                    y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }
                                }}
                                whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            >
                                <img src={futuristicImg} alt="Futuristic Building" width="800" height="600" style={{ objectFit: 'cover' }} loading="lazy" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DreamProperties;
