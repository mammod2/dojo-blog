import {useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title : "My new website", body: "lorem ipusum ...." , author: "mario", id:1 },
        {title : "Lets party !", body: "lorem ipusum ...." , author: "Luigi", id:2 },
        {title : "Web dev stuff", body: "lorem ipusum ...." , author: "mario", id:3 },
    ])
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        console.log("used");
    },[])

    return ( 
        <div className="Home ">
            <div className=''>
            {/* <h2>Home Page</h2> */}
            <BlogList blogs={blogs} title= "All the blogs" handleDelete={handleDelete}/>
            
            </div>
        </div>
     );
}
 
export default Home ;