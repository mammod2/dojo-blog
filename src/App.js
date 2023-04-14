import './App.css';
import Navbar  from './Navbar';
import Home  from './Home';
import { BrowserRouter as Router, Route , Switch  } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
    <div className="App bg-[#FAF9F6] min-h-screen ">
      <div className='sm:w-1/2 mx-auto'>
        <div className="mb-12" >
      <Navbar />
        </div>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
      </Switch>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
