import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2" />

                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="hidden md:block md:w-1/2" />

                            {/* Icon */}
                            <div className="absolute left-[4px] md:left-1/2 top-0 w-8 h-8 rounded-full bg-bg-primary border-2 border-primary z-10 flex items-center justify-center transform md:-translate-x-1/2">
                                <Briefcase size={14} className="text-primary" />
                            </div>

                            {/* Content */}
                            <div className="pl-12 md:pl-0 md:w-1/2">
                                <div className={`p-6 glass-card rounded-xl border border-gray-800 relative group hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                                        <span className="text-primary">{exp.company}</span>
                                        <span>{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex gap-2">
                                                <span className="text-primary mt-1.5">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
