
import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';



class Map extends Component {
    render() {
        return (<div className="Map-div">  
           
<CardActionArea  className="ActionArea">
<CardContent     className="CardContent">
<Typography gutterBottom variant="h5" component="h2">

</Typography>

<Typography variant="body2" color="textSecondary" component="p">
<h3 className="Post">Post in </h3>
<h3 className="Gulshan" > {this.props.locate} </h3>
 <img className="Map-img" src="https://maps.googleapis.com/maps/api/staticmap?center=24.903%2C67.073&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=L4xjtmBp9s--pMdOBPSfvVfaiD8=" />  
       </Typography>

    </CardContent>
    </CardActionArea>
     </div>
        );
    }
}

export default Map;








