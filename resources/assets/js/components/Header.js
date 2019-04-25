import React, { Component } from 'react';
import  {BrowserRouter as Router,Link, Route} from  'react-router-dom'

import Home from './Home'
 import About from './About'
 import  Category from './categorys/Index'

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h3>header</h3>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">Category</Link>
                            </li>

                        </ul>
                    </nav>

                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/category' component={Category}/>
                </div>
            </Router>

        );
    }
}




