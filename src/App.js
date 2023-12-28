import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

    </Routes>
    </>
  );
}

export default App;
