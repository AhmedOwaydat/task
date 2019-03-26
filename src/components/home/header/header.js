import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

export default class Header extends Component {

    state = {
        info: [
            {
                name: "Tweets",
                number: "29.7k",
                path: "/tweets",
            },
            {
                name: "Following",
                number: "184",
                path: "/following",
            },
            {
                name: "Followers",
                number: "1.49M",
                path: "/followers",
            },
            {
                name: "Likes",
                number: "3614",
                path: "/likes",
            },
            {
                name: "Lists",
                number: "24",
                path: "/lists",
            },
        ]
    }

    render(){
        return (
            <section className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="cover">
                            <img className="img-fluid" src="https://pbs.twimg.com/profile_banners/19701628/1553522020/1500x500" alt="user cover" />
                        </div>
                        <div className="userImage">
                            <img className="img-thumbnail" src="https://pbs.twimg.com/profile_images/1110178686450483200/F5-Jmzk7_400x400.png" alt="user pic" />
                        </div>
                        <div className="info col-12 mx-auto text-center">
                            <ul className="list-inline">
                                {
                                    this.state.info.map( (link, index) => (
                                        
                                        (
                                            <li className="list-inline-item" key={index}>
                                                <Link to={link.path} className="nav-link" >
                                                    {link.name} <br/> 
                                                    <span className="linkNumber">{link.number}</span>
                                                </Link>
                                            </li>
                                        )
                                    ))
                                }    
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}