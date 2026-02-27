import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.tagName === 'A' || e.target.closest('a') || e.target.closest('.footer-socials a')) {
                setCursorType('button');
            } else if (e.target.closest('.service-icon') || e.target.closest('.service-icon-wrapper') || e.target.closest('.property-icon') || e.target.closest('.location-img') || e.target.closest('.footer-logo img')) {
                setCursorType('image');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            backgroundColor: "transparent",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            height: 20,
            width: 20,
            mixBlendMode: "difference",
            transition: { type: "tween", ease: "backOut", duration: 0.1 }
        },
        image: {
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            height: 50,
            width: 50,
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "none",
            mixBlendMode: "difference",
            transition: { type: "tween", ease: "backOut", duration: 0.1 }
        },
        button: {
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            height: 50,
            width: 50,
            backgroundColor: "rgba(255, 255, 255, 0.45)", // Semi-transparent pure white
            border: "1px solid rgba(255, 255, 255, 1)",
            mixBlendMode: "normal", // No difference blending, literal white color
            backdropFilter: "blur(2px)",
            transition: { type: "tween", ease: "backOut", duration: 0.1 }
        }
    };

    return (
        <motion.div
            className="custom-cursor hidden-mobile"
            variants={variants}
            animate={cursorType}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                borderRadius: "50%",
                zIndex: 99999
            }}
        />
    );
};

export default CustomCursor;
