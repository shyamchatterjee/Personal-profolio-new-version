import { array } from "../../data/data"
import { FaArrowRight } from "react-icons/fa";
import './service.css'
import { useContext } from "react";
import { Context } from "../../context/context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
let Service = ()=>{
    let {mode} = useContext(Context)
    useGSAP(()=>{
        gsap.from("div",{
                  y:100,
          opacity:0,
          duration:3,
          delay:1,
          scrollTrigger:{
              trigger :".service"
          }

        })
    },{scope:".service-section"})
    return <> {mode=="dark"? <div className="service-section" style={{color:"white"}} id='service'>
        <div className='service-about'>
                        <p style={{fontSize:"30px",color:"white"}}>My Services</p>
                        <div className='services' style={{color:"white",marginTop:"1rem"}}>
                       <p>I m a front-end developer. I don't have any technical degree.</p>
                       <p>I learned web development through youtube and other one resources.</p>
                       <p>I know HTML, CSS, Javascript, React.</p>
                       <p>I love coding and practice daily to improve my skills and build projects.</p>
                       </div>
            </div>
            <div className='service-container' style={{color:"white"}}>
                     {array.map((element)=>{
                           return <div className='service'>
                                  <img src={element.icon} height={20} width={20} alt="" />
                                   <p className='service-h1' style={{fontSize:"20px" , fontWeight:"bolder"}}>{element.name}</p>
                                   <p>{element.about}</p>
                                    <p>{element.about2}</p>
                                     <p>{element.about3}</p>
                                     <a href={element.link} target="_blank" rel="noopener noreferrer">
                                        <div className='read-more'><p style={{color:"white"}}>Read more</p>
                                     <FaArrowRight style={{color:"white"}}/>
                                     </div>
                                     </a>
                           </div>
                     })}
            </div>

       </div>: <div className="service-section" style={{color:"black"}} id='service'>
        <div className='service-about'>
                        <p style={{fontSize:"29px",color:"black"}}>My Services</p>
                        <div className='services' style={{color:"black",marginTop:"1rem"}}>
                       <p>I m a front-end developer. I don't have any technical degree.</p>
                       <p>I learned web development through youtube and other one resources.</p>
                       <p>I know HTML, CSS, Javascript, React.</p>
                       <p>I love coding and practice daily to improve my skills and build projects.</p>
                       </div>
            </div>
            <div className='service-container' style={{color:"black"}}>
                     {array.map((element)=>{
                           return <div className='service-light'>
                                  <img src={element.icon} height={20} width={20} alt="" />
                                   <p className='service-h1' style={{fontSize:"20px" , fontWeight:"bolder"}}>{element.name}</p>
                                   <p>{element.about}</p>
                                    <p>{element.about2}</p>
                                     <p>{element.about3}</p>
                                     <a href={element.link} target="_blank" rel="noopener noreferrer">
                                        <div className='read-more'><p style={{color:"black"}}>Read more</p>
                                     <FaArrowRight style={{color:"black"}}/>
                                     </div>
                                     </a>
                           </div>
                     })}
            </div>

       </div>} </>
}
export default Service