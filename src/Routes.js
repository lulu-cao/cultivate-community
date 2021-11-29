import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import ManageCareTeam from './Components/ManageCareTeam';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Login from './Components/Login';
import Logout from './Components/Logout';
import PrivateRoutes from './Components/PrivateRoutes';


export default (
    <Routes>
        {/* <PrivateRoute exact path='/' component={Home} /> */}
        {/* <PrivateRoutes path='/manage-care-team' element={<ManageCareTeam />} /> */}
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
    </Routes>
);