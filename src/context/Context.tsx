import React, { createContext, useState, useEffect } from "react";

type ContextType = {
    theme: string ;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextType | undefined>(undefined);

export default function ContextProvider ({children}: React.PropsWithChildren) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") != "dark" ? "light" : "dark"
    );

    useEffect(()=> {
        const root = window.document.documentElement;
        
        const removeOldTheme = theme === "dark" ? "light" : "dark";

        root.classList.add(removeOldTheme);
        root.classList.remove(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Context.Provider value={{theme, setTheme}}>
            {children}
        </Context.Provider>
    );
}