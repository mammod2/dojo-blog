import {useParams , useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog , error , isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: 'DELETE'
        }).then(()=> {
            history.push('/')
        })
    }
    return ( 
        <div>
            {/* pending  */}
                {isPending && <div className='flex justify-center animate-pulse my-6'> 
                <h1 className='mx-2 '>Loading...</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                </div>}
                {error && <h1 className='border p-12 animate-pulse'>{error}</h1>}
            {blog && (
                <article className="text-left mx-2">
                    <h2 className="mb-4 text-2xl font-semibold text-red-600">{blog.title}</h2>
                    <p className="text-sm mb-4">Written by {blog.author}</p>
                    <div className="">
                        <p>{blog.body}</p>

                    </div>
                    <button  className=" hover:animate-bounce w-6 h-6 mt-4 " onClick={()=> handleDelete()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                     <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                        </button>
                    
                </article>
                
            )}
        </div>
     );
}
 
export default BlogDetails
