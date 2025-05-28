
import { createContext, useState } from "react";
  
export let Context = createContext(null)
export let ContextFuntion = ({children})=>{
        let [send,setSend] = useState("")
   let [massage,setmassage] = useState("")
   let [name,setName] = useState("")
   let [email,setEmail] = useState("")
   let [msg,setmsg] = useState("")
    let [mode,setMode] = useState("dark")
       let onSubmit = async(e)=>{
           e.preventDefault()
           setSend("...Sending")
           let formData = new FormData(e.target)
          formData.append("access_key" , "e1c5c893-89ce-4791-abe4-5c39321e3dfc")
            console.log(formData)
          let responce =  await fetch("https://api.web3forms.com/submit",{
                  method:"post",
                  body : formData
            })
            setSend("")
            let data = await responce.json()
            if (data.success==true) {
                  setmassage("✅ " +data.message)
            }else{
                    
                       setmassage("❌ " +"Your submit not successful")
                
                
            }
            setmsg("")
            setEmail("")
            setName("")
            
            
           

        }
    return <Context.Provider value={{onSubmit,send,massage,msg,setmsg,email,setEmail,name,setName,mode,setMode}}>
          {children}
    </Context.Provider>
}