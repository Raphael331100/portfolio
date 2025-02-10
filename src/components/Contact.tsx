'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Contact() {
  const fixedStars = Array.from({ length: 50 }, () => ({
    id: Math.random(),
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2
  }));

  return (
    <section id="contact" className="relative w-full min-h-[40vh] bg-black overflow-hidden">
      {/* Fixed stars */}
      {fixedStars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            animation: 'twinkle 1s infinite alternate'
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full py-16">
        <div className="flex flex-col items-center gap-8">
          <h3 className="text-2xl font-semibold text-white">
            Contact
          </h3>
          <div className="flex flex-col gap-6">
            <a 
              href="mailto:raphael.fouche@epitech.eu"
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
              <span>raphael.fouche@epitech.eu</span>
            </a>
            <a 
              href="https://github.com/Raphael331100" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/raphael-fouche-641510272/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}