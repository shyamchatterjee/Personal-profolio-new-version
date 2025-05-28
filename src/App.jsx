
import './App.css'
import Navbar from './component/nabar/navbar'
import Home from './component/home/home'
import About from './component/about/about'
import Service from './component/service/service'
import Work from './component/work/work'
import Contect from './component/contect/contect'

function App() {
     return <> <div className='body'>
            <div className='container'>
                <Navbar/> 
          <Home/>
           <About/> 
           <Service/> 
         <Work/>
         <Contect/> 
            </div>
    </div>
          
           

      
          
     </>
}

export default App
