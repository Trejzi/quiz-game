
import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Question from './pages/Question';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/question' element={<Question/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;