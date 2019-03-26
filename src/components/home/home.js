import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './header/header'
import LeftSideBar from './leftSideBar/leftSideBar'
import RightSideBar from './rightSideBar/rightSideBar'
import './home.css';

export default class Home extends Component {
    render(){

        return (
            <div className="home">
                <Header />
                <section className="body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="links col-12 text-center">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to='/tweets' className="nav-link" >Tweets</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to='/tweets-replies' className="nav-link" >Tweets&Replies</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to='/media' className="nav-link" >Media</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="left-side-bar col-3 mx-auto">
                                <LeftSideBar />
                            </div>
                            <div className="posts col-6 mx-auto">
                            <div className="posts">
                                
                            </div>
                            </div>
                            <div className="right-side-bar col-3 mx-auto">
                                <RightSideBar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}