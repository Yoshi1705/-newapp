import React from 'react';
import { Header } from './components/Header';
import { Launch } from './components/Launch/Launch';
import './styles.css'
function App() {
  return (
    <div className="App">
       <Header/>

       <Launch 
       title="FalconSat" 
       img = "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg" 
       date = "2006-03-24T22:30:00.000Z" 
       description = "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
       />

       
      <Launch 
       title="FalconSat" 
       img = "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg" 
       date = "2006-03-24T22:30:00.000Z" 
       description = "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
       />

       
     <Launch 
       title="FalconSat" 
       img = "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg" 
       date = "2006-03-24T22:30:00.000Z" 
       description = "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
       />

    </div>
  );
}

export default App;
