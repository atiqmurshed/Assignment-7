import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';

const Data = () => {
    const [mini, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('fa-data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            
            {
                mini.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    ></Blog>)
            }
            
        </div>
    );
};

export default Data;
   