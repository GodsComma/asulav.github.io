import useTheme from "hooks/useTheme";
import { useEffect, useState } from "react";
import { DELAY_TIME } from "constant";

type CellProps = {
    index: number;
}


const Cell = ({ index } : CellProps) => {
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, Math.floor(DELAY_TIME)*index);
    }, [index, active, setActive])

    const { theme } = useTheme();
    return (
        <div className={`box-border h-10 w-10 mx-2 my-2 rounded-sm border-4 ${active ? theme['cell-a-color'] : theme['cell-p-color']} ${theme['border-p-color']} ${ active ? 'scale-125' : 'scale-100'}`} />
    );
}

export default Cell;