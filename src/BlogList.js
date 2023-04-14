import {Link} from 'react-router-dom'
const BlogList = ({blogs ,  title , handleDelete}) => {
    
    ;
    
    return (  
        <div className="BlogList mt-10">
            <h1 className="text-2xl text-left mx-6 font-semibold">{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview m-4 hover:border flex justify-between p-2 hover:shadow-md shadow-slate-700 rounded-md cursor-pointer" key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}>
                    <div>
                    <h2 className='text-red-600 font-semibold text-lg text-left '>{blog.title}</h2>
                    <p className='font-light text-left'>Written by : {blog.author}</p>
                    </div>
                    </Link>
                    <div className="m-2" >
                    
                    </div>

                </div>
            ))}
        </div>
    );
}
 
export default BlogList;