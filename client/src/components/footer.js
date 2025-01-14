import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} FavoriteColors. All rights reserved.</p>
            <p>
                Have questions? <a href="/contact">Contact us</a>
            </p>
        </footer>
    );
};

export default Footer;
