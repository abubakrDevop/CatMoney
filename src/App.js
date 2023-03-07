import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Index } from "./pages/Index";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Index />} />
        <Route path="/1/:id" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;