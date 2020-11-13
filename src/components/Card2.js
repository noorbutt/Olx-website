import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button2 from './Button2'

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
    <Card className={classes.root}  className="Cards" >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://apollo-singapore.akamaized.net/v1/files/wzto95gi0ooc1-PK/image;s=300x600;q=60 "
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          <h3>Rs 260,000 </h3>
           <h4> Suzuki Mega Carry 2020 On Easy Installment</h4> 
           <h5>Today</h5>
           
           <Button2/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}




