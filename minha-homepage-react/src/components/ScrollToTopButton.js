import React, { useState, useEffect } from 'react';
import '../css/base.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
            className="scroll-top-button"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
}

export default ScrollToTopButton;