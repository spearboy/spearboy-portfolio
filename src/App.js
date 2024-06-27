import React from 'react';
import Main from './components/Main';
import "./assets/scss/style.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PortPickstom from './pages/PortPickstom';
import { AnimationProvider } from './context/AnimationContext';

const App = () => {
  return (
    <BrowserRouter>
      <AnimationProvider>
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/port1' element={<PortPickstom />} />
          </Routes>
        </Main>
      </AnimationProvider>
    </BrowserRouter>
  );
};

export default App;