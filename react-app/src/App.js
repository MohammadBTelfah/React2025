import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/footer';
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Footer/>
    </div>
  );
}

export default App;
