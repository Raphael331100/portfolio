'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function About() {
  const fixedStars = Array.from({ length: 100 }, () => ({
    id: Math.random(),
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2
  }));

  const [shootingStars, setShootingStars] = useState<Array<{ id: number; top: number; delay: number }>>([]);

  useEffect(() => {
    const createShootingStar = () => ({
      id: Math.random(),
      top: Math.random() * 100,
      delay: Math.random() * 2
    });

    setShootingStars(Array.from({ length: 3 }, () => createShootingStar()));

    const interval = setInterval(() => {
      setShootingStars(Array.from({ length: 3 }, () => createShootingStar()));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen bg-black overflow-hidden">
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

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-2 h-[1px] bg-white"
          style={{
            top: `${star.top}%`,
            left: '-5%',
            animation: `shootingStarHorizontal 2s linear infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 4px #ffffff'
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex w-full min-h-screen flex-col items-center justify-center gap-20 md:flex-row-reverse">
        <div className="flex items-center justify-center md:w-1/3">
          <div className="w-3/6 md:h-2/5 md:w-3/5 relative group">
            <Image 
              src="/images/cat.png" 
              alt="Profile picture" 
              width={400}
              height={400}
              className="hidden border-8 border-transparent shadow-mlight dark:shadow-mdark md:block rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute invisible group-hover:visible bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-lg shadow-lg -top-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
              Meow
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 rotate-45"></div>
            </div>
            <Image 
              src="/images/cat.png" 
              alt="Profile picture" 
              width={400}
              height={400}
              className="border-8 border-transparent shadow-mlightphone dark:shadow-mdarkphone md:hidden rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-12 px-10 md:w-2/3 md:pl-24 text-white">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold md:text-6xl">Hi, I&apos;m Raphaël</h2>
            <p className="text-sm text-gray-300 md:text-base">
            I&apos;m a 20-year-old junior developer studying at Epitech Bordeaux, currently enrolled in their Grande École program. <br />
              With 5 years of experience in computer science, I&apos;m passionate about cybersecurity and the blockchain ecosystem.
            </p>
          </div>
          
          <div className="flex flex-col gap-2 text-gray-200">
            <div className="flex gap-2 items-center">
              <IoLocationSharp className="w-6 h-6" />
              <p>Bordeaux, France</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="relative flex h-3 w-3 mx-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-700 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-700"></span>
              </span>
              <p>
                Student at <a href="https://www.epitech.eu" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-100 underline hover:text-gray-300">Epitech</a>
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-white">
            <a href="https://github.com/votre-github" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/votre-linkedin" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn profile">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }

        @keyframes shootingStarHorizontal {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(2000px) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}