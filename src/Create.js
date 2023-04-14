import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [ author, setAuther] = useState('')
    const [isPending , setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title , body , author}
        setIsPending(true)

    fetch("http://localhost:8000/blogs" , {
        method:"POST",
        headers:{ "Content-Type" : "application/json"},
        body : JSON.stringify(blog)
    
    }).then(() => {
        console.log("new blog added");
        setIsPending(false)
        history.push("/")
    
    })

    }

    return ( 
        <div className="m-4">
            <h2 className="font-semibold text-2xl text-left mb-4">Add a new Blog</h2>

            <form action="" className="" onSubmit={handleSubmit}>
                <div className="flex  flex-col  text-left mb-6">
                <label htmlFor="">Blog title: </label>
                <input type="text" className="p-2" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div >
                <div className="flex flex-col  text-left mb-6">
                <label htmlFor="">Blog body:</label>
                <textarea required className="p-2 h-48" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div className="flex flex-col text-left mb-6">
                <label htmlFor="" className="mr-2">Blog author:</label>
                <input type="text" className="p-2" required value={author} onChange={(e)=> setAuther(e.target.value)}/>
                </div>
                {!isPending && <button className="bg-red-400 px-2 text-white hover:bg-red-300 rounded-md">Submit</button>}
                {isPending && <button className="bg-red-400 px-2 text-white hover:bg-red-300 rounded-md">Adding blog...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;