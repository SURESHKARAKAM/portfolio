import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';

const Expertise = () => {
    // Tech stack with logos from CDN
    const techLogos = {
        "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        "GCP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    };

    const categories = [
        { title: "Agentic AI & GenAI", color: "from-purple-500 to-pink-500", icon: "🤖" },
        { title: "Azure Data Engineering", color: "from-blue-500 to-cyan-500", icon: "☁️" },
        { title: "Programming & Frameworks", color: "from-green-500 to-emerald-500", icon: "💻" },
        { title: "Multi-Cloud", color: "from-orange-500 to-amber-500", icon: "🌐" },
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Specialized in AI agents, cloud data engineering, and modern full-stack development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {categories.map((category, index) => {
                        const skills = resumeData.skills[category.title] || [];
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all group"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl">{category.icon}</span>
                                    <h3 className="text-xl font-bold text-gray-200">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Stack Logos - SMALLER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
                >
                    <h3 className="text-lg font-semibold text-center mb-6 text-gray-300">Core Technologies</h3>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {Object.entries(techLogos).map(([name, logo]) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex flex-col items-center gap-1.5 group cursor-pointer"
                            >
                                <div className="w-10 h-10 bg-gray-900/50 rounded-lg p-2 flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-all">
                                    <img src={logo} alt={name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                                </div>
                                <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors text-center max-w-[60px] leading-tight">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
