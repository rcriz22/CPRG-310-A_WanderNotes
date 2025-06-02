import Navbar from './component/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About.jsx';
import Blog from'./pages/Blog.jsx'
import Places from './pages/Places.jsx';
import { Route,Routes,} from 'react-router-dom';
import './style.css';


function Container() {
    return (
        <>
        
        <Navbar />
         <div className="bodypages"> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/places' element={<Places />} />
            </Routes>
         </div>
        
         <footer>
            <p> &copy;2025 Wander Notes ~ Blog. All rights reserved.</p>
            <p> Designed with ❤️ by Raizel Criz Tayao. </p>
        </footer>
    
        </>
    )
}

export default Container;