import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';





class AdsCard extends Component {
    render() {
        return ( <div className="Ads-div">  
           
           <CardActionArea className="ActionArea">
           <CardContent     className="CardContent">
           <Typography gutterBottom variant="h5" component="h2">
           
           </Typography>
           
           <Typography variant="body2" color="textSecondary" component="p">
               
           <h3 className="AD-ID"> AD ID 1023351675</h3>
           <img className="ads-img1" src="https://tpc.googlesyndication.com/simgad/14314770519699955743" />
                  </Typography>
           
               </CardContent>
               </CardActionArea>

            </div>
        );
    }
}

export default AdsCard;






