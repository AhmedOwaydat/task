import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './nav.css';

class Navbar extends Component {

    state = {
        nav_links: [
          {
            name: "Home",
            path: "/",
            icon: "fab fa-twitter"
          },
          {
            name: "Moments",
            path: "/moments",
            icon: "fas fa-bolt"
          },
          
        ],
    }

    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            this.state.nav_links.map( (navlink, index) => (
                                
                                (
                                    <li className="nav-item" key={index}>
                                        <NavLink exact to={navlink.path} className="nav-link" activeClassName="active_tab">
                                            <i className={navlink.icon}></i>
                                            {navlink.name}
                                        </NavLink>
                                    </li>
                                )
                            ))
                        }    
                    </ul>
                </div>
                <form className="search-form form-inline my-2 my-lg-0">
                    <input className="search-input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button type="submit" className="btn search-btn fas fa-search">
                    </button>
                </form>
                <div className="logging">
                    <span>Have an account? </span>
                    <button className="login btn"> Login
                        <i className="fas fa-sort-down"></i>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Navbar;