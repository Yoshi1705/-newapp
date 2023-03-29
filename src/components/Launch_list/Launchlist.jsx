import React from "react";
import { Launch } from "../Launch/Launch";
import './styles.css'
export class Launchlist extends React.Component
{
     render()
     {
        return(
           <div className="Launchlist">  

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
}