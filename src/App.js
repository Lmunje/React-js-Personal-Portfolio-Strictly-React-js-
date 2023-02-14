import About from "./Components/About/About";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Blog />
       <Contact />
       <Footer /> 
    </div>
  );
}

export default App;
