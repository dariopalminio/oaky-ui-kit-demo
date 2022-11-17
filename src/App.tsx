import { ThemeProvider } from "styled-components"
import Demo from './demo';
import { ThemeCore, getTheme } from "daro-ui-kit";
import SideBar from "./layout/sidebar";
import Footer from "./layout/footer";
import { LayoutContextProvider } from "daro-ui-kit";
import { TopNavBar } from "daro-ui-kit";
import { BrowserRouter as Router } from "react-router-dom"
import logoImg from "./demo/assets/logo_demo.png";
import MainContainer from "./layout/main-container";
import Bar from "./layout/bar";
import { LayoutCore, LayoutSensitive, LayoutBullet } from "daro-ui-kit";
import { useState } from "react";


function App() {
  const [layoutStyle, setLayoutStyle] = useState<string>("core");
  const [themes, setThemes] = useState(ThemeCore);

  const handleLayoutChange = (newLayoutStyle: string) => {
    const t = getTheme(newLayoutStyle);
    setThemes(getTheme(newLayoutStyle));
    setLayoutStyle(newLayoutStyle);
  };

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={themes}>
          <LayoutContextProvider>

            {(layoutStyle === "core") && (
              <LayoutCore
                topbar={<TopNavBar logo={logoImg} bar={<Bar />}/>}
                leftbar={<SideBar background={"#305F87"}/>}
                footer={<Footer />}
              >
                <MainContainer
                  layoutStyle={layoutStyle}
                  onLayoutChange={(newLayoutStyle) => handleLayoutChange(newLayoutStyle)} />
              </LayoutCore>
            )}
            
            {(layoutStyle === "sensitive") && (
              <LayoutSensitive
                topbar={<TopNavBar style={{background:"#C6DBEC"}} logo={logoImg} bar={<Bar />} />}
                leftbar={<SideBar background={"#6EA3CD"}/>}
                footer={<Footer />}
              >
                <MainContainer
                  layoutStyle={layoutStyle}
                  onLayoutChange={(newLayoutStyle) => handleLayoutChange(newLayoutStyle)} />
              </LayoutSensitive>
            )}

            {(layoutStyle === "bullet") && (
              <LayoutBullet
                topbar={<TopNavBar style={{background:"#C6DBEC"}}  bar={<Bar />} />}
                leftbar={<SideBar background={"#305F87"}/>}
                footer={<Footer />}
              >
                <MainContainer
                  layoutStyle={layoutStyle}
                  onLayoutChange={(newLayoutStyle) => handleLayoutChange(newLayoutStyle)} />
              </LayoutBullet>
            )}

          </LayoutContextProvider>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
