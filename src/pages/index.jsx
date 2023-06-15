import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [darkMode, setDarkMode] = useState(); //boolean value

    useEffect(() => {
        const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (storedDarkMode) {
            document.querySelector('html').classList.add('dark');
            setDarkMode(storedDarkMode);
        }
    }, []);

    const toggleDarkMode = () => {
        document.querySelector('html').classList.toggle('dark', !darkMode);
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    return (
        <main>
            <h1>Hello world!</h1>
            <button className='bg-slate-700 dark:bg-slate-300 rounded-full text-white place-self-center p-2 my-3 h-24 w-24 text-3xl'
                onClick={toggleDarkMode}>
                {darkMode ? "🌚" : "🌞"}
            </button>
            <h2 className='text-slate-500 dark:text-slate-500'>Click to toggle the Theme</h2>
        </main>
    )
}