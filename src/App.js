import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;