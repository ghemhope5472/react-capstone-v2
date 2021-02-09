import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import '../Navbar.css'


export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md ">
                        <div className='container'>
                        <Link className="navbar-brand" href="#">
                        {/* <img src='logo.png' />       */}
                        
                        </Link>
                     <button className="navbar-toggler"  data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='menuBtn'> <i class="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                                <Link className="nav-link" href="#"> <i class="fas fa-igloo"></i> HOME </Link>
                            </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search"> </i>  REVIEW
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" href="#">General Education</Link>
                            <Link className="dropdown-item" href="#">Professional Education</Link>
                            
                            <Link className="dropdown-item" href="#">Majors</Link>
                            </div>
                        </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"> <i class="fas fa-pencil-alt"></i> MOCK EXAM </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" href="#"> <i class="fas fa-info-circle"></i> ABOUT </Link>
                            </li>
                            
                            
                        </ul>
                         <li class="">
                            <Link class="btn btn-warning link" href="/login" > Get started </Link>
                        </li>
                            
                    </div>
                        </div>
                    
                </nav>
            </header>
        )
    }
}

