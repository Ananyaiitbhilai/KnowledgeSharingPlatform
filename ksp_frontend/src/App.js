//import React, { Component, Fragment } from "react";
//import { Router } from "react-router";
import SideBar from "./components/Header";
import HomePage from "./components/HomePage";
import Home from "./components/Notes/Home";
import Home2 from "./components/Feedbacks/Home2";
import Home1 from "./components/PYQs/Home1";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/PYQs" element={<Home1/>} />
          <Route path="/notes" element={<Home/>} />
          <Route path="/feedbacks" element={<Home2/>} />
          </Routes>
       
      </div>
    </Router>
  );
};

export default App;
