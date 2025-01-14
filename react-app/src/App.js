import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light'); // Ensure `theme` and `setTheme` are defined

  return (
    <Router>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          {/* Define your routes here */}
          {/* Example: <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
