const usechangeTheme = (theme, setTheme) => {
    const newTheme = theme === "light"? "dark": "light";

    setTheme(newTheme);

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );
}

export default usechangeTheme;