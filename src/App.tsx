import { ThemeProvider } from "styled-components"
import Demo from './demo';
import { AccessType, MenuItemType, Themes } from "daro-ui-kit";
import SideBar from "./layout/sidebar";
import Footer from "./layout/footer";
import { Layout, LayoutContextProvider } from "daro-ui-kit";
import { TopNavBar } from "daro-ui-kit";
import { BrowserRouter as Router } from "react-router-dom"
import logoImg from "./demo/assets/logo_demo.png";
import MainContainer from "./layout/main-container";
import Bar from "./layout/bar";


function App() {


  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={Themes}>
            <LayoutContextProvider>
              <Layout
                topbar={<TopNavBar logo={logoImg} bar={<Bar />} />}
                leftbar={<SideBar />}
                footer={<Footer />}
              >
                <MainContainer />
              </Layout>
            </LayoutContextProvider>
          </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
