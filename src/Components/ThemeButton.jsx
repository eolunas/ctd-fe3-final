import { useCharStates } from "../Context";

 const ThemeButton = () => {
    const { theme, toggleTheme } = useCharStates();

    return (
      <button className={`btn-theme ${theme == 'light' ? "btn-light" : "btn-dark"}`} 
                onClick={toggleTheme} >
        {theme === 'light' ? '🌞' : '🌑'}
      </button>
    );
}

export default ThemeButton;