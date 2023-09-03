import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analitical from "./pages/Analitical";
import Filemamager from "./pages/Filemanager";
import Slidebar from "./component/Slidebar";

function App() {
  return (
    <BrowserRouter>
      <Slidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="file" element={<Filemamager />} />
          <Route path="ana" element={<Analitical />} />
        </Routes>
      </Slidebar>
    </BrowserRouter>
  );
}
export default App;
