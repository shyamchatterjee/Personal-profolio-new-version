import './work.css'
import  project1 from "../../assets/project1.png";
import  project2 from "../../assets/project2.png";
import  project3png from "../../assets/project3png.png";
import  project4 from "../../assets/project4.png";
import  project5 from "../../assets/project5.png";
import { FaArrowRight } from "react-icons/fa";
let Work = ()=>{
    return <div className="mywork-container" id='work'>
            <div className="work-about" style={{color:"white"}}>
                  <p style={{fontSize:"30px",color:"white"}}>My Work</p>
                  <div className='about'>
                  <p>I'm excited to share my Some frontend development projects</p>
                  <p>used React.js ⚛️ HTML5 & CSS3 🎨JavaScript Responsive Design with Flexbox</p>
                  <p>and I am excited to keep building and learning more every day!</p>
                  </div>
                </div>
                <div className='project-section'>
                     <a href="https://todotoday-52.vercel.app/"><img src={project2} alt="" className='project-img'/></a> 
                     <a href="https://shopzones.vercel.app/"><img src={project1} alt="" className='project-img'/></a> 
                    <a href="https://calculator-five-sooty-65.vercel.app/"><img src={project3png} alt="" className='project-img'/></a>  
                     <a href="https://weather-app-silk-five-67.vercel.app/"><img src={project4} alt="" className='project-img' style={{border:"1px solid white"}}/></a> 
                  <a href="https://www.linkedin.com/posts/shyam-chatterjee-70bb7531a_just-completed-a-shoe-collection-web-app-activity-7323542836342083584-_N0T?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFD5gLsBuAOKtsVVPKIdVjJnZB_x0ygSPIQ"> <img src="https://media.licdn.com/dms/image/v2/D4D22AQHTsAeqKKrbgw/feedshare-shrink_2048_1536/B4DZZuJG10HIAo-/0/1745604670342?e=1750896000&v=beta&t=4Hcdt-1R_rimhoGjBgqRtk-mXYIebb8M3qBVIfyaSzw" alt="" className='project-img'/></a>   
                    <a href="https://www.linkedin.com/posts/shyam-chatterjee-70bb7531a_just-launched-currency-converter-app-activity-7328322777759809537-p7_B?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFD5gLsBuAOKtsVVPKIdVjJnZB_x0ygSPIQ"><img src={project5} alt="" className='project-img'/></a>  
                   
                </div>
                <div className='button-container'>
             <a href="http://github.com/shyamchatterjee" target="_blank"><button className='see-more'>See more <FaArrowRight/></button></a>
               </div>
     </div>
}
export default Work