import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mintpage from './pages/Mintpage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/mint' element={<Mintpage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
