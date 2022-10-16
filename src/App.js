import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import {AuthContextProvider} from './context/AuthContext';
import { Routes, Route } from "react-router-dom";
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6100);
  }, []);
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {loading ? (
        <Loader />
        ) : (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        </Routes>
        )}
      </AuthContextProvider>
    </>
  );
}

export default App;
