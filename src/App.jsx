import React, { useEffect, useState } from "react";
import DashBoard from "./pages/DashBoard.jsx";
import Contests from "./pages/Contests.jsx";
import Topbar from "./components/Topbar"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Certify from "./pages/Certify.jsx";
import Profile from "./pages/Profile.jsx";
import Apply from "./pages/Apply.jsx";

function App() {
    const [pageName ,setpageName] = useState()

    useEffect(()=>{
      if(localStorage.getItem('pageName')){
        setpageName(localStorage.getItem('pageName'))
      }
      else{
        setpageName('dashboard')
      }
    },[])
  // const location = useLocation();

  // useEffect(() => {
  //   // Update pageName based on the current URL path
  //   const path = location.pathname;
  //   setpageName(path.substring(1)); // Assuming you want to set pageName based on the path, adjust this logic as needed
  // }, [location]);

  function handlePageName(keyname){
      setpageName(keyname)
      localStorage.setItem('pageName',keyname)
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
          <Route path='/apply' element={<Apply/>} />
          <Route path='/profile' element={<Profile/>}  handlePageName={handlePageName}/>
        </Routes>
        <Footer pageName={pageName} />
      </Router>
    </React.Fragment>
  );
}

export default App;
