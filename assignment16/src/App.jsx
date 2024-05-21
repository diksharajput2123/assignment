import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <h2 style={{textAlign:'center', textDecoration:'underline', fontFamily:"cursive"}}>Assignment 16</h2>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleMode}>
        {isDarkMode ? 'white' : 'dark'}
      </button>
    </div>
    </>
  );
}
export default App