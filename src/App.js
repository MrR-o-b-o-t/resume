import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
// import Blog from "./components/Blog";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeSelector from "./components/ThemeSelector";

import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <>
      <Header />
      <NavBar />
      <div className={mode}>
        <ThemeSelector />
        <About />
        {/* <Blog /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
