import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}

export default App;