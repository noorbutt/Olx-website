import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Button11 from './Button11'

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
          image=" https://apollo-singapore.akamaized.net/v1/files/krez61q58dt12-PK/image;s=300x600;q=60 "
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h2>Rs 79,999 </h2>
           <h4> IPhone 8 lpus 10.10 pta approved CNIC </h4> 
           <h5>oct 08</h5>
           <h4  className="heigherhead" > DHA phase karachi</h4>
           <Button11/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}
