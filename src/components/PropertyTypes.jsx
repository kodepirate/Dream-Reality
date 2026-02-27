import React from 'react';
import { motion } from 'framer-motion';
import apartmentIcon from '../assets/apartment_icon.png';
import villaIcon from '../assets/villa_icon.png';
import townhouseIcon from '../assets/townhouse_icon.png';
import penthouseIcon from '../assets/penthouse_icon.png';
import duplexIcon from '../assets/duplex_icon.png';

const PropertyTypes = () => {
    const propertyTypes = [
        { title: 'Apartment', icon: apartmentIcon },
        { title: 'Villa', icon: villaIcon },
        { title: 'Townhouse', icon: townhouseIcon },
        { title: 'Penthouse', icon: penthouseIcon },
        { title: 'Duplex Apartment', icon: duplexIcon }
    ];

    return (
        <section className="property-types-section">
            <div className="container">
                <div className="property-types-grid">
                    {propertyTypes.map((property, index) => (
                        <motion.div
                            className="property-type-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                opacity: { duration: 0.5, delay: index * 0.1 },
                                scale: { duration: 0.5, delay: index * 0.1 },
                                y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.2 }
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={property.icon} alt={property.title} className="property-icon" width="64" height="64" style={{ objectFit: 'contain' }} loading="lazy" />
                            <h3 className="property-title">{property.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyTypes;
