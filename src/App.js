import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Socials/>
    </div>
  );
}

export default App;
