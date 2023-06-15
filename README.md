# Dark Theme Template

![Alt text](public/image.png)
<a href="https://dark-theme-template-three.vercel.app">Site Preview</a>

## Description
This template uses a class directive to toggle dark mode theme with Tailwind CSS.
like this...</br>
<code>className="bg-white dark:bg-black"</code></br>
https://tailwindcss.com/docs/dark-mode

## 🔥 Features
- Dark toggle class html with Tailwind
- Local Storage with just one useEffect


## Example

>page.jsx
<pre  lang="javascript">
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
</pre>

<pre  lang="javascript">
    onClick={toggleDarkMode}>
    //...
    {darkMode ? "🌚" : "🌞"}
</pre>
