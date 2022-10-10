
import './App.css';
import "./styles/stylesSheet.css";
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from './components/login/Form';
import Navbar from './components/navbar/Navbar';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import HomeAddition from './components/Addition.jsx/HomeAddition';
import Contact from './components/contact/Contact';


function App() {
  return (
   <Router>
     <div className="App">
        <Routes>
      <Route path="/form" element={
        <>
        <Navbar />
          <Home />
          <Gallery />
         <Footer />
        </>
      } />
      
      <Route path="/about" element={
        <>
        <Navbar />
        <About />
        <Footer />
        </>

      } />
      <Route path="/contact" element={
        <>
        <Navbar />
        <Contact />
        <Footer />
        </>

      } />

      <Route path="/" element={
       <>
               <Form />
        <HomeAddition />
       </>
        
      } />
        </Routes>
    </div>
   </Router>

  );
}

export default App;
