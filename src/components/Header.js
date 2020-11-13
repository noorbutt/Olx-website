import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';
import SidebarData from './SidebarData.js';
import { IconContext } from "react-icons";
import Facebook from './facebook';
import RoomIcon from '@material-ui/icons/Room';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import {Modal} from './Modal';
import styled from 'styled-components';
import {GlobalStyle} from './GlobalStyles';
import Login from './Login'




  const Container = styled.div`
    display:flex;  
    text-align: center; 
    justify-content:center;
   height:100vh;
   
  `;








 function Header(){
   


 const [sidebar, setSidebar] = useState (false)
 const showSidebar = () => setSidebar(!sidebar)




const [open, setOpen] = useState(false)
const clickPage = () => setOpen(!open)




const [showModal, setShowModal] = useState(false)
 const openModal = ()=> setShowModal ( prev=> !prev)
 


const [showLogin, setShowLogin] = useState(false)
const openLogin = () => setShowLogin (prev=> !prev)





 
    const nav = [

      {ID:1 ,  label: "Mobiles Phones"},
      {ID:2 ,  label: "Cars"},
      {ID:3 ,  label: "Motorcycles"},
      {ID:4 ,  label: "Houses"},
      {ID:5 ,  label: "TV-Video-Audio"},
      {ID:6 ,  label: "Tablets"},
      {ID:7 ,  label: "Lands & Plots"},

    ];





     const page = [
         { 
           Title:' Karachi',
           path : '/Karachi',
           Icon :  <RoomIcon/>,
           Name : 'wonder'
         },

         { 
          Title:' North Nazimabad',
          path : '/North Nazimabad',
          Icon :  <RoomIcon/>,
          Name : 'wonder'
        },
        
        { 
          Title:'Punjab',
          path : '/Punjab',
          Icon :  <RoomIcon/>,
          Name : 'wonder'
        },
        
        { 
          Title:'Islamabad Capital Territory',
          path : ' /Islamabad Capital Territory  ',
          Icon :  <RoomIcon/>,
          Name : 'wonder'
        },
        
        { 
          Title:'Sindh',
          path : '/Sindh',
          Icon :  <RoomIcon/>,
          Name : 'wonder'
        },
        
        { 
          Title:'Khyber pakhtunkhwa',
          path : '/Khyber pakhtunkhwa',
          Icon :  <RoomIcon/>,
          Name : 'wonder'
        }
        

     ]



   






     




        return (
                <React.Fragment> 

        
                       <IconContext.Provider value={{ color: "#fff"}} > 

                   <>
                  
                   
         
                  <div  className="humburger-menu"  onClick={showSidebar} >
                 
                         <div className="line line-1"></div>
                         <div className="line line-2"></div>
                         <div className="line line-3"></div>

                         </div>
                        
                  
                        <nav className={sidebar ? 'nav-menu active'  : 'nav-menu' }>

                          <ul  className='nav-menu-items'>

                            <li className={'navbar-toggle'}  onClick={showSidebar}>

                              <Link to='#' className={'menu-bars'} >
                               < CloseIcon/> 
                              </Link> 

                             

                            </li>
                             
                           
                             {SidebarData.map((item,index)=>{ 

                               return(

                                 <li key={index} className={item.cName}>

                                   <Link  path={item.path}>

                                   {item.icon}

                                 <span className="spn">{item.title}</span>

                                 </Link>

                                
                                    </li>
                               )

                             })}

                            <Facebook/>
                          </ul>
                         </nav>
                         </>

                            
                            
                         


                         </IconContext.Provider>


             <div className="header fixed flex aic">


                <div className="logo">

             <img src={require("../ui/olxlogo.png")}  alt="props"/>
            
                 </div>




    
                 <>
                      

                 <div className="location rel flex aic">

              <div className= "ico s24"> <SearchIcon/> </div>
              <input className="label s15 font"  placeholder="Karachi, Sindh" />
   

               <button className="arro s24"   onClick={clickPage} >
                 <KeyboardArrowDownIcon/>
                 </button>

                 </div>

             



               <div className={ open ? 'nav-bar active'  : 'nav-bar' } >  
               
               <div class="line4"></div>
               
              
                 <ul>   
        
             
                  
                 <div>  

                <div  onClick={openModal}>    

             <div className="FixedIcon"> <GpsFixedIcon/></div>

              <h6 className="Current">Use current location </h6> 
              <p className="para1"> browser/phone settings </p>
              <p className="para2"> Location blocked.Check  </p>
          
                    </div>
                    </div>
                    <p className="para3"> RECENT LOCATIONS </p>
                    

                  
              {
 
                 page.map((item,index)=>{

              return(
               
                    <li key={index}  className={item.Name}>
                         
                        <Link path={item.path} > 
                      <div  className="navbar-Items">{item.Icon}</div>
                     
                      <span className="title">{item.Title}</span>
                     
                    </Link> 

                    <div className="line5"> </div>
                    </li>
  
               )

                })

            }
             <div class="line5"></div>
             <p className="Para6"> POPULAR LOCATIONS </p>
            
               
              </ul>

                       </div>
                       </>

                    


                
<>

 <Container>  
<Modal showModal={showModal} setShowModal={setShowModal} />
<GlobalStyle />
</Container>

 </>

 {/* showModal={showModal} setShowModal={setShowModal} */}


<>
<Container>   
<Login   showLogin={showLogin}   setShowLogin={setShowLogin} />
</Container>
</>



                   <div className="search flex aic ">
                    <input  type="text" placeholder="Finds Cars, Mobiles Phones and more..."  className="query font s15"/>
                    <button className="icon-search go s24 cfff"> <SearchIcon/></button>   
                   </div>
                                                         
                     

                  <div className="actions flex aic">
                      


   <Link  to=""  className="color fontb s16" noulh noul  onClick={openLogin} >Login</Link>
                

                   <button className="sell flex  color aic" >
            
                     <div className=" ico s24"><AddIcon/></div>
                      <h2 className="s18 fontb">Sell</h2>

                   </button>


                   </div>

                   </div>



                 
             
            


            <div className="hnav  fixed flex aic"    >
           
            <button className="view-cates flex aic color"   >
       
            <h2 className="s18 font color">All Categories</h2>
            
           <div className=" arrow  s24 ">
           
             <KeyboardArrowDownIcon/>
                
          
             </div>
           
              
           </button>
        
         

           {  
              nav.map(item => {
                return (
            
        <Link to={"/browser/" + item.ID} className=" noul noulh color bl font s15">{item.label}</Link>

               )
              })
        
 }


    
          

           </div>
            </React.Fragment> 
          
        );
     }


     
 export default Header;


