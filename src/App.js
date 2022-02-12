import React, { lazy, Suspense, useEffect, useState } from "react";
// import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import initFontAwesome from "./components/fontAwesome";

import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "./components/themes";


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
    
        <StyledApp>
          <Suspense
            fallback={
               <div className="loader-wrapper">
      <div className="loader"></div>
      </div>}
          >
            <main className="main" style={{
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative"
}}>
              <Router>
                {/* <NavBar /> */}

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/defi" element={<Defi />} />
                  <Route path="/idolaunchpad" element={<Idolaunchpad />} />
                  {/* <Route path="/rugchecker" element={<Rugchecker />} /> */}
                  <Route path="/faq" element={<Faq />}></Route>
                  <Route path="/buy" element={<Idolaunchpad />} />
                </Routes>
              </Router>
            </main>
          </Suspense>
         
        </StyledApp>
    </>
  );
}

export default App;
