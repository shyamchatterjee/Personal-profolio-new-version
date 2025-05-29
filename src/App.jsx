
import './App.css'
import Navbar from './component/nabar/navbar'
import Home from './component/home/home'
import About from './component/about/about'
import Service from './component/service/service'
import Work from './component/work/work'
import Contect from './component/contect/contect'
import { useContext } from 'react'
import { Context } from './context/context'

function App() {
     let {mode} = useContext(Context)
     return <>
     {mode=="dark"? <div className='body'>
            <div className='container'>
                <Navbar/> 
          <Home/>
           <About/> 
           <Service/> 
         <Work/>
         <Contect/> 
            </div>
    </div>: <div className="body-light">
            <div className='container'>
                <Navbar/> 
          <Home/>
           <About/> 
           <Service/> 
         <Work/>
         <Contect/> 
            </div>
    </div>
          
           

          
           
} 
      
          
     </>
}

export default App
