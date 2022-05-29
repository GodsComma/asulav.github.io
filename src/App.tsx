import LaunchScreen from "pages/LaunchScreen";
import React, { lazy } from "react";
import ThemeProvider, { ThemeTypeProps } from "themes/ThemeProvider";
import { LOADING_TIME, DEFAULT_THEME } from "constant";
import ThemedComponents from "pages/StyledComponent";

const HomePage = lazy(() => {
  return Promise.all([
    import("pages/Home"),
    new Promise(resolve => setTimeout(resolve, LOADING_TIME))
  ])
  .then(([moduleExports]) => moduleExports);
});

const InitalizeTheme = () : ThemeTypeProps => {
  const theme = localStorage.getItem('theme') as ThemeTypeProps || DEFAULT_THEME;
  if (theme) {
    return theme;
  }
  localStorage.setItem('theme', DEFAULT_THEME);
  return DEFAULT_THEME;
}

const InitialTheme = InitalizeTheme();

function App() {
  return (
    <ThemeProvider themeType={InitialTheme}>
            <React.Suspense fallback={<LaunchScreen />}>
              <ThemedComponents>
                <HomePage />
              </ThemedComponents>
            </React.Suspense>
    </ThemeProvider>
  );
}

export default App;