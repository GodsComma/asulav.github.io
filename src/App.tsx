import LaunchScreen from "pages/LaunchScreen";
import StyledComponents from "pages/StyledComponent";
import React, { lazy } from "react";
import ThemeProvider, { ThemeTypeProps } from "themes/ThemeProvider";
import { LOADING_TIME, DEFAULT_THEME } from "constant";

const HomePage = lazy(() => {
  return Promise.all([
    import("pages/Home"),
    new Promise(resolve => setTimeout(resolve, LOADING_TIME))
  ])
  .then(([moduleExports]) => moduleExports);
});

const InitalizeTheme = () : ThemeTypeProps => {
  const theme = localStorage.getItem('theme') || DEFAULT_THEME;
  if (theme) {
    return DEFAULT_THEME;
  }
  localStorage.setItem('theme', DEFAULT_THEME);
  return DEFAULT_THEME;
}

const InitialTheme = InitalizeTheme();

function App() {
  return (
    <ThemeProvider themeType={InitialTheme}>
            <React.Suspense fallback={<LaunchScreen />}>
              <StyledComponents>
                <HomePage />
              </StyledComponents>
            </React.Suspense>
    </ThemeProvider>
  );
}

export default App;