import LaunchScreen from "pages/LaunchScreen";
import StyledComponents from "pages/StyledComponent";
import React, { lazy } from "react";
import ThemeProvider from "themes/ThemeProvider";
import { LOADING_TIME } from "constant";

const HomePage = lazy(() => {
  return Promise.all([
    import("pages/Home"),
    new Promise(resolve => setTimeout(resolve, LOADING_TIME))
  ])
  .then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <ThemeProvider themeType={'LIGHT'}>
            <React.Suspense fallback={<LaunchScreen />}>
              <StyledComponents>
                <HomePage />
              </StyledComponents>
            </React.Suspense>
    </ThemeProvider>
  );
}

export default App;