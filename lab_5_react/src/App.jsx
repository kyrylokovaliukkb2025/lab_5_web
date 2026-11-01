import { useEffect, useState } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне перемикання: 07:00–21:00 — світла, інакше темна
    useEffect(() => {
        const hours = new Date().getHours();
        setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
    }, []);

    // Застосування теми: клас .dark на <html>
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans transition-colors duration-300 dark:bg-slate-900 dark:text-slate-200">
            <Header theme={theme} onToggleTheme={toggleTheme} />
            <main className="max-w-5xl mx-auto px-5 my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Contacts />
                <Education />
                <Skills />
                <Experience />
                <Reviews />
            </main>
            <Footer />
            <ContactForm />
        </div>
    );
}

export default App;
