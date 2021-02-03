import React, {Component} from 'react'
import {Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
                    <a className="navbar-brand" href="#">JHCSC Online BLEPT Reviewer</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Review
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">General Education</a>
                            <a className="dropdown-item" href="#">Professional Education</a>
                            
                            <a className="dropdown-item" href="#">Majors</a>
                            </div>
                        </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mock Exam</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Download Materials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

