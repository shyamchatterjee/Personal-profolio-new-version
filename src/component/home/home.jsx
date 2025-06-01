import { useContext, useRef } from "react";
import "./home.css";
import { Context } from "../../context/context";
 import AnchorLink from 'react-anchor-link-smooth-scroll'
 import { useGSAP } from "@gsap/react";
import gsap from "gsap";
let Home = () => {
     let ref = useRef()
     useGSAP(()=>{
         gsap.from("img",{
          y:100,
           opacity:0,
          duration:3,
          delay:0.5
         })
     },{scope:".header-section"})
    useGSAP(()=>{
      gsap.from("p",{
           y:100,
          opacity:0,
          duration:3,
          delay:0.5
      })
    },{scope:".header-section"})
 useGSAP(()=>{
  gsap.from("button",{
    y:100,
     opacity:0,
          duration:3,
          delay:0.5
  })
 },{scope:".header-section"})
  let {mode} = useContext(Context)
  return <>{mode=="dark"?<div id="home" className="header-section" ref={ref}>
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQE-4chE9AUJSg/profile-displayphoto-shrink_800_800/B4DZZCmfrwGwAc-/0/1744874113781?e=1753315200&v=beta&t=nmE_bnRCgltXMBO7VP06Ij0fEC0D-iQzXDM8fXsmSjI"
        height={150}
        width={150}
        className="my-pic"
        alt=""
      />
      <p className="name">Hi i'm Shyamdyuti Chatterjee</p>
      <p style={{ color: "white", fontSize: "20px" }}>
        Frontend Web Developer...
      </p>
      <div className="peragraph">
        
        <p style={{ color: "white", fontSize: "15px" }}>
          I'm a passionate Front-End Developer with a strong{" "}
        </p>{" "}
        <p style={{ color: "white", fontSize: "15px" }}>
          foundation in HTML, CSS, Javascript, and modern frameworks like React
        </p>{" "}
        <p style={{ color: "white", fontSize: "15px" }}>
          {" "}
          I love turning creative ideas into responsive,user-freindly website
          and application
        </p>
        
        <div className="button-container">
        <AnchorLink  href="#contect"> <button className="button1">Contect with me</button></AnchorLink> 

          <a
            href="https://drive.google.com/file/d/1AjytQDHB8AJGmkyfw7mPMB33r5WMEGsD/view?usp=drivesdk"
            target="_blank"
          >
            <button className="button2">My resume</button>
          </a>
        </div>
      </div>
    </div>:<div id="home" className="header-section">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQE-4chE9AUJSg/profile-displayphoto-shrink_800_800/B4DZZCmfrwGwAc-/0/1744874113781?e=1753315200&v=beta&t=nmE_bnRCgltXMBO7VP06Ij0fEC0D-iQzXDM8fXsmSjI"
        height={150}
        width={150}
        className="my-pic"
        alt=""
      />
      <p className="name">Hi i'm Shyamdyuti Chatterjee</p>
      <p style={{ color: "black", fontSize: "20px" }}>
        Frontend Web Developer...
      </p>
      <div className="peragraph">
        
        <p style={{ color: "black", fontSize: "15px" }}>
          I'm a passionate Front-End Developer with a strong{" "}
        </p>{" "}
        <p style={{ color: "black", fontSize: "15px" }}>
          foundation in HTML, CSS, Javascript, and modern frameworks like React
        </p>{" "}
        <p style={{ color: "black", fontSize: "15px" }}>
          {" "}
          I love turning creative ideas into responsive,user-freindly website
          and application
        </p>
        
        <div className="button-container">
         <AnchorLink href="#contect"><button className="button1">Contect with me</button>
</AnchorLink> 
          <a
            href="https://drive.google.com/file/d/1AjytQDHB8AJGmkyfw7mPMB33r5WMEGsD/view?usp=drivesdk"
            target="_blank"
          >
            <button className="button2-light" >My resume</button>
          </a>
        </div>
      </div>
    </div>}</>
    
  
};
export default Home;
