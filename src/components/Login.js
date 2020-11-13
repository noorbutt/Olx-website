import React, { useState } from 'react'
import fire from './fire';
import CloseIcon from '@material-ui/icons/Close';
import { Prev } from 'react-bootstrap/esm/PageItem';
import Facebook from './facebook';

const Login = ({showLogin, setShowLogin}) => { 



// Hooks email and password    
const [email,setEmail] = useState("")
const [password,setpassword] = useState("")




// Email input 
function handleEmailChange(event){
    setEmail (event.target.value);
}




// password input
function handlePasswordChange(event){
    setpassword (event.target.value);
}




// prevent the form from auto submitting
function handleSubmit(event){
event.preventDefault();

 // logIn the user
 fire.auth()
 .signInWithEmailAndPassword(email,password)
 .then(user => {})
 .catch((error)=>{
     console.log(error);
 });


} 




// Login  button 
function Register(event){
    event.preventDefault();

 // logout the user
 fire.auth()
  .createUserWithEmailAndPassword(email, password)
  .then(user => {console.log(user)})
 .catch(error =>{
      console.log(error);
  });


}







return( 
    <> 
    {showLogin ?(    
<div  className="form" > 

<div className="Background1">
<div className="ModalWrapper2">   
<div className="ModalContent3"> 


<form onSubmit={handleSubmit} >  
<div>   


<CloseIcon className="CloseModalButton1"  onClick={()=> setShowLogin (!Prev)}   /> 
<h6 className="Email-h6">Email</h6>
 <input  className="Email-input"   onChange={handleEmailChange}   type="email"  name="email" placeholder="Email address"/> 
 <h6 className="Password-h6"> Password</h6>
 <input  className="Password-input" onChange={handlePasswordChange}    type="password"  name="password" placeholder="Enter your password"/> 

<button type="submit"   className="btn-logout">Logout</button>
<button onClick={Register}  className="btn-LogIn"  type="button">LogIn</button>
<Facebook className="facebook-btn"> </Facebook>
</div>
 </form>




      </div>
        </div>
        </div>










 </div> 
 








 ) :null}
 
 </>
 )

}



export default Login;

