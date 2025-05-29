 import { useContext, useState } from 'react';
import './navbar.css'
    import { CiLight } from "react-icons/ci";
    import { FaBars } from "react-icons/fa6";
  import { IoMdClose } from "react-icons/io";
  import AnchorLink from 'react-anchor-link-smooth-scroll'
  import { CiDark } from "react-icons/ci";
import { Context } from '../../context/context';
 let Navbar = ()=>{
let [boolen,setBoolen] = useState(true)
  let [bool,setBool] = useState(true)
  let {mode,setMode} = useContext(Context)
       let clickbar = ()=>{
               setBoolen(false)
       }
       let [page,setpage] = useState("home")
   return <> {mode=="dark"? <div className="navbar-section">
         <div className='canvas-icon'>
         <img src="https://www.pixelresort.com/wp-content/uploads/2022/12/procreate-icon.png" height={22} width={22} alt="" />
                  <p>ProjectHub.</p>
                  </div>
                  <div className="navbar">
                     
            <AnchorLink  href='#home'><p onClick={()=>{setpage("home")}}   className={page=="home"?"active":""} style={{color:"white"}}  >Home</p> </AnchorLink>  
              <AnchorLink  href='#about'> <p  onClick={()=>{setpage("about")}} className={page=="about"?"active":""}   style={{color:"white"}}  >About me</p></AnchorLink> 
               <AnchorLink   href='#service'>  <p  onClick={()=>{setpage("service")}}  className={page=="service"?"active":""}  style={{color:"white"}} >Service</p></AnchorLink> 
                <AnchorLink href='#work'><p  onClick={()=>{setpage("work")}}  style={{color:"white"}} className={page=="work"?"active":""}    >My Work</p></AnchorLink> 
                <AnchorLink href='#contect'><p   onClick={()=>{setpage("contect")}} className={page=="contect"?"active":""}   style={{color:"white"}} >Contect</p></AnchorLink> 
                 </div>
                  <div className={boolen==true?"navbar-mobile":"navbar-change"}>
                     <IoMdClose className='close-icon'  onClick={()=>{setBoolen(true)}}  />
               <AnchorLink href='#home'> <p   onClick={()=>{setpage("home")}} style={{color:"white"}} className={page=="home"?"active":""}  >Home</p></AnchorLink> 
                 <AnchorLink    href='#about'> <p  onClick={()=>{setpage("about")}} className={page=="about"?"active":""}   style={{color:"white"}} >About me</p></AnchorLink> 
                 <AnchorLink   href='#service'>  <p  onClick={()=>{setpage("service")}} className={page=="service"?"active":""}  style={{color:"white"}}   >Service</p></AnchorLink> 
               <AnchorLink   href='#work'> <p onClick={()=>{setpage("work")}} className={page=="work"?"active":""}   style={{color:"white"}} >My Work</p></AnchorLink>
                <AnchorLink  href='#contect'>  <p onClick={()=>{setpage("contect")}} className={page=="contect"?"active":""}  style={{color:"white"}} >Contect</p></AnchorLink>
                  
                  </div>
                  <div className='button-icon'>
             <AnchorLink href='#contect'> <button className='contect-button'>Contact with me</button></AnchorLink>
               {bool==true? <CiLight className='full-screen-icon' onClick={()=>{setBool(false),setMode("light")
               }} />:<CiDark  className='full-screen-icon'   onClick={()=>{setBool(true),setMode("dark")}}/>}  
                  </div>

                      <div className='bar-mode'>
                    {bool==true? <CiLight className='mobile-screen-icon' style={{fontSize:"30px"}}  onClick={()=>{setBool(false),setMode("light")
               }} />:<CiDark  className='mobile-screen-icon'  style={{fontSize:"30px"}}  onClick={()=>{setBool(true),setMode("dark")}}/>}  
                  <FaBars className='bar' onClick={clickbar}/>
              
               </div>



       </div>: <div className="navbar-section">
         <div className='canvas-icon' style={{color:"black"}}>
         <img src="https://www.pixelresort.com/wp-content/uploads/2022/12/procreate-icon.png" height={22} width={22} alt="" />
                  <p style={{color:"black",fontWeight:"bold"}} >ProjectHub.</p>
                  </div>
                  <div className="navbar" style={{color:"black",fontSize:"20px"}}>
                     
            <AnchorLink  href='#home'><p onClick={()=>{setpage("home")}}   className={page=="home"?"active":""} style={{color:"black"}}  >Home</p> </AnchorLink>  
              <AnchorLink  href='#about'> <p  onClick={()=>{setpage("about")}} className={page=="about"?"active":""}   style={{color:"black"}}  >About me</p></AnchorLink> 
               <AnchorLink   href='#service'>  <p  onClick={()=>{setpage("service")}}  className={page=="service"?"active":""}  style={{color:"black"}} >Service</p></AnchorLink> 
                <AnchorLink href='#work'><p  onClick={()=>{setpage("work")}}  style={{color:"black"}} className={page=="work"?"active":""}    >My Work</p></AnchorLink> 
                <AnchorLink href='#contect'><p   onClick={()=>{setpage("contect")}} className={page=="contect"?"active":""}   style={{color:"black"}} >Contect</p></AnchorLink> 
                 </div>
                  <div className={boolen==true?"navbar-mobile-light":"navbar-change-light"}>
                     <IoMdClose className='close-icon' style={{color:"black"}}  onClick={()=>{setBoolen(true)}}  />
               <AnchorLink href='#home'> <p   onClick={()=>{setpage("home")}} style={{color:"black"}} className={page=="home"?"active":""}  >Home</p></AnchorLink> 
                 <AnchorLink    href='#about'> <p  onClick={()=>{setpage("about")}} className={page=="about"?"active":""}   style={{color:"black"}} >About me</p></AnchorLink> 
                 <AnchorLink   href='#service'>  <p  onClick={()=>{setpage("service")}} className={page=="service"?"active":""}  style={{color:"black"}}   >Service</p></AnchorLink> 
               <AnchorLink   href='#work'> <p onClick={()=>{setpage("work")}} className={page=="work"?"active":""}   style={{color:"black"}} >My Work</p></AnchorLink>
                <AnchorLink  href='#contect'>  <p onClick={()=>{setpage("contect")}} className={page=="contect"?"active":""}  style={{color:"black"}} >Contect</p></AnchorLink>
                  
                  </div>
                  <div className='button-icon'>
             <AnchorLink href='#contect'> <button className='contect-button'>Contact with me</button></AnchorLink>
               {bool==true? <CiLight className='full-screen-icon' style={{color:"black"}} onClick={()=>{setBool(false),setMode("light")
               }} />:<CiDark  className='full-screen-icon' style={{color:"black"}}  onClick={()=>{setBool(true),setMode("dark")}}/>}  
                  </div>

                      <div className='bar-mode'>
                    {bool==true? <CiLight className='mobile-screen-icon' style={{color:"black"}} onClick={()=>{setBool(false),setMode("light")
               }} />:<CiDark  className='mobile-screen-icon'  style={{color:"black",fontSize:"30px"}}  onClick={()=>{setBool(true),setMode("dark")}}/>}  
                  <FaBars className='bar' style={{color:"black"}} onClick={clickbar}/>
              
               </div>



       </div>
 
 }</>
   
 }
 export default Navbar