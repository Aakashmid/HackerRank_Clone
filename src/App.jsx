import React, { useState } from "react";
import DashBoard from "./pages/DashBoard.jsx";
import Contests from "./pages/Contests.jsx";
import Topbar from "./components/Topbar"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Certify from "./pages/Certify.jsx";
import Profile from "./pages/Profile.jsx";
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
          <Route path='/contests' element={<Contests/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer pageName={pageName} />
      </Router>
    </React.Fragment>
  );
}

export default App;
