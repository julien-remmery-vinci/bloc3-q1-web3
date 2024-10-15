import { ThemeContext } from "contexts/themeContext";
import { useContext } from "react";
import "./Footer.css";

const Footer = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <footer>
            <p>Footer</p>
            <button onClick={toggleTheme}>Toggle theme</button>
        </footer>
    )
}

export default Footer