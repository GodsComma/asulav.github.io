import { Cell } from "atoms";
import { NUMBER_OF_CELLS } from "constant";
import { useContext } from "react";
import { ThemeContext } from "themes/ThemeProvider";
import TableTemplate from "template/TableTemplate";

const LaunchScreen = () => {
    const { theme }  = useContext(ThemeContext);
    const CELLS = [...Array(NUMBER_OF_CELLS).keys()];

    return(
        <div className={`flex justify-center items-center w-screen h-screen ${theme["bg-p-color"]} ${theme["bg-p-fontColor"]}`} >
            <div className="grid grid-row-2 order-first">
                <TableTemplate>
                    { CELLS.map((number) =><Cell key={number} index={number}/>) }
                </TableTemplate>
                <h1 className={`mx-10 my-6 place-content-center text-2xl font-semibold ${theme["bg-p-color"]} animate-bounce`}>
                    Loading...                
                </h1>
            </div>
        </div>
    );
};

export default LaunchScreen;