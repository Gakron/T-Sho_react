import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Navbar from "./component/Navbar";
import NavbarLogin from "./component/NavbarLogin";
import Landing from "./component/Landing";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path="/login" component={NavbarLogin} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
