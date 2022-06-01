import useTheme from "hooks/useTheme";

interface DropdownProps {
    children?: any;
}

const DropdownHeader = ({ children }: DropdownProps) => {
    return (
        <label className=" my-2 text-lg semibold "> { children }</label>
    );
}

const DropdownGroup = ({ children }: DropdownProps) => {
    return (
        <optgroup  className=" my-2 text-lg semibold border-4 border-black">
                { children }
        </optgroup>
    );
}



const Dropdown = ( { children }: DropdownProps) =>  {
    const { theme }  = useTheme();

    return(
    <div>
        <select className={` ${theme['button-p-hover']} ${theme['bg-p-color']} cursor-pointer inline-flex rounded-md px-4 py-2 border-stone-800 border-1 shadow shadow-black items-center`}>
            { children } 
        </select>
    </div>
    );
};

Dropdown.Header = DropdownHeader;
Dropdown.Group = DropdownGroup;

export default Dropdown;