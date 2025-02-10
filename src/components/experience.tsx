interface ExperienceProps {
    experience: {
        id: number;
        date: string;
        title: string;
        company: string;
        description: string;
    };
    index: number;
}

export default function Experience({ experience, index }: ExperienceProps) {
    return (
        <div className={`relative flex ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        } w-full items-center justify-center`}>
            <div className="w-1/2" />
            {/* Point central avec effet de glow */}
            <div className="absolute w-3 h-3 bg-white/20 rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)] backdrop-blur-sm">
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
            </div>

            {/* Conteneur de l'expérience */}
            <div className="w-1/2 group">
                <div className="relative bg-white/5 p-6 backdrop-blur-sm border-2 border-white/10 rounded-lg
                             hover:bg-white/10 transition-all duration-300 ease-in-out
                             hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                             before:absolute before:inset-0 before:border-l-2 before:border-white/0
                             before:transition-all before:duration-300
                             hover:before:border-white/20 hover:translate-x-1">
                    
                    <div className="space-y-4">
                        {/* En-tête avec titre et entreprise */}
                        <div className="border-b-2 border-white/10 pb-3">
                            <h4 className="text-lg font-medium text-white/90 tracking-wide">
                                {experience.title}
                            </h4>
                            <div className="flex justify-between items-center mt-1">
                                <p className="text-white/70 text-sm font-medium">
                                    {experience.company}
                                </p>
                                <p className="text-white/50 text-xs px-3 py-1.5 rounded-full border-2 border-white/10">
                                    {experience.date}
                                </p>
                            </div>
                        </div>

                        {/* Description avec effet de fade in au hover */}
                        <p className="text-white/60 text-sm leading-relaxed
                                  transform transition-all duration-300
                                  group-hover:text-white/80">
                            {experience.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}