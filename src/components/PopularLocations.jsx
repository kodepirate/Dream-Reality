import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const properties = [
    {
        id: 1,
        title: "Modern downtown condo with skyline view",
        location: "Austin, Texas",
        price: "$4,500",
        beds: 2,
        baths: 2,
        sqft: "1,200 sq. ft.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Luxury oceanfront apartment in resort",
        location: "Miami, Florida",
        price: "$2,900",
        beds: 3,
        baths: 2,
        sqft: "1,500 sq. ft.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Spacious family home in growing suburb",
        location: "Phoenix, Arizona",
        price: "$6,200",
        beds: 4,
        baths: 3,
        sqft: "2,200 sq. ft.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Sleek minimalist penthouse with terrace",
        location: "Los Angeles, California",
        price: "$8,500",
        beds: 3,
        baths: 3,
        sqft: "1,800 sq. ft.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const PopularLocations = () => {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);

    // Duplicate array multiple times for infinite scrolling effect
    const duplicatedProps = [...properties, ...properties, ...properties, ...properties];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const setWidth = properties.length * 410;

        setTimeout(() => {
            if (scrollContainer.scrollLeft < setWidth / 2) {
                scrollContainer.scrollLeft = setWidth;
            }
        }, 100);

        let animationFrameId;

        const autoScroll = () => {
            if (!isHovered && !isManuallyScrolling && scrollContainer) {
                scrollContainer.scrollLeft += 1;

                if (scrollContainer.scrollLeft >= setWidth * 2) {
                    scrollContainer.scrollLeft -= setWidth;
                } else if (scrollContainer.scrollLeft <= 0) {
                    scrollContainer.scrollLeft += setWidth;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered, isManuallyScrolling]);

    const handleScrollLeft = () => {
        if (scrollRef.current && !isManuallyScrolling) {
            setIsManuallyScrolling(true);
            const setWidth = properties.length * 410;

            if (scrollRef.current.scrollLeft - 410 <= 0) {
                scrollRef.current.scrollLeft += setWidth;
            }
            scrollRef.current.scrollBy({ left: -410, behavior: 'smooth' });

            setTimeout(() => {
                setIsManuallyScrolling(false);
            }, 600);
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current && !isManuallyScrolling) {
            setIsManuallyScrolling(true);
            const setWidth = properties.length * 410;

            if (scrollRef.current.scrollLeft + 410 >= setWidth * 2) {
                scrollRef.current.scrollLeft -= setWidth;
            }
            scrollRef.current.scrollBy({ left: 410, behavior: 'smooth' });

            setTimeout(() => {
                setIsManuallyScrolling(false);
            }, 600);
        }
    };

    return (
        <section className="popular-locations" ref={sectionRef} id="locations">
            <div className="container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                <motion.div
                    className="popular-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="popular-title">Discover our top<br />premium properties</h2>
                    <p className="popular-subtitle">
                        Explore our handpicked selection of premium real estate.<br />Find your perfect home and book a viewing today.
                    </p>
                </motion.div>

                <div
                    className="locations-scroll-wrapper"
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                >
                    <div className="locations-scroll-track">
                        {duplicatedProps.map((property, index) => (
                            <motion.div
                                className="location-card"
                                key={`${property.id}-${index}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <motion.div
                                    className="location-img-container"
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: (index % 4) * 0.2 }
                                    }}
                                >
                                    <img src={property.image} alt={property.title} className="location-img" width="800" height="600" style={{ objectFit: 'cover' }} loading="lazy" />
                                </motion.div>

                                <div className="location-details">
                                    <h3 className="location-card-title">{property.title}</h3>

                                    <div className="location-address">
                                        <FaMapMarkerAlt className="pin-icon" />
                                        <span>{property.location}</span>
                                    </div>

                                    <div className="location-specs">
                                        <div className="spec-item">
                                            <FaRulerCombined className="spec-icon" />
                                            <span>{property.sqft}</span>
                                        </div>
                                        <div className="spec-divider">|</div>
                                        <div className="spec-item">
                                            <FaBed className="spec-icon" />
                                            <span>{property.beds} Bed</span>
                                        </div>
                                        <div className="spec-divider">|</div>
                                        <div className="spec-item">
                                            <FaBath className="spec-icon" />
                                            <span>{property.baths} Bath</span>
                                        </div>
                                    </div>

                                    <div className="location-footer">
                                        <div className="location-price-box">
                                            <span className="price-value">{property.price}</span>
                                        </div>
                                        <motion.button
                                            className="invest-btn"
                                            whileHover={{ backgroundColor: "#000000", color: "#ffffff", borderColor: "#000000" }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book now
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="carousel-controls"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button className="carousel-btn" onClick={handleScrollLeft}>
                        <FaChevronLeft />
                    </button>
                    <button className="carousel-btn" onClick={handleScrollRight}>
                        <FaChevronRight />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PopularLocations;
