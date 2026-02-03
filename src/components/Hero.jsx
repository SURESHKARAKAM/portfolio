import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Bot, Cpu } from 'lucide-react';
import { resumeData } from '../data';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/5 text-primary text-sm font-medium">
                        Available for New Projects
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building the Future with <br />
                        <span className="text-gradient">Agentic AI</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        I architect autonomous AI agents and scalable data pipelines on Azure to solve complex enterprise challenges.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-700 text-white hover:border-primary hover:text-primary transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full h-[500px] bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 flex flex-col justify-between glass-card hover:border-primary/50 transition-colors duration-500">
                        {/* Mock Terminal/Dashboard UI */}
                        <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-auto text-xs text-gray-500">agent_orchestrator.py</span>
                        </div>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-3 text-gray-400">
                                <span className="text-green-400">➜</span>
                                <span>Initializing Azure OpenAI Client...</span>
                            </div>
                            <div className="flex gap-3 text-gray-400">
                                <span className="text-green-400">➜</span>
                                <span>Connecting to Vector Store (Unity Catalog)...</span>
                            </div>
                            <div className="flex gap-3 text-gray-400">
                                <span className="text-green-400">✓</span>
                                <span className="text-white">Agent memory loaded.</span>
                            </div>
                            <div className="flex gap-3 text-gray-400">
                                <span className="text-blue-400">ℹ</span>
                                <span>Reasoning engine started. Detected intent: </span>
                                <span className="text-primary">"Optimize Pipeline"</span>
                            </div>

                            <div className="mt-8 p-4 bg-gray-900/50 rounded border border-gray-800">
                                <div className="flex items-center gap-3 mb-2">
                                    <Bot className="text-purple-400" size={18} />
                                    <span className="text-purple-400 font-bold">Orchestrator Agent</span>
                                </div>
                                <p className="text-gray-300">Analyzing data lineage... An 40% efficiency gain is possible by optimizing the Silver-to-Gold transformation using broadcast joins.</p>
                            </div>
                        </div>

                        <div className="mt-auto flex justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
                            <div className="flex items-center gap-2">
                                <Database size={14} /> Azure Data Lake
                            </div>
                            <div className="flex items-center gap-2">
                                <Cpu size={14} /> GPT-4o
                            </div>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute -top-10 -right-10 w-20 h-20 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center z-20 shadow-2xl"
                    >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-10 h-10" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                        className="absolute -bottom-10 -left-10 w-20 h-20 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center z-20 shadow-2xl"
                    >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
