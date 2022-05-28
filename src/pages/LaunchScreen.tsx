import { Cell } from "atoms";
import { NUMBER_OF_CELLS } from "constant";
import { useContext } from "react";
import TableTemplate from "template/TableTemplate";
import { ThemeContext } from "themes/ThemeProvider";

const LaunchScreen = () => {
    const { theme }  = useContext(ThemeContext);
    const CELLS = [...Array(NUMBER_OF_CELLS).keys()];

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