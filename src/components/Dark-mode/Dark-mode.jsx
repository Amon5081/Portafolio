import { useState, useEffect } from "react";

function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Obtener la preferencia del usuario almacenada (si existe)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        // Almacenar la preferencia del usuario
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        // Aplicar la clase al body
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const handleThemeChange = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <>
            <label
                htmlFor="themeToggle"
                className="themeToggle st-sunMoonThemeToggleBtn"
                type="checkbox"
            >
                <input
                    type="checkbox"
                    id="themeToggle"
                    className="themeToggleInput"
                    checked={isDarkMode}
                    onChange={handleThemeChange}
                />
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="none"
                >
                    <mask id="moon-mask">
                        <rect x="0" y="0" width="20" height="20" fill="white"></rect>
                        <circle cx="11" cy="3" r="8" fill="black"></circle>
                    </mask>
                    <circle
                        className="sunMoon"
                        cx="10"
                        cy="10"
                        r="8"
                        mask="url(#moon-mask)"
                    ></circle>
                    <g>
                        <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5"></circle>
                        <circle className="sunRay sunRay2" cx="14" cy="16.928" r="1.5"></circle>
                        <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5"></circle>
                        <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5"></circle>
                        <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5"></circle>
                        <circle className="sunRay sunRay6" cx="14" cy="3.1718" r="1.5"></circle>
                    </g>
                </svg>
            </label>
        </>
    );
}

export default Darkmode;
