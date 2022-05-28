import { Cell } from "atoms";
import { useContext } from "react";
import TableTemplate from "template/TableTemplate";
import { ThemeContext } from "themes/ThemeProvider";

const Number_of_Cells = 9;

const LaunchScreen = () => {
    const { theme }  = useContext(ThemeContext);
    const CELLS = [...Array(Number_of_Cells).keys()];

    return(
        <div className={`flex justify-center items-center w-screen h-screen ${theme["bg-p-color"]} ${theme["bg-p-fontColor"]}`} >
            <TableTemplate>
                    {
                        CELLS.map((number) =>
                        <Cell key={number} index={number} initial={false}/>
                        )
                    }
            </TableTemplate>
        </div>
    );
};

export default LaunchScreen;