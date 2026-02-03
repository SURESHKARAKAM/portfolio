import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import { Brain, Database, Code, Cloud } from 'lucide-react';

const Expertise = () => {
    const getIcon = (category) => {
        switch (category) {
            case "Agentic AI & GenAI": return <Brain className="text-purple-400" size={32} />;
            case "Azure Data Engineering": return <Database className="text-blue-400" size={32} />;
            case "Programming & Frameworks": return <Code className="text-green-400" size={32} />;
            case "Multi-Cloud": return <Cloud className="text-orange-400" size={32} />;
            default: return <Code size={32} />;
        }
    };

    return (
        <section id="skills" className="section-padding bg-bg-secondary/30 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Expertise</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent agents and robust data platforms.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(resumeData.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-800/50 rounded-lg">
                                    {getIcon(category)}
                                </div>
                                <h3 className="text-xl font-bold">{category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-gray-800/30 border border-gray-700 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
