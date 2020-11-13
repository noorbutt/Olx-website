import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';



class CardsDetails extends Component {
    render() {
        return  (<div className="Datail-div">  
           
<CardActionArea className="ActionArea1">
<CardContent     className="CardContent">
<Typography gutterBottom variant="h5" component="h2">

</Typography>

<Typography variant="body2" color="textSecondary" component="p">
    
<h3 className="Details">Datails </h3>

<div className="div-Datial">     
<h4 className="Make"> {this.props.Make}<span className="Honda"> {this.props.Apple}  </span>  <span className="Model  "> {this.props.situation}</span>   <span className="Fit" >{this.props.Inuse}</span>        </h4>  
 
</div>

       </Typography>

    </CardContent>
    </CardActionArea>



         
    <CardActionArea className="ActionArea1">
<CardContent     className="CardContent">
<Typography gutterBottom variant="h5" component="h2">

</Typography>

<Typography variant="body2" color="textSecondary" component="p">
    
<h3 className="Details">Description </h3>

<div className="div-Datial">     

 <p className="Paragraph-Details">{this.props.data}  </p>
 <p  className="Paragraph-Details"  > {this.props.Work} </p>
 <p  className="Paragraph-Details"   >{this.props.quality}  </p>
 <p className="Paragraph-Details"> {this.props.More}</p>   
 <p  className="Paragraph-Details"  >{this.props.condition} </p>
    <p  className="Paragraph-Details"  > {this.props.color} </p>


    <p  className="Paragraph-Details"   >{this.props.Main}  </p>
 <p className="Paragraph-Details"> {this.props.Important}</p>   
 <p  className="Paragraph-Details"  >{this.props.Most} </p>
    <p  className="Paragraph-Details"  > {this.props.End} </p>


    <p  className="Paragraph-Details"   >{this.props.Traits}  </p>
 <p className="Paragraph-Details"> {this.props.Design}</p>   
 <p  className="Paragraph-Details"  >{this.props.Area} </p>
    <p  className="Paragraph-Details"  > {this.props.AboutBanks} </p>


    <p  className="Paragraph-Details"   >{this.props.PrimeLocation }  </p>
 <p className="Paragraph-Details"> {this.props.Difference }</p>   
 <p  className="Paragraph-Details"  >{this.props.Parks } </p>
    <p  className="Paragraph-Details"  > {this.props. Cricket } </p>


 




</div>

       </Typography>

    </CardContent>
    </CardActionArea>





     </div>
        );
    }
}


export default CardsDetails;


