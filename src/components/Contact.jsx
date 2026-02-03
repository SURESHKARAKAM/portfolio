import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data';
import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-bg-tertiary pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 mb-16">

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Let's Build Something <span className="text-gradient">Intelligent</span></h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Whether you need to optimize your data pipelines or build autonomous agents, I'm ready to help you leverage the power of Azure AI.
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${resumeData.email}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                {resumeData.email}
                            </a>
                            <a href={`tel:${resumeData.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                                    <Phone size={18} />
                                </div>
                                {resumeData.phone}
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <MessageSquare className="text-primary" size={20} />
                            Send a Message
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:border-primary outline-none transition-colors" />
                                <input type="email" placeholder="Email" className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:border-primary outline-none transition-colors" />
                            </div>
                            <input type="text" placeholder="Subject" className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:border-primary outline-none transition-colors" />
                            <textarea placeholder="Message" rows={4} className="bg-gray-900 border border-gray-700 rounded-lg p-3 w-full focus:border-primary outline-none transition-colors"></textarea>
                            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-bold hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 {resumeData.name}. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href={resumeData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={resumeData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
