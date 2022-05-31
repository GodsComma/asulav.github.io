import { Dropdown } from "atoms/Dropdown";
import Toggle from "atoms/Toggle";
import React, { useContext, useState } from "react";
import { ThemeContext } from "themes/ThemeProvider";

type ThemedComponentsProps = {
    children: React.ReactNode;
};

const ThemedComponents = ( { children }: ThemedComponentsProps ) => {
    const { theme, updateTheme }  = useContext(ThemeContext);
    const [ currentTheme, setCurrentTheme ] = useState(false);
    const [ toggleLabel, setToggleLabel ] = useState('DarkMode');

    const setTheme = (value: boolean) => {
        setCurrentTheme(value);
        currentTheme ? updateTheme('DARK') : updateTheme('LIGHT');
        currentTheme ? setToggleLabel('DarkMode') : setToggleLabel('LightMode')
    }

    return(
        <div className={`${theme["bg-p-color"]} ${theme["p-fontColor"]} w-full h-full `}>
            <div className="w-1/2 h-1/2">
                <Toggle status={currentTheme} label={toggleLabel} setTheme={setTheme} />
                <Dropdown />
            </div>
            { children }
        </div>
    );
}

export default ThemedComponents;