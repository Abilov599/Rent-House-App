import React from "react";
import { Routes, Route } from "react-router-dom";
import MainRoot from "./roots/MainRoot.jsx";

import Home from "./pages/Home Page/Home";
import AboutPage from './pages/About Page/About'
import OpportunitiesPage from './pages/Opportunities Page/Opportunities'
import LogIn from './pages/Login'
import Register from './pages/Register'
import Forum from "./pages/Forum/Forum";
import ApartmentOwner from "./pages/Apartment Owner/ApartmentOwner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoot />}>
          <Route index element={<Home />} />
          <Route path="/opportunities" element={<OpportunitiesPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="owner" element={<ApartmentOwner/>} />
      </Route>
    </Routes>
  );
}

export default App;
