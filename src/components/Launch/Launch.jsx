import React from 'react';
import './style.css'

export class Launch extends React.Component
{
    render()
    {
        return(
        <div className='launch'>
                <img src ={this.props.img} alt="launch"></img>
            <div className='content'>
                 <div className='info'>
                 <h2>{this.props.title}</h2>
                 <h2>{this.props.date}</h2>
                 </div>
                <p>{this.props.description}</p>
            </div>
                 
        </div>
        )
    } 
}