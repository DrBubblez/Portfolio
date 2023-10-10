import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/aboutMe/about";
import Projects from "./components/proj/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
