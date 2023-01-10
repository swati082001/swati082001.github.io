
import './App.css';
import Home from "./Components/HOME PAGE/Home"
import Navbar from './Components/NAVBAR/Navbar';
import About from './Components/ABOUT/About';
import Projects from './Components/PROJECTS/projects';
import Gitstats from './Components/STATS/Gitstats';



function App() {
  return (
    <div className="App">
     
     <Navbar/>
    <Home />
     <About/>
     <Projects/>
     <Gitstats/>
      
    </div>
  );
}

export default App;
