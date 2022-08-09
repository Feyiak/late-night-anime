import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import Pages and Components
import Home from './Pages/Home';
import Anime from './Pages/Anime';
import Chart from './Pages/Chart';
import SearchQuery from './Pages/SearchQuery';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import Categories from './Pages/Categories';
import AuthRedirect from './Pages/AuthRedirect';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/auth-redirect" element={<AuthRedirect />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search/:id" element={<SearchQuery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

