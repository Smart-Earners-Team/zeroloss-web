import React, { lazy, Suspense, useEffect, useState } from "react";
// import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar";
import { Link } from "react-router-dom";
import initFontAwesome from "./components/fontAwesome";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes";

const Home = lazy(() => import("./pages/home"));
const Defi = lazy(() => import("./pages/defi"));
const Idolaunchpad = lazy(() => import("./pages/idolaunchpad"));
const Rugchecker = lazy(() => import("./pages/rugchecker"));
const Faq = lazy(() => import("./pages/faq"));
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
initFontAwesome();


function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <main className="main">
            <Suspense
              fallback={
                <div className="preloader">
                  <div className="wrapper">
                    <div className="blobs">
                      <div className="blob-center"></div>
                      <div className="blob"></div>
                      <div className="blob"></div>
                      <div className="blob"></div>
                      <div className="blob"></div>
                      <div className="blob"></div>
                      <div className="blob"></div>
                    </div>
                    <div>
                      <div className="loader-canvas canvas-left"></div>
                      <div className="loader-canvas canvas-right"></div>
                    </div>
                  </div>
                </div>
              }
            >
              <Router>
                <NavBar />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/defi" element={<Defi />} />
                  <Route path="/idolaunchpad" element={<Idolaunchpad />} />
                  {/* <Route path="/rugchecker" element={<Rugchecker />} /> */}
                  <Route path="/faq" element={<Faq />}></Route>
                  <Route path="/buy" element={<Idolaunchpad />} />
                </Routes>
              </Router>
            </Suspense>
            {/* <button
              className="btn btn-size--sm btn-hover--splash"
              style={{ backgroundColor: "gold",  marginRight : 0, marginTop : 0 }}
              onClick={() => themeToggler()}
            >Change theme
            </button> */}
          </main>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
