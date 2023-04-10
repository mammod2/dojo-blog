import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs , setData:setBlogs , isPending, error } = useFetch('http://localhost:8000/blogs')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
       

    return ( 
        <div className="mt-10">
            <div className=''>
            {/* <h2>Home Page</h2> */}
                {error && <h1 className='border p-12 animate-pulse'>{error}</h1>}
             {isPending && <div className='flex justify-center animate-pulse my-6'> 
                <h1 className='mx-2 '>Loading...</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                </div>}
                {blogs && <BlogList blogs={blogs} title= "All Blogs" handleDelete={handleDelete}/>}
            
            </div>
        </div>
     );
}
 
export default Home ;