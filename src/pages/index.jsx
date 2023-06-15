import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    document.querySelector("html").classList.toggle("dark");
  };

  return (
    <>
      <h1>Hello world!</h1>
      <h2 className='text-slate-500 dark:text-slate-500'>Click to toggle the Theme</h2>
      <button className='bg-slate-300 rounded-full text-white p-2 h-12 w-12 block'
        onClick={toggleDarkMode}>
        {darkMode ? "🌚" : "🌞"}
      </button>
    </>
  )
}