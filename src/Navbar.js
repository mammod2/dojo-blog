import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className=" text-gray border-b-2">
        <nav className="Navbar flex flex-col text-left p-2 px-4 mb-2  sm:flex-row sm:justify-between ">
            <h1 className="hover:text-gray-400 text-xl font-semibold cursor-pointer">The blog</h1>
            <div className="flex flex-col sm:block">
                <Link to="/" className="home px-2 hover:text-gray-400">Home</Link>
                <Link to="/create" className="blog px-2 py-1   hover:bg-red-400 hover:text-gray-100 rounded" >New Blog</Link>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;