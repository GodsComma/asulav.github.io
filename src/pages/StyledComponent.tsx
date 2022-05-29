import Toggle from "atoms/Toggle";
import React, { useContext, useState } from "react";
import { ThemeContext } from "themes/ThemeProvider";

type ThemedComponentsProps = {
    children: React.ReactNode;
};

const ThemedComponents = ( { children }: ThemedComponentsProps ) => {
    const { theme, updateTheme }  = useContext(ThemeContext);
    const [ currentTheme, setCurrentTheme ] = useState(false);

    const setTheme = (value: boolean) => {
        setCurrentTheme(value);
        currentTheme ? updateTheme('DARK') : updateTheme('LIGHT');
    }

    return(
        <div className={`${theme["bg-p-color"]} ${theme["bg-p-fontColor"]} w-full h-full`}>
            <div className="w-1/2 h-1/2">
                <Toggle status={currentTheme} label="TestLabel" setTheme={setTheme} />
            </div>
            { children }
        </div>
    );
}

export default ThemedComponents;