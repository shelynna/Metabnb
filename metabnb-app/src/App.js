import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PlaceToStay from './components/pages/PlaceToStay'
import PageContainer from './components/container/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageContainer><HomePage /></PageContainer>} />
        <Route path="/place-to-stay" exact element={<PageContainer><PlaceToStay /></PageContainer>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

