const Navbar = () => {
    return ( 
        <div className=" text-gray ">
        <nav className="Navbar flex justify-between items-center p-2 px-4 mb-2  ">
            <h1 className="hover:text-gray-400 text-xl font-semibold cursor-pointer">The blog</h1>
            <div className="link">
                <a href="" className="home px-2 hover:text-gray-400">Home</a>
                <a href="" className="blog px-2 py-1   hover:bg-red-400 hover:text-gray-100 rounded" >New Blog</a>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;