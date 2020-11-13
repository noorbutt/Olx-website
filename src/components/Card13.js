import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button13 from './Button13'

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
          image="https://apollo-singapore.akamaized.net/v1/files/90jr6k546tdu1-PK/image;s=300x600;q=60"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h2>Rs 800 </h2>
           <h4> Back cover pouch for iphone 6plus/6s </h4> 
           <h5>Today</h5>
           <h4  className="heigherhead" > Baffer zone 2,karachi</h4>
           <Button13/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}




