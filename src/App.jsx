import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/footer";
import Services from "./components/Services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import HireMe from "./components/hireMe"
export default function App() {
  return (
    
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hireme" element={<HireMe/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        <Footer/>  
        </main>
      </div>

  );
}