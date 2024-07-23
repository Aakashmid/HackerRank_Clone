import React from "react";
import DashBoard from "./pages/DashBoard.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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