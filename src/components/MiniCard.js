import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';


class MiniCard extends Component {
    render() {
        return (<div className="Rs-area">  
           

<CardActionArea className="ActionArea">
<CardContent     className="CardContent">
<Typography gutterBottom variant="h5" component="h2">

</Typography>

<Typography variant="body2" color="textSecondary" component="p">
    
<h3 className="Rs"> {this.props.price}</h3>
<h4>{this.props.name}</h4> 
<h5 className="yesterday">{this.props.Time}</h5>

       </Typography>

    </CardContent>
    </CardActionArea>
     </div>
        );
    }
}

export default MiniCard;



