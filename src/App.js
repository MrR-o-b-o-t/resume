import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSelector from "./components/ThemeSelector";

import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={mode}>
      <Header />
      <NavBar />
      <ThemeSelector />
      <About />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
