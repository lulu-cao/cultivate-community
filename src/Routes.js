import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import ManageCareTeam from './Components/ManageCareTeam';
import Home from './Components/Home';
import Resources from './Components/Resources';
import Resource2 from './Components/Resource2';
import Login from './Components/Login';
import Logout from './Components/Logout';
// import PrivateRoutes from './Components/PrivateRoutes';

export default (
    <Routes>
        {/* <PrivateRoute exact path='/' component={Home} /> */}
        {/* <PrivateRoutes path='/manage-care-team' element={<ManageCareTeam />} /> */}
        <Route path='/home' element={<Home />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/resource2' element={<Resource2 />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/logout' element={<Logout />} /> */}
    </Routes>
);