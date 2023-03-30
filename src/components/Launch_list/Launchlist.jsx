import React from "react";
import { Launch } from "../Launch/Launch";
import './styles.css';
import axios from 'axios';
export class Launchlist extends React.Component
{
   state = {
      launches : []
   }
    componentDidMount = () =>
    {
        this.getData()
    }

    getData = () =>
    {
         axios.get("https://api.spacexdata.com/v3/launches").then((res) => 
         {
             this.setState({
               launches : res.data
             })

         }).catch((err) => {
            console.log(err);
         })
    }


    launchList = () => {
      const launchComponent = this.state.launches.map((launch,index) => {
         const imageUrls = [
            'https://imgs.search.brave.com/3kFIJf7fGLCI0E4G9AKtKrcCdBlv1pcV1pU65D-s6bc/rs:fit:874:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/aUtLNkRXVEhFVzhf/amJ0UmNabG53SGFF/QiZwaWQ9QXBp',
            'https://imgs.search.brave.com/0u74FX-6_o-2n-HMeRB2v8Z_NmzFn3Jl4e5bQ8vORw0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/UWhISUNFZHlvVVZ6/S2NWYVgxNkZ3SGFF/SyZwaWQ9QXBp',
            'https://imgs.search.brave.com/Sw6gkiHRAr7ZgmTbAlVtho3QhU34DrdvXraT4hcLJk8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/aUJ5UWJTY2RqNmZk/MFB2Z01oSUxRSGFF/OCZwaWQ9QXBp',
             'https://imgs.search.brave.com/isj5NTNK3nvv1TsdJGZJKVa3GU5dToq_sUlaEug3mG4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/SmZwVjVwYnR0cGFs/RDBHWjNzNF9nSGFF/SyZwaWQ9QXBp',
             'https://imgs.search.brave.com/c_DvvaEtjRFp3fRr0w_ZCgzo6uXn3s27TBM1VYb34Hk/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/NjBhV0E1T0Jjb2ty/YldUTFJBNWdBSGFF/SyZwaWQ9QXBp',
             'https://imgs.search.brave.com/FSoz3KHMebnd1KgffgfSx-j04fDetN2nWW3JNpk-0vs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/bmpNNHI4TmZhdXdG/N3BxOFFQamR3SGFF/OCZwaWQ9QXBp',
             'https://imgs.search.brave.com/utnJjthOgZ8vUmDMfMh42S5T2U8GYZi8X-xuK-nYHqo/rs:fit:854:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/UXFLYlpaZGhyT0Jm/bzMzWG5vWklRSGFF/SCZwaWQ9QXBp',
             'https://imgs.search.brave.com/t7IrhCudXvqMxCcWUgJKcCmOA5x0GPb0DRPIHs22D7U/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5p/NzVXSWxzRTBnX24w/TGVnVm9hSTVBSGFF/NyZwaWQ9QXBp',
             'https://imgs.search.brave.com/w2XEbAk7eqwHpI0iVRLoZLLcMfUcZ4o8iMRosXjjvaU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/c25ZQ0thLTRYYUJw/b3J3WkI4ZTV3SGFF/OCZwaWQ9QXBp',
             'https://imgs.search.brave.com/1BaeSVlmxZ9hPhSv0PqFk1YhDsQQaRxZxRldN3J4qrM/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/bjFWSGhVZ2ozd1Fj/TTZYSl9FYmZnSGFF/NyZwaWQ9QXBp'
          ];
          const randomIndex = Math.floor(Math.random() * imageUrls.length);
          const imageUrl = imageUrls[randomIndex];
         const image = launch.links.flickr_images.length === 0 ?  imageUrl   : launch.links.flickr_images[0];
        return (
          <Launch 
            key = {"launch"+index}
            title={launch.mission_name} 
            img={image}
            date={launch.launch_date_local}
            description="Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
          />
        );
      });
      return launchComponent;
    }
    

     render()
     {
      console.log(this.state.launches[0]);
         return(
           <div className="Launchlist">  
 
              {this.launchList()}
          </div>
        );
     }
}