import { useContext } from "react";
import { ThemeContext } from "themes/ThemeProvider";

const useTheme = () => useContext(ThemeContext);

export default useTheme;