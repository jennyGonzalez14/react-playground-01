import './App.css';
import './w3.css';

import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { NotFoundOrc } from "./pages/not-found-orc"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<MainPage />} />
        <Route path="*" element={<NotFoundOrc />} />
      </Routes>
    </div>
  );
}

export default App;
