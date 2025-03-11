"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const cards = [
  {
    image: "./dockapilogo.svg",
    label: 'Code Quality'
  },
  {
    image: "./dockapilogo.svg",
    label: 'Problem Solving'
  },
  {
    image: "./dockapilogo.svg",
    label: 'Data Science'
  },
  {
    image: "./dockapilogo.svg",
    label: 'Cybersecurity'
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

  return (
    <div className="relative h-[400px] w-[300px]">
      {cards.map(({ image, label }, index) => {
        const position = (index - activeIndex + cards.length) % cards.length;
        const isActive = position === 0;
        const isVisible = position < 3;
        const zIndex = cards.length - position;
        
        let translateY = position * 40;
        let opacity = 1;
        let scale = 1;
        
        if (position === cards.length - 1) {
          translateY = -80;
          opacity = 0;
        } else if (position >= 3) {
          opacity = 0;
          translateY = 160;
        } else {
          opacity = 1 - (position * 0.2);
          scale = isActive ? 1 : 1 - (position * 0.05);
        }

        return (
          <div
            key={index}
            className="absolute left-0 top-0 w-full transition-all duration-700 ease-in-out"
            style={{
              transform: `translateY(${translateY}px)`,
              opacity: isVisible ? opacity : 0,
              zIndex,
            }}
          >
            <div
              className="rounded-2xl shadow-lg transition-all duration-700 aspect-square flex flex-col items-center justify-center overflow-hidden"
              style={{ 
                transform: `
                  perspective(1000px) 
                  rotateX(${position * 3}deg)
                  scale(${scale})
                `,
                transformOrigin: 'center center',
              }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={image} 
                  alt={label}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                >
                  <span className="text-white font-medium text-xl">{label}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};