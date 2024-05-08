import React from 'react';
import Home from './pages/home';
import UserSignin from './pages/userSignin';
import UserSignup from './pages/userSignup';
import ForgotPassword from './pages/forgotPass';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/usersignin" element={<UserSignin/>}/>
          <Route path="/usersignup" element={<UserSignup/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
