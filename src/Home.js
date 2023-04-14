import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs , setData:setBlogs , isPending, error } = useFetch('http://localhost:8000/blogs')

    const handleDelete = (id) => {
        fetch('http://localhost:8000/blogs' + blogs.id , {
            method:"DELETE"
        })
    }
       

    return ( 
        <div className="mt-10">
            <div className=''>
            {/* <h2>Home Page</h2> */}
                {error && <h1 className='border p-12 animate-pulse'>{error}</h1>}
             {isPending && <div className='flex justify-center animate-pulse my-6'> 
                <h1 className='mx-2 '>Loading...</h1>
                
                </div>}
                {blogs && <BlogList blogs={blogs} title= "All Blogs" handleDelete={handleDelete(blogs.id)}/>}
            
            </div>
        </div>
     );
}
 
export default Home ;