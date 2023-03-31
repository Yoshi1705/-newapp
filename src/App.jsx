import React from 'react';
import { Header } from './components/Header';
import './styles.css'
import { Launchlist } from './components/Launch_list/Launchlist';
import  Launchview  from './components/Launchview/Launchview';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
   
} from 'react-router-dom';

 function App() {
  return (

    
      <div className="App">
    <Router> 

      <Header/>
      <Switch>

          

         <Route path="/view/:flight_number">
             <Launchview/>
          </Route>

          <Route path='/'>
            <Launchlist/>
          </Route>

          
      </Switch>
     
    </Router>

    </div>

  );
}

export default App;
