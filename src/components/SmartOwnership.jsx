import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SmartOwnership = () => {
    // The main container that triggers the scroll sequence. We give it a large height 
    // (e.g., 300vh) so there's plenty of scroll room while the content sticks.
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const leftX = useTransform(scrollYProgress, [0, 0.4], ["-110%", "0%"]);
    const rightX = useTransform(scrollYProgress, [0, 0.4], ["110%", "0%"]);

    const sideTextOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

    const mergedTextOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

    const buttonOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const buttonY = useTransform(scrollYProgress, [0.6, 0.7], [20, 0]);

    return (
        <section className="smart-ownership-section" ref={containerRef}>
            {/* The sticky container holds the animated elements in place while scrolling the outer section */}
            <div className="sticky-animation-wrapper">

                <h2 className="smart-ownership-title">Path to Smart Ownership</h2>

                <div className="circles-container">

                    {/* Background Central Circle (always fixed, contains final text) */}
                    <div className="circle center-circle">
                        <motion.div
                            className="final-text-wrapper"
                            style={{ opacity: finalTextOpacity }}
                        >
                            <span className="smart-ownership-text">Smart<br />Ownership</span>
                        </motion.div>

                        {/* Middle circle initial text fades out */}
                        <motion.div
                            className="initial-text-wrapper"
                            style={{ opacity: initialTextOpacity }}
                        >
                            <span className="circle-text">5 years installment,<br />0% overpayment</span>
                        </motion.div>
                    </div>

                    {/* Left Animated Circle */}
                    <motion.div
                        className="circle sliding-circle"
                        style={{ x: leftX }}
                    >
                        <motion.div
                            className="initial-text-wrapper"
                            style={{ opacity: initialTextOpacity }}
                        >
                            <span className="circle-text">10% Initial<br />Payment</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Animated Circle */}
                    <motion.div
                        className="circle sliding-circle"
                        style={{ x: rightX }}
                    >
                        <motion.div
                            className="initial-text-wrapper"
                            style={{ opacity: initialTextOpacity }}
                        >
                            <span className="circle-text">Rental income ~ 15%</span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="catalog-button-wrapper"
                    style={{ opacity: buttonOpacity, y: buttonY }}
                >
                    <button className="download-catalog-btn">
                        Get Catalog
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default SmartOwnership;
