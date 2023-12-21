import React from 'react'
import EditorPage from './components/pages/EditorPage';
import Navbar from './components/comp/Navbar';

function App() {
  return (
    <div className="w-100 overflow-hidden">
      <Navbar title="Pokit" />
      <EditorPage />
    </div>
  );
}

export default App;
