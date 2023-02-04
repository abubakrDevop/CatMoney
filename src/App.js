import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*" element={''} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;