import React from 'react'
import EditorPage from './components/pages/EditorPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/comp/Navbar'
import HomePage from './components/pages/Home';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/editor' element={<EditorPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
