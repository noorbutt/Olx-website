import React from 'react'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ChatIcon from '@material-ui/icons/Chat';





 const SidebarData = [  
{ 
        title:' Start selling',
        path : 'Start selling',
        icon :  <CameraAltIcon/>,
        cName : 'nav-text',
    },


    {
        title:'My Adds ',
        path : 'Myadds',
        icon :  <FilterNoneIcon/>,
        cName : 'nav-text',
    },
    
    
    {
        title:'Chat ',
        path : 'Chat',
        icon : <ChatIcon/>,
        cName : 'nav-text',
    }
    
    
] 


export default SidebarData ;




