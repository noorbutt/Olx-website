import React from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { Prev } from 'react-bootstrap/esm/PageItem';





  

  


  export   const Modal = ({showModal, setShowModal})=>{
     return  (
      <> 
  { showModal ?(  
  <div className="Background">
    <div className="ModalWrapper">   
   <div className="ModalContent">  

  <h3 className="blocked">Geolocation is blocked</h3> 
   <p  className="Looks">Looks like your geolocation permissions are blocked. Please, provide geolocation access in your browser settings and get the nearest ads. </p>
                 
    {/* <CloseModalButton className="CloseModalButton" onClick={()=> setShowModal (!Prev)}/> */}
       <CloseIcon className="CloseModalButton"  onClick={()=> setShowModal (!Prev)}   />  
        </div>
        </div>
        </div>
     ):null}

     </>
      )       
   
 };
     





