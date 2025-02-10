interface ProjectProps {
    project: {
        title: string;
        description: string;
        technologies: string[];
        github: string;
        demo: string;
    };
    index: number;
}

export default function Project({ project, index }: ProjectProps) {
    return (
        <div className="flex justify-center w-full">
            {/* Conteneur du projet */}
            <div className="w-full max-w-5xl group">
                <div className="relative bg-white/5 p-8 backdrop-blur-sm border-2 border-white/10 rounded-xl
                             hover:bg-white/10 transition-all duration-300 ease-in-out
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                             before:absolute before:inset-0 before:border-l-2 before:border-white/0
                             before:transition-all before:duration-300
                             hover:before:border-white/20 hover:translate-x-1">
                    
                    <div className="space-y-4">
                        {/* En-tête avec titre */}
                        <div className="border-b-2 border-white/10 pb-3">
                            <h4 className="text-lg font-medium text-white/90 tracking-wide">
                                {project.title}
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed mt-2">
                                {project.description}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} 
                                      className="text-white/50 text-xs px-3 py-1.5 
                                               rounded-full border-2 border-white/10 
                                               group-hover:border-white/20 transition-colors duration-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Liens */}
                        <div className="flex gap-4 pt-2">
                            <a href={project.github} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="text-white/60 hover:text-white/90 transition-colors duration-300">
                                GitHub
                            </a>
                            <a href={project.demo} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="text-white/60 hover:text-white/90 transition-colors duration-300">
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}