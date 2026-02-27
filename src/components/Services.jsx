import React from 'react';
import { motion } from 'framer-motion';
import buyIcon from '../assets/buy_icon.png';
import rentIcon from '../assets/rent_icon.png';
import sellIcon from '../assets/sell_icon.png';

const Services = () => {
    const serviceCards = [
        {
            title: 'Buy',
            icon: buyIcon,
            description: 'Find your perfect home with our exclusive real estate listings. Our experts will guide you through unprecedented properties matching your exact desires.',
        },
        {
            title: 'Rent',
            icon: rentIcon,
            description: 'Discover luxury apartments and villas for rent across Dubai. Enjoy flexible terms and premium amenities tailored for your lifestyle needs.',
        },
        {
            title: 'Sell',
            icon: sellIcon,
            description: 'Maximize your property value with our elite network. We ensure a seamless selling process targeting high-net-worth individuals and global investors.',
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-grid">
                    {serviceCards.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="service-icon-wrapper"
                                initial={{ backgroundColor: "#f9f9f9" }}
                                whileHover={{ backgroundColor: "#000000" }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src={service.icon}
                                    alt={service.title}
                                    className="service-icon"
                                    whileHover={{ filter: "invert(1) brightness(100)" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            <h2 className="service-title">{service.title}</h2>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
