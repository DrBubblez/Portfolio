import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/aboutMe/about";
import Projects from "./components/proj/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
