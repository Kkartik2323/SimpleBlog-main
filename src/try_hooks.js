import { useState,useEffect} from "react";




function App() {
  const prevname='';
  const [name,setName]=useState('ayush');
  const [bool,setBool]=useState(true);   

  useEffect(() => {
    
     const local=localStorage.getItem('Name');
     setName([local]);
     
  },[]);



 function update(bool){
  
 {bool?<div>{setName(prevname=>{
  localStorage.setItem('Name', prevname);
  return['aditya',...prevname]
 })  }
  {setBool(false) } </div>
  :
  <div>{setName(prevname=>{
    localStorage.setItem('Name', prevname);
    return['ayush',...prevname]
  })
 
 } 
  {setBool(true) }</div>  }


 }

  



  return (
    
    <div className="App">
    {name}

    <br>
    </br>
    
    <button className="buttton" onClick={()=>update(bool)} >update</button>
    </div>
  );
}

export default App;
