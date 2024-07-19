import React from "react";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {/* <Route path='/dashboard' Component={DashBoard} /> */}
          <Route path='/' Component={DashBoard} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
