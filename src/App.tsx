import { ThemeProvider } from "styled-components"
import Demo from './demo';
import { LayoutSecondary, Themes } from "daro-ui-kit";
import SideBar from "./layout/sidebar";
import Footer from "./layout/footer";
import { LayoutContextProvider } from "daro-ui-kit";
import { TopNavBar } from "daro-ui-kit";
import { BrowserRouter as Router } from "react-router-dom"
import logoImg from "./demo/assets/logo_demo.png";
import MainContainer from "./layout/main-container";
import Bar from "./layout/bar";
import { LayoutPrimary } from "daro-ui-kit";
import { useState } from "react";


function App() {
  const [layoutStyle, setLayoutStyle] = useState<string>("secondary");

  const handleLayoutChange = (newLayoutStyle: string) => {
    setLayoutStyle(newLayoutStyle);
  };

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={Themes}>
          <LayoutContextProvider>

            {(layoutStyle === "primary") && (
              <LayoutPrimary
                topbar={<TopNavBar logo={logoImg} bar={<Bar />} />}
                leftbar={<SideBar background={"#33A3FF"}/>}
                footer={<Footer />}
              >
                <MainContainer
                  layoutStyle={layoutStyle}
                  onLayoutChange={(newLayoutStyle) => handleLayoutChange(newLayoutStyle)} />
              </LayoutPrimary>
            )}
            
            {(layoutStyle === "secondary") && (
              <LayoutSecondary
                topbar={<TopNavBar logo={logoImg} bar={<Bar />} />}
                leftbar={<SideBar background={"#6EA3CD"}/>}
                footer={<Footer />}
              >
                <MainContainer
                  layoutStyle={layoutStyle}
                  onLayoutChange={(newLayoutStyle) => handleLayoutChange(newLayoutStyle)} />
              </LayoutSecondary>
            )}

          </LayoutContextProvider>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
