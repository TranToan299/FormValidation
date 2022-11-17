import React from 'react';
import ReactDOM from 'react-dom/client';
import FormValidation from './Components/FormValidation';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Template from './Components/Template';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path ='' element={<Template/>}>
      <Route path='form' element={<FormValidation/>}></Route>
    <Route path='*' element={<Navigate to=''/>}></Route>
    </Route>
        

    </Routes>
  </BrowserRouter>


);
