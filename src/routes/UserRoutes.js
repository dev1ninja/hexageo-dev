import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UserRoutes;
