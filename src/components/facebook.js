
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'


class facebook extends Component {


constructor(){
    super()
    this.state={
     
        isLoggedIn:false,
         userId: "",
         name:"",
         email:"",
         picture:""
         
     }
}
  


     componentClicked = ()=>{
         console.log("clicked")
         alert("Welcome")
       
     }



     
     responseFacebook = response => {
        this.setState({
            isLoggedIn : true,
            userId: response.userId,
            name: response.name,
            email:response.email,
            picture:response.picture.data.url
        })
     }


     


    render() {

    let fbContent ;


    if(this.state.isLoggedIn){
    fbContent = (
     <div
     style={{
     width:"400px" ,
     margin: "auto",
     padding:"20px"
     }}> 

      </div>
    
);
       
    }

  else{
       fbContent =( 

      <FacebookLogin
      appId="3778162232194377"
      authoLoad= {true}
      fields = "name,email,picture"
      onClick={this.componentClicked}
      callback = {this.responseFacebook}
      cssClass="btn"
      >
      </FacebookLogin>


       );
  } 



    return  <div>{fbContent}</div>
        
    }
}

export default facebook;
















