import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
import VehicleList from "./components/VehicleList";



function App(){
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
    </Routes>
    <Footer/>
    </>
  )
}


export default App;
