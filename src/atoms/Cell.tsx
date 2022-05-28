import useTheme from "hooks/useTheme";
import { useEffect, useState } from "react";

type CellProps = {
    initial: boolean;
    key: number;
    index: number;
}

const Cell = ({ key, index, initial = false } : CellProps) => {
    const [ active, setActive ] = useState(initial);

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 500*index);
    return () => {
        setTimeout(() => {
            setActive(false)
        }, 500*index)
    };
    }, [index, active, setActive])

    const { theme } = useTheme();
    return (
        <div className={`box-border h-5 w-5 mx-1 my-1 rounded-sm border-2 ${active ? theme['cell-a-color'] : theme['cell-p-color']} ${theme['border-p-color']}`} />
    );
}

export default Cell;