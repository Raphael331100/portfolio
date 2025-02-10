'use client';

import { useEffect, useState } from 'react';
import Project from "./project";
import projectsData from "../data/projects.json";

export default function Projects() {

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
        <section id="projects" className="relative w-full min-h-screen bg-black overflow-hidden">
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

            {/* Projects content */}
            <div className="relative z-10 flex w-5/6 flex-col items-center gap-8 mx-auto pt-32">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                        Projects
                    </h3>
                    <p className="text-gray-400 text-sm">Overview of my projects</p>
                </div>

                <div className="relative flex flex-col gap-12 mt- w-full max-w-8xl">

                    {/* Projects */}
                    {projectsData.map((project, index) => (
                        <Project 
                            key={index} 
                            project={project} 
                            index={index} 
                        />
                    ))}
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