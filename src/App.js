import './App.css';
import Navbar  from './Navbar';
import Home  from './Home';
function App() {
  return (
    <div className="App bg-[#FAF9F6] min-h-screen ">
      <div className='w-1/2 mx-auto'>
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
      </div>
    </div>
  );
}

export default App;
