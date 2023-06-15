# Dark Theme Template

![Alt text](public/image.png)

## 🔥 Features
- Dark toggle class html with Tailwind (https://tailwindcss.com/docs/dark-mode)
- Local Storage with just one useEffectd


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
