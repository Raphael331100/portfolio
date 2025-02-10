'use client';

import Experience from './experience';
import experiencesData from "../data/experiences.json";

interface Experience {
    id: number;
    date: string;
    title: string;
    company: string;
    description: string;
}

export default function Experiences() {
    const fixedStars = Array.from({ length: 100 }, () => ({
        id: Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2
    }));

    return (
        <section id="experiences" className="relative w-full min-h-screen bg-black overflow-hidden">
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

            {/* Experiences content */}
            <div className="relative z-10 flex w-5/6 flex-col items-center gap-8 mx-auto pt-32">
                <div className="flex flex-col items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                        Experiences
                    </h3>
                    <p className="text-gray-400 text-sm">My professional journey</p>
                </div>

                {/* Experiences timeline */}
                <div className="relative flex flex-col gap-12 mt-10 w-full max-w-4xl">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-800" />

                    {/* Experiences */}
                    {experiencesData.map((experience, index) => (
                        <Experience 
                            key={experience.id} 
                            experience={experience} 
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