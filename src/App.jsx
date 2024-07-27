import React, { useState } from "react";
import DashBoard from "./pages/DashBoard.jsx";
import Topbar from "./components/Topbar"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Certify from "./pages/Certify.jsx";
function App() {
  const [pageName ,setpageName] = useState('dashboard')

  function handlePageName(keyname){
      setpageName(keyname)
  }

  return (
    <React.Fragment>
      <Router>
        <Topbar pageName={pageName} handlePageName={handlePageName} />
        <Routes>
          {/* using component prop in Route is (Deprecated in v6) */}
          <Route path="/Certify" element={<Certify/>} />
          <Route path='/' element={<DashBoard/>} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
