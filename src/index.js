import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


ReactDOM.render(
  <HashRouter>
    <Header />
    <Routes>
      {/* <HashRouter> */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      {/* </HashRouter> */}
    </Routes>
    <Footer />
  </HashRouter>,
  document.getElementById('root')
);

