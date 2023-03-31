import React from 'react';
import axios from 'axios';
import { withRouter, WithRouter } from 'react-router';
import './style.css';
export class Launchview extends React.Component
{


    state ={
        launch:[]
    }
    componentDidMount = () =>
    {
        const flightnumber = this.props.match.params.flight_number;
         this.getLaunch(flightnumber);

    }

    getLaunch = (flightnumber) =>
    {
        axios.get("https://api.spacexdata.com/v3/launches/"+flightnumber).then((res) =>
        {
             this.setState({launch:res.data})
        }).catch((err) =>{
            console.log(err);
        })
    }
   render()
   {
     return(
        <div className='description'>
            <h2>Launch Details</h2>
            <p>{this.state.launch.details}</p>
        </div>

             
        
         
     )
   }
}

export default withRouter(Launchview);