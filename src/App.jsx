import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-bg-primary text-text-primary min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <div id="about" className="sr-only">About section integrated in Hero</div>
                <Expertise />
                <Experience />
                <Projects />
            </main>
            <Contact />
        </div>
    );
}

export default App;
