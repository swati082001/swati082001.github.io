
import './App.css';
import Home from "./Components/HOME PAGE/Home"
import Navbar from './Components/NAVBAR/Navbar';
import About from './Components/ABOUT/About';



function App() {
  return (
    <div className="App">
     
     <Navbar/>
    <Home />
     <About/>
      
    </div>
  );
}

export default App;
