import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import PostFormData from './components/PostFormData';
import UpdateData from './components/UpdateData';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<PostFormData/>} />
          <Route path='/update/:id' element={<UpdateData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
