import { useState,useEffect} from "react";
import Header from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Create } from "./container/Create";
import { Blog } from "./container/Blog";
import './App.css';

function App() {

    const [blogs,setBlogs]=useState([]);

    function deleteBlog(id){
        setBlogs(prevBlogs => {
            return prevBlogs.filter((blogItem, index) => {
              return index !== id;
            });
          });
    }
    function addBlog(newBlog) {
        setBlogs(prevBlogs => {
          return [ newBlog,...prevBlogs];
        });
      }

 return(<><div className="main">
 <Header/>
 {/* <Body/> */}
 <Create onAdd={addBlog}></Create>

 {blogs.map((blogItem, index) => {
        return (
          <Blog
            key={index}
            id={index}
            title={blogItem.title}
            content={blogItem.content}
            onDelete={deleteBlog}
          />
        );
      })}




 <Footer/>
 </div>
 </>)

}

export default App;
