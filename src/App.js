import React from 'react';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPass';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
