import { useState } from 'react';
import './App.css';
import SliderDemo from './SliderDemo';
import logo from './assets/real-estate-house.png';
import MainPage from './components/MainPage/MainPage';
import Unlock from './components/Unlock/Unlock';

function App() {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
  };
  return (
    <div className="App">
      {/* Header */}
      <header className='header'>
        <div className="logo-container">
          <img src={logo} className='logo' />
        </div>
        <div className="title-container">
          <a className="title">XYZ SYSTEMS LLP</a>
        </div>
      </header>
      {unlocked ? <MainPage /> : <Unlock onUnlock={handleUnlock} />}
    </div>

  );
}

export default App;
