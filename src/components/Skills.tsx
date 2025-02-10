'use client';

import { IconType } from 'react-icons';
import { FaReact, FaNode, FaDocker, FaPython, FaGitAlt, FaLinux, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiC } from 'react-icons/si';
import skillsData from '../data/skills.json';

const skillIcons: Record<string, IconType> = {
    "React": FaReact,
    "TypeScript": SiTypescript,
    "Node.js": FaNode,
    "Python": FaPython,
    "C++": SiCplusplus,
    "C": SiC,
    "PHP": FaPhp,
    "Docker": FaDocker,
    "Git": FaGitAlt,
    "Linux": FaLinux
};

export default function Skills() {
    const fixedStars = Array.from({ length: 50 }, () => ({
        id: Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2
    }));

    return (
        <section id="skills" className="relative w-full min-h-[60vh] bg-black overflow-hidden">
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

            <div className="relative z-10 flex flex-col items-center justify-center py-16">
                <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                        Skills
                    </h3>
                    <p className="text-gray-400 text-sm mb-8">Technologies that I master</p>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 p-8">
                        {skillsData.map((skill, index) => {
                            const Icon = skillIcons[skill.name];
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                                >
                                    <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                                        <Icon className="w-12 h-12 md:w-20 md:h-20 text-white hover:text-blue-400 transition-colors duration-300" />
                                    </div>
                                    <span className="mt-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
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