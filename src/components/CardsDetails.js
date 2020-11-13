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
<h4 className="Make">  Make    <span className="Honda">  Honda  </span>  <span className="Model  ">Model </span>   <span className="Fit" > Fit </span> </h4>  
</div>

<div className="div-Datial" >   
<h4 className="Year"> Year   <span className="Apple"> 2017  </span>  <span className="Condition"> Condition</span>   <span className="New" > New </span></h4>
</div>

<div className="div-Datial" >
<h4 className="Transmission"> Transmission <span className="Automatic"> Automatic  </span>  <span className="Registered ">Registered </span>   <span className="Yes" >  Yes   </span> </h4>
</div>

<div  className="div-Datial"   >
<h4 className="Make"> Down Payment (Rs) <span className="Price">Rs 389,000  </span>  <span className=" Monthly"> Monthly Installment (Rs) </span>   <span className="Numbers" > 24451 </span>  </h4> 
</div>

<div  className="div-Datial"   >
<h4 className="Make"> Installment Plan <span className="Years"> 7 Years </span>  <span className="Financer-Type">Financer Type  </span>   <span className="Non-Banking" > Non Banking </span>  </h4>  
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

 <p className="Paragraph-Details">Suzuki Alto VXL 2020</p>
 <p   className="Paragraph-Details"  > Ya kissi b model ki koi b CAR hum se Finance krwaen </p>
 <p  className="Paragraph-Details"   > * 20% Down Payment. </p>
 <p className="Paragraph-Details">    * 1 to 7 Years Installment Plan.</p>   
 <p  className="Paragraph-Details"  >* No Processing Fee & No Hidden Charges. </p>
 <p className="Paragraph-Details"   >* Sood se Pak Finance. </p>
 <p  className="Paragraph-Details"  >* Free Tracker & Insurance. </p>
 <p className="Paragraph-Details"   >* Minimum Profit Rate From Other Companies & Banks. </p>
 <p className="Paragraph-Details"   >Mazeed maloomat k liya aaj he call krein ya Office Visit krien.</p>
 <p className="Paragraph-Details"   >Taqwa Benifts Services </p>
 <p  className="Paragraph-Details"  >( Total Islamic Finance company ) </p>
 <p  className="Paragraph-Details"   > Name: Muhammad Faisal </p>
 <p className="Paragraph-Details" >Contact Or WhatsAap: </p>


<h4 className="Phone-number"> +92 311 - 2055508 (Zong)</h4>
<h4  className="Phone-number"   >+92 347 - 2533896 (Telenor)</h4>
<h4 className="Phone-number"   >+92 309 - 2507327 (Jazz)  </h4>
<h4 className="Phone-number"   > +92 333 - 8279344 (Ufone) </h4>





</div>

       </Typography>

    </CardContent>
    </CardActionArea>





     </div>
        );
    }
}


export default CardsDetails;


