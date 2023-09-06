import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Navbar from "./component/Navbar";
import NavbarLogin from "./component/Navbar";
import Landing from "./component/Landing";
import LoginPage from "./component/LoginPage"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
