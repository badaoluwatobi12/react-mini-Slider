import React from "react";
import { Route, Routes } from "react-router-dom";

import Slider from "./slider";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
