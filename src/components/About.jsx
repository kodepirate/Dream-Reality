import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="container text-center"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="about-title">Welcome To Dubai Reality</h1>
                <h2 className="about-subtitle">Where Your Dreams Find a Home</h2>

                <p className="description">
                    Dubai Dream Reality, established in 2023, is a premier real estate company based in the heart of Dubai, United Arab Emirates.
                    <br />Committed to excellence, we specialize in unparalleled real estate services to individuals and businesses seeking their
                    dream properties in this vibrant cosmopolitan city.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
