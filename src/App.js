import React from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This Page is Under Develop But in the Mean Time Here...
        <div> Over the course of Donald Trumps time on twitter, he tweets every 7841 seconds...</div>
          <ReactCountdownClock seconds={7841}
                               color="#90EE90"
                               alpha={0.9}
                               size={300}
                               onComplete={()=>{}} />
      </header>
    </div>
  );
}

export default App;
