"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const cards = [
    {
        image: "/react.svg",
    },
    {
        image: "/docker.svg",
    },
    {
        image: "/html.svg",
    },
    {
        image: "/nextjs.svg",
    },
    {
        image: "/angular.svg",
    },
    {
        image: "/fastapi.svg",
    },
    {
        image: "/vuejs.svg",
    },
];

export const StackingIcons = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return cards.map(({ image }, index) => {
        const position = (index - activeIndex + cards.length) % cards.length;
        const isActive = position === 0;
        const isVisible = position < 3;
        const zIndex = cards.length - position;

        let translateY = position * -18; // Adjust the vertical spacing between images
        let opacity = 1;
        let scale = 1;
        let filter = 'none';

        if (position === cards.length - 1) {
            translateY = 20;
            opacity = 0;
        } else if (position >= 3) {
            opacity = 0;
            translateY = 20;
        } else {
            opacity = 1;
            scale = isActive ? 1 : 1 - (position * 0.2); // Adjusted scale for smaller back images
            filter = isActive ? 'none' : 'blur(1px)'; // Apply blur to non-active images
        }

        return (
            <div
                key={index}
                className="absolute transition-transform duration-500 ease-out transform-gpu"
                style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: isVisible ? opacity : 0,
                    zIndex,
                    filter,
                }}
            >
                <Image 
                    src={image} 
                    alt={`Card ${index + 1}`}
                    width={80}
                    height={80}
                />
            </div>
        );
    });
};
