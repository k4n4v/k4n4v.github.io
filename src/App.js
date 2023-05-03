import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About/About";


function App() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route exact path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
