import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <section id="hero">
                <Hero />
            </section>
            <section id="courses">
                <Courses />
            </section>
            <section id="reviews">
                <Reviews />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;
