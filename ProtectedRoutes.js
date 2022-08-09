import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from './context/appContext';

const ProtectedRoutes = () => {
  const { user } = useGlobalContext();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
