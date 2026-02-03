import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, Mail, Linkedin, Github } from 'lucide-react';
import { resumeData } from '../data';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
            {/* Subtle background gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/3 via-transparent to-purple-600/3"></div>
            <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for New Opportunities
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{resumeData.name}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium"
                    >
                        {resumeData.title}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        {resumeData.summary}
                    </motion.p>

                    {/* Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-blue-400" />
                            <span>Hyderabad, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Briefcase size={16} className="text-purple-400" />
                            <span>Accenture</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-green-400" />
                            <a href={`mailto:${resumeData.email}`} className="hover:text-white transition-colors">{resumeData.email}</a>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2 group"
                        >
                            View My Work
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-gray-700 rounded-lg text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center gap-6"
                    >
                        <a
                            href={resumeData.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800/50 rounded-lg hover:bg-blue-600 transition-colors group"
                        >
                            <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href={resumeData.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors group"
                        >
                            <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-3 bg-blue-500 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
