import React from 'react';
import { Header } from './components/Header';
import './styles.css'
import { Launchlist } from './components/Launch_list/Launchlist';
 function App() {
  return (
    <div className="App">
       <Header/>
       <Launchlist/>
    </div>
  );
}

export default App;
