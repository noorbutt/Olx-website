import React, { Component } from 'react';
import './Props.css'
import './App.css';
import Header from "./components/Header";
import {Grid}  from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Maincard from './components/Card1' 
import  MediaCard from './components/Card2';
import Carcard from './components/Card3'
import Cardline from './components/Card4'
import MiniCards from './components/Card5'
import SmallCard from './components/Card6'
import BigCard from './components/Card7'
import BangCard from './components/Card8'
import BadCard from './components/Card9'
import  GoodCard from './components/Card10'
import BetterCard from './components/Card11'
import SweetCard from './components/Card12'
import CleverCard from './components/Card13'
import AppleIcon from '@material-ui/icons/Apple';
import fire from './components/fire';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router ,Route, } from "react-router-dom";

// import button from './components/button' ;

// Link


// https://maps.google.com/maps?q=times+square&hl=en&ll=40.758895,-73.981848&
// spn=0.054676,0.054588&sll=39.739318,-89.266507&sspn=14.196132,13.974609&hq=times+
// square&t=m&z=14&iwloc=A"



 const useStyles = makeStyles({
   gridContainer:{
   paddingLeft:'550px',
   paddingRight:'10px',


   }

 });



 class App extends Component {
   

   render() {
     return (
    
      
       <div>
        
     < Router>  
     <Header/> 
    
  
  
     
      <Route path="/Home" exact component={Home} />
     
     </ Router  >
       

      <Home/>
    




   <img src={require("./ui/Capture.PNG")}  alt="props" className="Image"/> 
    
  


    <div className="Cards-area" >   
    <div className="Cards-area1">   
    <h6> More on carry</h6>
    <Grid container spacing={4}>  
    
    <Grid item xs={12} sm={8} md={4}>  
   
    <Maincard/>



    </Grid> 

    
    <Grid item xs={12} sm={8}  md={4}>  
    <MediaCard/>
   
    
    </Grid> 
   


    <Grid item xs={12} sm={8}   md={4}>  
    <Carcard/>
    </Grid> 

    
 
     </Grid>
 
     </div>

     </div> 
  
       

  
     <div className="Cards-area" >   
     <div className="Cards-area1">   
     <h6>  Fresh recommendations   </h6>
     <Grid container spacing={4}>
    <Grid    item xs={12} sm={8}   md={4} > 
    <Cardline/>

    </Grid>


    <Grid   item xs={12} sm={8}   md={4} > 
     <MiniCards/> 
     </Grid>

    
     <Grid   item xs={12} sm={8}   md={4} > 
   <SmallCard/>
   </Grid>

     </Grid>



  {/* Second Card Line  */}

    
     <Grid container spacing={4}>


    <Grid    item xs={12} sm={8}   md={4} > 
    <BigCard/>
    </Grid>




    <Grid   item xs={12} sm={8}   md={4} > 
     <BangCard/> 
     </Grid>



    
     <Grid   item xs={12} sm={8}   md={4} > 
    <BadCard/>
    </Grid>





    <Grid   item xs={12} sm={8}   md={4} > 
    < GoodCard/>
    </Grid>




    <Grid   item xs={12} sm={8}   md={4} > 
    <BetterCard/>
    </Grid>




    <Grid   item xs={12} sm={8}   md={4} > 
   < SweetCard/>
   </Grid>





   <Grid   item xs={12} sm={8}   md={4} > 
   <CleverCard/>
   </Grid>




     </Grid>
 

 {/* Third Card line  */}




     </div>
     </div>

    
    <center>   <img src={require("./ui/ads-img.png")}  alt="props"  className="Ads-img" /> </center> 



    <div className="Footer-images"> 

    <Grid container spacing={2}>
    <img src='https://statics.olx.com.pk/external/base/img/phone-app.webp' className="Footer-img"/> 

   
    

    <Grid   item xs={12} sm={8}   md={4} > 
    <h3 className="Footer-head">TRY THE OLX APP</h3>
    <p className="Buy">Buy, sell and find just about anything using the app on your mobile.</p>
  
    </Grid>



   
   <div className="vertical-line"></div>
 
  <p className="Footer-para"> GET YOUR APP TODAY</p>

  <button  className="Applebtn"><AppleIcon className="AppleIcon"/><p className="parabtn">Download on the</p> 
  <p className="App-store"> App store </p> </button>  
    

  

 <img src= {require ("./ui/playstore-img.webp")} className="btn-img-footer"/>


   </Grid>
  

   </div>
   


  
   <div className="Footer-bc"> 

   <div className=" new1" > </div>

   <Grid container spacing={2}>      
  
                  
  


        <Grid   item xs={12} sm={8}   md={4} >  
   
        <h6 className="h6-Footer">Follow us</h6>
        </Grid> 

               


 
   <Grid   item xs={12} sm={8}   md={4}> 
  

   <div className="Footer-icon"> 

  <svg   width="28px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path></svg>
  <svg   width="28px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM600.499 335.040c25.728 0 51.499 9.6 67.584 25.728 16.085 0 45.013-9.643 57.899-19.328-6.443 19.328-25.771 41.813-38.613 51.499 22.528 0 44.971-9.685 51.456-12.885-12.843 16.085-25.728 32.171-45.013 45.056 6.4 144.768-109.397 263.851-260.608 263.851-51.499 0-99.755-12.885-148.011-38.656 64.341 9.685 119.040-22.528 135.125-38.613-41.856 0-80.427-35.371-83.669-61.141 9.685 0 28.971 3.243 38.656-3.2-54.699-12.885-70.784-54.699-70.784-86.869 9.643 9.685 32.128 9.685 41.813 9.685-32.171-19.328-54.699-70.827-28.971-119.040 48.256 57.899 122.283 90.069 193.067 93.269-3.243-6.4-3.243-12.885-3.243-19.285 0-48.256 41.856-90.069 93.312-90.069z"></path></svg>
  <svg   width="28px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M512 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM382.605 321.86l311.125 190.123-311.125 190.165v-380.288z"></path></svg>
  <svg   width="28px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM619.721 291.247c70.784 0 128.384 57.643 128.384 128.469v0 184.619c0 70.784-57.6 128.427-128.384 128.427v0h-215.424c-70.827 0-128.384-57.643-128.384-128.427v0-184.619c0-70.827 57.557-128.469 128.384-128.469v0zM619.721 335.791h-215.424c-46.293 0-83.883 37.632-83.883 83.925v0 184.619c0 46.293 37.589 83.925 83.883 83.925v0h215.424c46.251 0 83.883-37.632 83.883-83.925v0-184.619c0-46.293-37.632-83.925-83.883-83.925v0zM512.021 405.248c63.659 0 115.456 49.195 115.456 109.653 0 59.904-50.688 106.752-115.456 106.752-63.659 0-115.499-49.195-115.499-109.653 0-59.861 50.688-106.752 115.499-106.752zM512.021 444.885c-41.813 0-75.819 31.403-75.819 70.016 0 37.291 35.413 70.016 75.819 70.016s75.776-32.725 75.776-70.016c0-38.613-34.005-70.016-75.776-70.016zM630.857 358.852c23.296 0 43.008 19.712 43.008 43.008s-19.712 43.008-43.008 43.008c-23.296 0-43.008-19.712-43.008-43.008s19.712-43.008 43.008-43.008zM630.857 386.927c-8.661 0-15.019 6.272-15.019 14.933 0 8.704 6.357 14.976 15.019 14.976s14.976-6.272 14.976-14.976c0-8.661-6.315-14.933-14.976-14.933z"></path></svg>
     </div> 
    
  </Grid> 

 
      </Grid>

      </div>   







      <div className="footer-end"> 

      <Grid container spacing={2}>
       
        
           
          <Grid   item xs={12} sm={8}   md={4}> 
        <p className="paragraph1">Other Countries </p> 
        </Grid>  


        <Grid   item xs={12} sm={8}   md={4}> 
        <p   className="paragraph2" > india-South Africa - Indonesia    </p>
     
        </Grid> 


        <Grid   item xs={12} sm={8}   md={4}> 
          <p className="paragraph3"  >  Free Classifieds in Pakistan  . © 2006-2020 OLX </p>
      
          </Grid> 
            

         

       
        
          </Grid> 
        
        </div>

       



 
  
       </div>

     
     );
   }
}




export default App;




 export class Signin extends Component {


  constructor(props){
      super(props)
      this.state = {
       user:{}
  
      }
  
    }
  
  
  
  
  authListener(){
    fire.auth().onAuthSateChanged((user) => {
   if(user)  {
      this.setState({user})
   }else{
       this.setState({user:null})
   }
      
    })
    
   }



  
componentDidMount(){
  this.authListener()
}





  render() {
      return (
          <div>
            {this.state.user ? (<Home/>) : (<Login/>)}  
          
          </div>
          
      );
  }
}



