import React from 'react';
import './Blog.css';

export const Blog = (props) => {

    function handleClick() {
        props.onDelete(props.id);
      }

  return (
    <div className='container-blog'>
        
        <div className='contentblog'>
            <div className='bloginside'>
             <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button className='button' onClick={handleClick}>DELETE</button>
      </div>
      </div>
    </div>
  )
}
