import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Table from './component/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light'); // Ensure `theme` and `setTheme` are defined

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/table" element={<Table />} />
        
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
