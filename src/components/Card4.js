import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button4 from './Button4'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
});




export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}   className="Cards"   >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://apollo-singapore.akamaized.net/v1/files/hp9ppgi900mm2-PK/image;s=300x600;q=60"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          <h2>Rs 15,500 </h2>
           <h4> Samsung Note 5</h4> 
           <h5>3 Days ago</h5>
     
           <h4 className="heigherhead"> Mehmodabad Karachi</h4>
           <Button4/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}
