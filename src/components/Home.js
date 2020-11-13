import React from "react";
import fire from "./fire";




const Home = ()=>{


  function Logout(){
    fire.auth().signOut();
    console.log(Logout)
  }
  
  
    return (
        
     <div>
  
     <button type="submit" onClick={Logout}>Logout</button>
   
      </div>
  
      )


}

    

export default Home;





