import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/BlogWebsite/Home";
import About from "./assets/BlogWebsite/About";
import Blog from "./assets/BlogWebsite/Blog";
import Sponsor from "./assets/BlogWebsite/Sponsor";
import Contact from "./assets/BlogWebsite/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/blog" element={<Blog/>} ></Route>
          <Route path="/sponsor" element={<Sponsor/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
