import React from 'react';
import './Partners.css';

const partners = [
    "DAMAC", "EMAAR", "NAKHEEL", "SOBHA", "MERAAS", "OMNIYAT",
    "AZIZI", "BINGHATTI", "DAR AL ARKAN", "DANUBE"
];

const Partners = () => {
    return (
        <section className="partners-section">
            <div className="partners-container">
                <h2 className="partners-title">Our valued partners</h2>

                <div className="partners-slider">
                    <div className="partners-track">
                        {/* First set of partners */}
                        {partners.map((partner, index) => (
                            <div className="partner-logo" key={`partner-1-${index}`}>
                                <span>{partner}</span>
                            </div>
                        ))}

                        {/* Duplicated set for infinite scroll effect */}
                        {partners.map((partner, index) => (
                            <div className="partner-logo" key={`partner-2-${index}`}>
                                <span>{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
