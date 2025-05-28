 import { useState } from 'react';
import './navbar.css'
    import { CiLight } from "react-icons/ci";
    import { FaBars } from "react-icons/fa6";
  import { IoMdClose } from "react-icons/io";
 
 
 let Navbar = ()=>{
let [boolen,setBoolen] = useState(true)

       let clickbar = ()=>{
               setBoolen(false)
       }
   return <div className="navbar-section">
         <div className='canvas-icon'>
         <img src="https://www.pixelresort.com/wp-content/uploads/2022/12/procreate-icon.png" height={22} width={22} alt="" />
                  <p>ProjectHub.</p>
                  </div>
                  <div className="navbar">
                     
              <p  style={{color:"white"}}  >Home</p> 
                <p  style={{color:"white"}}  >About me</p>
                 <p  style={{color:"white"}} >Service</p>
                 <p  style={{color:"white"}}   >My Work</p>
                 <p  style={{color:"white"}} >Contect</p>
                 </div>
                  <div className={boolen==true?"navbar-mobile":"navbar-change"}>
                     <IoMdClose className='close-icon'  onClick={()=>{setBoolen(true)}}  />
                <p   >Home</p>
                   <p  style={{color:"white"}} >About me</p>
                   <p  style={{color:"white"}}   >Service</p>
                <p  style={{color:"white"}} >My Work</p>
                  <p  style={{color:"white"}} >Contect</p>
                  
                  </div>
                  <div className='button-icon'>
              <button className='contect-button'>Contact with me</button>
                  <CiLight className='full-screen-icon' />
                  </div>

                      <div className='bar-mode'>
                    <CiLight className='mobile-screen-icon' />
                  <FaBars className='bar' onClick={clickbar}/>
              
               </div>



       </div>
 
 }
 export default Navbar