import React, { useEffect } from 'react'
import './index.css'

export default function ImageParallax() {
    useEffect(() => {
        const parallax = document.querySelector('.parallax');
        const image = document.querySelector('.parallax img');

        const handleParallax = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const yPos = scrollTop / parallax.dataset.speed;

            image.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        };

        window.addEventListener('scroll', handleParallax);

        return () => {
            window.removeEventListener('scroll', handleParallax);
        };
    }, []);

    return (
        <div className="parallax" data-speed="2">
            <img src='/Images/2.jpg' alt="Parallax Image" />
        </div>
    )
}
