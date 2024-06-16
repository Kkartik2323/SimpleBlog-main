import React, { useState,useRef } from 'react';
import "./Create.css";
import uploadimage from "../assets/uploadimage.jpg";


export const Create = (props) => {

    const [blog,setBlog]=useState({
        title:"",
        content:"",
       
    });

   
const inputref=useRef(null);
const [image,setImage]=useState("");

      const handleImageChange=(event)=>{
        const file =event.target.files[0];
       console.log(file);
       setImage(previmage=>{
        return{
            ...previmage,file}}
      )}


      const handleImageClick=()=>{
        inputref.current.click();
      
      };
      
      


    function handleChange(event){
const {name,value}=event.target;
setBlog(prevblog=>{
    return{
        ...prevblog,
        [name]:value
    }
})
    }

    function submitNote(event){
        props.onAdd(blog);
        setImage("");
        setBlog({
            title:"",
            content:"",
          
        });
        event.preventDefault();

    }

  return (
    <div className='containercreate'>
 
 <form>
 
    <div className='title'>
        <input
          name="title"
          onChange={handleChange}
          value={blog.title}
          placeholder="Title"
        />
        </div>
        <div className='textarea'>
        <textarea
          name="content"
          onChange={handleChange}
          value={blog.content}
          placeholder="Take a note..."
          rows="3"
        />
        </div>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  )
}
