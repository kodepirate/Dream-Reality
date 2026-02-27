import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/dubai_dream_reality_new_logo_transparent.png';
import './Loader.css';

const Loader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [setLoading]);

    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="loader-content">
                <motion.img
                    src={logo}
                    alt="Dubai Dream Reality"
                    className="loader-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.05, 1],
                        opacity: [0, 1, 1],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        times: [0, 0.6, 1]
                    }}
                />
                <motion.div
                    className="loading-bar-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.div
                        className="loading-bar-fill"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
