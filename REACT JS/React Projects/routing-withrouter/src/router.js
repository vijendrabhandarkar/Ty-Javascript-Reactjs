import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import About from './components/about/About';
import Home from './components/home/Home';

const routing = (

    <div>
        <div className='navbar-div'>
            <div className='insiderDiv inDivOne'><Link to='/'><button >Home</button></Link></div>
            <div className='insiderDiv inDivTwo'><Link to='/about'><button>About</button></Link></div>
        </div>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
    </div>

);


export default routing;